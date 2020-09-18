import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../communication/restApi-service/apiservice';
import { UrlRead } from '../../communication/restApi-service/urlRead';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
   bankList:string;
   bankDetails:boolean;
   dataBankDetails:any = {
		 "routing": "267084131",
		 "account": "111111111",
		 "type": "BUSINESS"
	};
  verifyDeposit:any = {
	  "amount_1": 0.07,
	  "amount_2": 0.15,
	};
  constructor(private _httpCall:ApiService, private restUrlACH:UrlRead) { }

  ngOnInit(): void {
  }
  showDetails(){
    this.bankDetails = true;
  }
  hideBankDetails(){
    this.bankDetails = false;
  }
  addAccount(){    
     this._httpCall.httpRestPostRequest(this.restUrlACH.optionsBar.achAddBankAccountUrl,this.dataBankDetails).subscribe(
        res => {         
          this.bankList = res.id;          
          this._httpCall.httpRestPostRequest(this.restUrlACH.optionsBar.achReleaseMicroUrl,{account:this.bankList}).subscribe(
              res => {
                 this._httpCall.httpRestPostRequest(this.restUrlACH.optionsBar.achVerifyMicroUrl,this.verifyDeposit).subscribe(      
                    res => {},
                    err => {  }
                  )
              },
              err => {  }
            );
        },
        err => {  }
      );     
      
  }
  
}
