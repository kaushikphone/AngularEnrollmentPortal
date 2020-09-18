import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module';
import { EnrolleeRoutingModule } from './enrollee-routing.module';
import { PlanComponent } from './plan/plan.component';
import { QaComponent } from './qa/qa.component';
import { CensusComponent } from './census/census.component';
import { FinalizeComponent } from './finalize/finalize.component';



@NgModule({
  declarations: [PlanComponent, QaComponent, CensusComponent, FinalizeComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    CoreModule,
    EnrolleeRoutingModule
  ]
})
export class EnrolleeModule { }
