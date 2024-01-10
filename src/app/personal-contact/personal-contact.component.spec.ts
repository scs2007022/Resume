import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContactComponent } from './personal-contact.component';

describe('PersonalContactComponent', () => {
  let component: PersonalContactComponent;
  let fixture: ComponentFixture<PersonalContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalContactComponent]
    });
    fixture = TestBed.createComponent(PersonalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
