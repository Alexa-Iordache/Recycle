import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  menuItems: any = [
    { icon: 'people', text: 'Lista pacienti', path: 'patients' },
    { icon: 'local_hospital', text: 'Medici', path: 'doctors' },
    { icon: 'stars', text: 'Specializari', path: 'specialities' },
    { icon: 'event_note', text: 'Programari', path: 'appointments'},
    { icon: 'folder_shared', text: 'Statistici', path: 'statistics'},
    { icon: 'location_on', text: 'Locatii', path: ''},

  ]

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
