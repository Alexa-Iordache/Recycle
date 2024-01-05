import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FilesComponent } from './files/files.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PatientsComponent } from './patients/wastebin.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'main-page', component: MainPageComponent },
  { path: 'doctors', component: DoctorsComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'patients', component: PatientsComponent},
  { path: 'specialities', component: SpecialitiesComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'files', component: FilesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
