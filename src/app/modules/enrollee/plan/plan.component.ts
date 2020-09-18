import { Component, OnInit, OnChanges } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  closeResult: any;
  planTitle: any;
  subTitle: any;
  cola = false;
  tobacco = false;
  premium1 = '$110.00';
  premium2 = '$220.00';
  grandTotal = '39%';
  income = [
    { text: 'Your Annual Income:* $1,316,422' },
    { text: 'Your Monthly Income: $109,702' }
  ];
  constructor( private modalService: NgbModal ) {
    this.planTitle = 'Review Your Personalized Options';
    this.subTitle = 'Below is your new Income Protection Plan';
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
  onChange(value: boolean) {
   console.log (this.tobacco);
   console.log (this.cola);
   if ( !this.tobacco &&  !this.cola ) {
       this.premium1 = '$110.00';
       this.premium2 = '$220.00';
   } else if ( this.tobacco &&  !this.cola ) {
       this.premium1 = '$119.00';
       this.premium2 = '$238.00';
   } else if ( this.tobacco &&  this.cola ) {
       this.premium1 = '$142.00';
       this.premium2 = '$283.00';
   } else if ( !this.tobacco &&  this.cola ) {
       this.premium1 = '$123.00';
       this.premium2 = '$146.00';
   }

  }

 totalCalc($event) {
    if ( $event.currentTarget.value === 'plan6-3' ) {
       this.grandTotal = '54%';
    } else {
      this.grandTotal = '39%';
    }
 }

}
