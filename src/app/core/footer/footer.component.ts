import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbDateStruct, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    firstName: string;
    lastName: string;
   copyrightTxt: string; closeResult: string;
   showMsg: boolean;
  constructor(private modalService: NgbModal) {
    this.copyrightTxt = 'Copyright 2016-2020. Exceptional Enrollment brought to you by Exceptional Risk Advisors, LLC, Mahwah, New Jersey.';
  }

  ngOnInit(): void {
  }
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
    console.log(this.showMsg);
    this.showMsg = true;
  }
}
