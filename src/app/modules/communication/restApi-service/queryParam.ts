import { Injectable } from "@angular/core";
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn:'root',
})


export class QueryParam {
   loginData:any;
   public setPram(value) {
    this.loginData = value;    
  }
  public getParam(){    
    return this.loginData;
  }
}
