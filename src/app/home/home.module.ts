import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [
      SigninComponent,
      SignUpComponent,
      HomeComponent
    ],
    imports: [
      CommonModule, 
      FormsModule,
      ReactiveFormsModule, 
      VmessageModule,
      RouterModule,
      HomeRoutingModule
    ],
    providers: [SignUpService]
  })
export class HomeModule{

}