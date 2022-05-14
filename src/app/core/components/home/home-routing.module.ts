import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { HeaderComponent } from '../header/header.component';

import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
        
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [
    HomeComponent,
    FormContactComponent,
    HeaderComponent
  ];
 }
