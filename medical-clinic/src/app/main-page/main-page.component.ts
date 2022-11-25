import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  menuItems: any = [
    { icon: 'people', text: 'Lista pacienti'},
    { icon: 'local_hospital', text: 'Medici'},
    { icon: 'stars', text: 'Specializari'},
    { icon: 'event_note', text: 'Programari'},
    { icon: 'folder_shared', text: 'Dosar medical'},
    { icon: 'location_on', text: 'Locatii'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
