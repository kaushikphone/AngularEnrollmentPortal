import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  @Input() step: string;
  constructor(public router: Router) {
  }
  getClassOne() {
    if ( this.router.url !== '/overview' ) {
        return 'visited';
    }
 }
  getClassTwo() {
    if ( this.router.url === '/overview' ) {
        return 'disable';
    }
    if ( this.router.url !== '/enrollee/plan' ) {
        return 'visited';
    }
  }
  getClassThree() {
    if ( this.router.url === '/overview' || this.router.url === '/enrollee/plan' ) {
        return 'disable';
    }
    if ( this.router.url !== '/enrollee/census' ) {
        return 'visited';
    }
  }
  getClassFour() {
    if ( this.router.url === '/overview' || this.router.url === '/enrollee/plan' || this.router.url === '/enrollee/census' ) {
        return 'disable';
    }
    if ( this.router.url !== '/enrollee/questionAnswer' ) {
        return 'visited';
    }
  }
  getClassFive() {
    if ( this.router.url === '/overview' || this.router.url === '/enrollee/plan' ||
    this.router.url === '/enrollee/census' || this.router.url === '/enrollee/questionAnswer' ) {
        return 'disable';
    }
    if ( this.router.url !== '/interface/payment' ) {
        return 'visited';
    }
  }
  ngOnInit(): void {
  }

}
