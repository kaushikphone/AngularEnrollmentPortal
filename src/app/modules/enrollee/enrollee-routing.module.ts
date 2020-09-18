import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { QaComponent } from './qa/qa.component';
import { CensusComponent } from './census/census.component';
import { FinalizeComponent } from './finalize/finalize.component';
const routes: Routes = [
  { path: 'plan', component: PlanComponent },
  { path: 'census', component: CensusComponent },
  { path: 'questionAnswer', component: QaComponent },
  { path: 'finalize', component: FinalizeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleeRoutingModule { }
