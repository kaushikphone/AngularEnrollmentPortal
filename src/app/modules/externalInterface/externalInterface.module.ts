import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { ExternalInterfaceRoutingModule } from './externalInterface-routing.module';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    FormsModule,
    CommonModule,
    CoreModule,
    ExternalInterfaceRoutingModule
  ]
})
export class ExternalInterfaceModule { }
