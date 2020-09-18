import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../modules/communication/restApi-service/apiservice';
import { UrlRead } from '../../../modules/communication/restApi-service/urlRead';
import { QueryParam } from '../../../modules/communication/restApi-service/queryParam';
import * as converter from 'xml-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild ( 'adminLoginForm', {static: false}) adminLoginForm: NgForm;
  adminLogin: any = {};
  responseXML:any;
  closeResult: string;
  loggedOff: boolean;
  inputText = 'text';
  submitted: boolean;
   agree: boolean;
   showMe: boolean;
   showMsg: boolean;
   showCfrm: boolean;
   title = 'Plan Sponsor';
   step: string;
   confirmMsg: string;
   decline: boolean;
   closedWin: boolean;
   dataKpiList: any;
  constructor( public router: Router, private modalService: NgbModal, private _httpCall:ApiService,
   private _soapUrlRead:UrlRead, private dataParam:QueryParam) {
   
  }

  ngOnInit(): void {
  }
   xmlToJson(xml)
  {
    var obj = {};
    if (xml.nodeType == 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) { // text
      obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
      for(var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
  
  FetchLogindata(){
	//alert("Hello");
	this.dataKpiList=`<?xml version='1.0' encoding='utf-8'?>
    <soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
      <soap:Body><invokeService xmlns='http://gateway.core.cmn.sl.arc.macaw.nest.com'>
        <strUiData>
          <![CDATA[
          <map>
	<entry>
		<string>logInCentreContentDiv:::</string>
		<map>
			<entry>
				<string>logInUserIdTxt</string>
				<string>nestuser3</string>
			</entry>
			<entry>
				<string>captchaTxt</string>
				<string></string>
			</entry>
			<entry>
				<string>logInPasswordTxt</string>
				<string>era@1234</string>
			</entry>
			<entry>
				<string>systemCode</string>
				<string></string>
			</entry>
		</map>
	</entry>
	<entry>
		<string>auth</string>
		<map>
			<entry>
				<string>tenantCode</string>
				<string>1</string>
			</entry>
			<entry>
				<string>currentTimestamp</string>
				<string>1598951586701</string>
			</entry>
			<entry>
				<string>caller</string>
				<string>EnvPortal</string>
			</entry>
			<entry>
				<string>trnCode</string>
				<string>UserLogin</string>
			</entry>
			<entry>
				<string>UserIP</string>
				<string></string>
			</entry>
			<entry>
				<string>UserCountry</string>
				<string></string>
			</entry>
			<entry>
				<string>UserState</string>
				<string></string>
			</entry>
			<entry>
				<string>UserCity</string>
				<string></string>
			</entry>
			<entry>
				<string>BrowserName</string>
				<string></string>
			</entry>
			<entry>
				<string>BrowserVersion</string>
				<string></string>
			</entry>
			<entry>
				<string>channelType</string>
				<string></string>
			</entry>
			<entry>
				<string>userLongitude</string>
				<string></string>
			</entry>
			<entry>
				<string>userLatitude</string>
				<string></string>
			</entry>
		</map>
	</entry>
	<entry>
		<string>transactionStatus</string>
		<map>
			<entry>
				<string>errorCode</string>
				<string></string>
			</entry>
			<entry>
				<string>errorMessage</string>
				<string></string>
			</entry>
			<entry>
				<string>maxRowCount</string>
				<string></string>
			</entry>
			<entry>
				<string>minRowCount</string>
				<string></string>
			</entry>
			<entry>
				<string>totalRowCount</string>
				<string></string>
			</entry>
			<entry>
				<string>pageNumber</string>
				<string></string>
			</entry>
			<entry>
				<string>totalPageCount</string>
				<string></string>
			</entry>
			<entry>
				<string>errorType</string>
				<string></string>
			</entry>
			<entry>
				<string>trnLastUpdateTimestamp</string>
				<string></string>
			</entry>
		</map>
	</entry>
</map>
]]></strUiData></invokeService></soap:Body></soap:Envelope>`
	try{
		this._httpCall.httpPostrequest(this._soapUrlRead.optionsBar._GetLoginDetailsUrl,this.dataKpiList).subscribe(
      data=>{
		  console.log("dataK",data)		
		  var initialResponseStr = data.split("<ns:return>")[0] + "<ns:return>";
		  var dataResponseStr = data.split("<ns:return>")[1].split("</ns:return>")[0];
		  var finalResponseStr =  "</ns:return>" + data.split("</ns:return>")[1];
		  console.log("dataResponseStr",dataResponseStr);
		  this.responseXML = dataResponseStr;
		  this.responseXML = this.responseXML.replace(/&lt;/g, "<");
		  this.responseXML = this.responseXML.replace(/&gt;/g, ">");
		  console.log("TesponseText",this.responseXML);       
		  let result1 = converter.xml2json(this.responseXML, {compact: true, spaces: 2});
		  const JSONData = JSON.parse(result1);
		  console.log("resultD",JSONData);
      alert('Sucess Response'+ JSONData.map.entry[2].map.entry[3].string[1]._text);
      this.dataParam.setPram(JSONData.map.entry[3].map.entry[0].string[1]._text);
      alert('User Name' + JSONData.map.entry[3].map.entry[0].string[1]._text);
       this.router.navigate(['/overview']);
	  },error => {}
    )
	}
	catch(exception){
		
	}	
  }
  /*public onSubmit( adminLoginForm ): void {
    this.submitted = true ;
    if ( !this.adminLoginForm.valid ) {
      return;
    } else {
      this.showMe = true;
      this.router.navigate(['/overview']);

    }
  }*/
  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  change() {
    console.log( this.showMsg );
    this.showMsg = true ;
  }


}
