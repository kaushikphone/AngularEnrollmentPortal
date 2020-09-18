import { Component, OnInit } from '@angular/core';
import { QueryParam } from '../../modules/communication/restApi-service/queryParam';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string;
  constructor(private dataParam:QueryParam) {
    this.userName = this.dataParam.getParam();
    console.log(this.userName)
  }

  ngOnInit(): void {
  }

}
