import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { OverviewComponent } from './overview/overview.component';




@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
