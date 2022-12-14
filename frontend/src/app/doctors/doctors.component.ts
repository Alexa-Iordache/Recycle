import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  dataSource: any;
  doctorInfo: any;
  locationInfo: any;
  specialityInfo: any;

  constructor(
    private rpcService: RpcService
  ) { }

  myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  options: string[] = ['Bucuresti', 'Timisoara', 'Pitesti'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit(): void {
    console.log('s a initializat componenta');
    let queryDoctors = `SELECT * FROM Doctors;`;
    let queryLocations = `SELECT * FROM Locations;`;
    let queryspecialities = `SELECT * FROM Medical_Specialities`;

    let copyInstance = this;


    this.rpcService.callRPC('doctors.getDoctor', queryDoctors, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa doctorii');
        return;
      }
      copyInstance.doctorInfo = res.result;
      this.doctorInfo = copyInstance.doctorInfo;
      console.log(this.doctorInfo);
    });

    this.rpcService.callRPC('locations.getLocation', queryLocations, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa locatiile');
        return;
      }
      copyInstance.locationInfo = res.result;
      this.locationInfo = copyInstance.locationInfo;
      // this.insertLocations();
      // this.options = copyInstance.locationInfo.County;
      // console.log(this.options);
      console.log(this.locationInfo);
    });

    this.rpcService.callRPC('specialities.getSpeciality', queryspecialities, (err: any, res: any) => {

      if (err || res.error) {
        console.log('nu s au putut afisa specialitatile medicale');
        return;
      }
      copyInstance.specialityInfo = res.result;
      this.specialityInfo = copyInstance.locationInfo;
      console.log(this.specialityInfo);
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  // insertLocations(): void {
  //   for (let i = 0; i <= this.options.length; i++) {
  //     this.options[i] = this.locationInfo.County;
  //   }
  //   console.log(this.options);
  // }
}
