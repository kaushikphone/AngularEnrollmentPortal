import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
