import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './main-page/main-page.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MedicalSpecialitiesComponent } from './medical-specialities/medical-specialities.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    MedicalSpecialitiesComponent,
    DoctorsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
