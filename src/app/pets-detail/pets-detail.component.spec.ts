import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsDetailComponent } from './pets-detail.component';

describe('PetsDetailComponent', () => {
  let component: PetsDetailComponent;
  let fixture: ComponentFixture<PetsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
