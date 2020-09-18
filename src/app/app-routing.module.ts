import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UnknownLocationComponent } from './modules/unknown-location/unknown-location.component';
const routes: Routes = [
  { path: '',
      children: [
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
          },
          {
            path: 'overview',
            loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
          },
          {
            path: 'enrollee',
            loadChildren: () => import('./modules/enrollee/enrollee.module').then(m => m.EnrolleeModule),
          },
          {
            path: 'interface',
            loadChildren: () => import('./modules/externalInterface/externalInterface.module').then(m => m.ExternalInterfaceModule),
          },
          {
            path: '**',
            component: UnknownLocationComponent,
          },
      ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot ( routes, { preloadingStrategy: PreloadAllModules } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
