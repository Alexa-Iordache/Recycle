import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  specialityList: any;
  locationsList: any;
  doctorsList: any;
  appointmentsList: any;
  mostRecentDoctors: any;
  mostExpensiveAppointments: any;
  mostPatients: any;
  appointmentsCompared: any;
  locationList: any;
  isSpecialitySelected = false;
  isLocationSelected = false;
  displayedColumns = ['lastName', 'firstName'];
  displayedColumns2 = ['streetName', 'streetNumber', 'appointmetsNumber'];
  displayedColumns3 = ['lastName', 'firstName', 'speciality', 'hiringDate'];
  displayedColumns4 = ['code', 'price', 'name', 'speciality'];
  displayedColumns5 = ['year', 'number'];
  displayedColumns6 = ['code', 'price', 'location'];

  constructor(
    private rpcService: RpcService
  ) { }

  ngOnInit(): void {
    let params = {
      "username": 'admin'
    }

    // obtinem toate specializarile
    this.rpcService.callRPC('specialities.getSpeciality', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa specializarile');
        return;
      }
      this.specialityList = res.result;
      console.log(this.specialityList);
    });


    this.rpcService.callRPC('statistics.getNumberOfAppointmets', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa specializarile');
        return;
      }
      this.appointmentsList = res.result;
      console.log(this.appointmentsList);
    });

    this.rpcService.callRPC('statistics.getMostRecentDoctors', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa doctorii cel mai recent angajati');
        return;
      }
      this.mostRecentDoctors = res.result;
      console.log(this.mostRecentDoctors);
    });

    this.rpcService.callRPC('statistics.getMostExpensiveAppointments', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa cele mai scumpe programari');
        return;
      }
      this.mostExpensiveAppointments = res.result;
      console.log(this.mostExpensiveAppointments);
    });

    this.rpcService.callRPC('statistics.getMostPatients', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa numarul pacientilor nascuti in acest an');
        return;
      }
      this.mostPatients = res.result;
      console.log(this.mostPatients);
    });

    this.rpcService.callRPC('locations.getLocation', params, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa locatiile');
        return;
      }
      this.locationsList = res.result;
      console.log(this.locationsList);
    });
  }

  displayDoctors(value: any): void {
    console.log(value);
    this.isSpecialitySelected = true;

    let params = {
      "name": value
    }

    this.rpcService.callRPC('statistics.createDoctorsList', params, (err: any, res: any) => {
      if (err || res.error) {
        console.log('nu s au putut afisa doctorii care lucreaza la aceasta specializare medicala');
        return;
      }
      this.doctorsList = res.result;
      console.log(this.doctorsList);
    });
  }

  displayLocations(item: any): void {
    console.log(item.LocationID);
    this.isLocationSelected = true;

    let params = {
      "id": item.LocationID
    }

    this.rpcService.callRPC('statistics.createAppointmentsList', params, (err: any, res: any) => {
      if (err || res.error) {

        console.log('nu s au putut afisa programarile din aceasta locatie');
        return;
      }
      this.appointmentsCompared = res.result;
      console.log(this.appointmentsCompared);
    });
  }
}
