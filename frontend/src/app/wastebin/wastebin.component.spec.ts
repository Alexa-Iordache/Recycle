import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteBinComponent } from './wastebin.component';

describe('WasteBinComponent', () => {
  let component: WasteBinComponent;
  let fixture: ComponentFixture<WasteBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteBinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
