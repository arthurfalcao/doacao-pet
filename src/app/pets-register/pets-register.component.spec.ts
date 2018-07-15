import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsRegisterComponent } from './pets-register.component';

describe('PetsRegisterComponent', () => {
  let component: PetsRegisterComponent;
  let fixture: ComponentFixture<PetsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
