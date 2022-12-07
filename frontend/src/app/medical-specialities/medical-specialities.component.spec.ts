import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSpecialitiesComponent } from './medical-specialities.component';

describe('MedicalSpecialitiesComponent', () => {
  let component: MedicalSpecialitiesComponent;
  let fixture: ComponentFixture<MedicalSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalSpecialitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
