import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupHelpComponent } from './setup-help/setup-help.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'Setup2', component:SetupHelpComponent },
  {path: 'Contact', component:ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
