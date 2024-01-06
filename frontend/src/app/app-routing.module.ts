import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { RequestsComponent } from './requests/requests.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WasteBinComponent } from './wastebin/wastebin.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'main-page', component: MainPageComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'wastebin', component: WasteBinComponent},
  { path: 'requests', component: RequestsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
