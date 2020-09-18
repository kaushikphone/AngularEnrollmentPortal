import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  welcomeTxt: string;
  constructor() {
    this.welcomeTxt = 'Welcome To The Insurance Selector Application';
  }
  ngOnInit(): void {
  }

}
