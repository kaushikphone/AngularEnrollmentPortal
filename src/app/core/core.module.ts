import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecurityModule } from './security/security.module';
import { FeatureModule } from './feature/feature.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BannerComponent, NavigationComponent, GlobalLoaderComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    SecurityModule,
    FeatureModule,
    CoreRoutingModule,
  ],
    exports: [HeaderComponent, FooterComponent, BannerComponent, NavigationComponent]
})
export class CoreModule { }
