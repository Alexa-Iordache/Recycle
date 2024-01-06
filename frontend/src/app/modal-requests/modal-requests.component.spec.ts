import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRequestsComponent } from './modal-requests.component';

describe('ModalRequestsComponent', () => {
  let component: ModalRequestsComponent;
  let fixture: ComponentFixture<ModalRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
