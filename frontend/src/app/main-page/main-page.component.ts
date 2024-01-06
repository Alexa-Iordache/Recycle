import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  menuItems: any = [
    { icon: 'people', text: 'Lista clienti', path: 'clients' },
    { icon: 'local_hospital', text: 'Cereri colectare', path: 'requests' },
    { icon: 'stars', text: 'Lista tomberoane', path: 'wastebin' },

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
