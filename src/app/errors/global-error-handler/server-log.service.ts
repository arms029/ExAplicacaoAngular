import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { environment } from '../../../environments/environment'

const API_URL = environment.ServerLogUrl;

@Injectable({providedIn:'root'})
export class ServerLogService{

    constructor(private http: HttpClient){}

    log(serverLog: ServerLog){
        return this.http.post(API_URL + '/infra/log', serverLog);
    }
}