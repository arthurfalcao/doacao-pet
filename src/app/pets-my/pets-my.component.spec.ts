import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsMyComponent } from './pets-my.component';

describe('PetsMyComponent', () => {
  let component: PetsMyComponent;
  let fixture: ComponentFixture<PetsMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
