import { Injectable } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map, retry, catchError, finalize, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment.prod";
import { ErrorHandlerService } from './error-handler.service';



@Injectable({
    providedIn:'root',
})


export class ApiService { 
    httpHeaders = new HttpHeaders();
    restHeaders = new HttpHeaders();
    constructor( private http: HttpClient, private errorHandlerService: ErrorHandlerService	){
      this.httpHeaders= this.httpHeaders.set('SOAPAction', environment.proxy_url+environment.invoke_url+"invokeService").set('Content-type', 'text/xml');
      this.restHeaders = this.restHeaders.set('authorization', environment.token).set('content-type', 'application/json').set('accept', 'application/json');
    }
    httpGetrequest(url:string, queryParam?:any):Observable<any>{
        return this.http.get(url, {headers:this.httpHeaders, params:queryParam}).pipe( retry(1), tap((xmlString: string)=>{
				  const asJson = this.xmlStringToJson(xmlString);
			    return asJson;
        }),
        catchError(this.errorHandlerService.handleError)
   )}
   httpPostrequest(url:string, requestbody?:any, queryParam?:any):Observable<any>{
         let httpparams = new HttpParams();		
         return this.http.post(url, requestbody,{headers:this.httpHeaders,responseType: 'text' as 'json'}).pipe( retry(1), tap((xmlString: string)=>{
				    const asJson = this.xmlStringToJson(xmlString);
			      return asJson;
         }),
			   catchError(this.errorHandlerService.handleError)
   )}
   
   handleError(error: HttpErrorResponse){
      return throwError(error);
   }

   httpRestPostRequest(url:string, requestbody?:any, queryParam?:any):Observable<any>{
         console.log(url)
         return this.http.post(url, requestbody,{headers:this.restHeaders})
			   catchError(this.errorHandlerService.handleError)
  }
	xmlStringToJson(xml: string){
    const oParser = new DOMParser();
    const oDOM = oParser.parseFromString(xml, "application/xml");
    return this.xmlToJson(oDOM);
  }
  
  
  xmlToJson(xml)
  {
    var obj = {};
    if (xml.nodeType == 1) { 
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
  
}
