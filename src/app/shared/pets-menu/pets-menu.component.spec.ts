import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsMenuComponent } from './pets-menu.component';

describe('PetsMenuComponent', () => {
  let component: PetsMenuComponent;
  let fixture: ComponentFixture<PetsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
