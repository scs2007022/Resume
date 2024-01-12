import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistoryComponent } from './education-history.component';

describe('EducationHistoryComponent', () => {
  let component: EducationHistoryComponent;
  let fixture: ComponentFixture<EducationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationHistoryComponent]
    });
    fixture = TestBed.createComponent(EducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
