import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MedicalSpecialitiesComponent } from './medical-specialities/medical-specialities.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'main-page', component: MainPageComponent },
  { path: 'medical-specialities', component: MedicalSpecialitiesComponent},
  { path: 'doctors', component: DoctorsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
