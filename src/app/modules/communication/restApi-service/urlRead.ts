import { Injectable } from "@angular/core";
import { CommonModule } from '@angular/common';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn:'root',
})


export class UrlRead { 
  optionsBar={
        baseURL:environment.soap_url,
        _GetLoginDetailsUrl:environment.soap_url+"/EnrollmentPortal/services/MacawClientGateway?op=invokeService",
        achAddBankAccountUrl:environment.proxy_url+"https://sandbox.checkbook.io/v3/bank",
        achReleaseMicroUrl:environment.proxy_url+"https://sandbox.checkbook.io/v3/bank/release",
        achVerifyMicroUrl:environment.proxy_url+"https://sandbox.checkbook.io/v3/bank/verify",
    }

}
