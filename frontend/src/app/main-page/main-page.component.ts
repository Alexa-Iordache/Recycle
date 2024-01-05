import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  menuItems: any = [
    { icon: 'people', text: 'Abonamentele mele', path: 'patients' },
    { icon: 'local_hospital', text: 'Cerere colectare', path: 'doctors' },
    { icon: 'stars', text: 'Lista tomberoane', path: 'patients' },

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
