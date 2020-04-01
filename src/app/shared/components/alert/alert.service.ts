import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { AlertType, Alert } from './alert';

@Injectable({providedIn: 'root'})
export class AlertService{

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouteChange = false;

    constructor(router: Router){
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else{
                    this.clear();
                }
            }
        })
    }

    success(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.SUCESS, message, keepAfterRouteChange)
    }

    warning(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.WARNING, message, keepAfterRouteChange)
    }

    danger(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.DANGER, message, keepAfterRouteChange)
    }

    info(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.INFO, message, keepAfterRouteChange)
    }

    private alert(AlertType: AlertType, message: string, keepAfterRouteChange: boolean){
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(new Alert(AlertType, message));
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }

    clear(){
        this.alertSubject.next(null);
    }
}