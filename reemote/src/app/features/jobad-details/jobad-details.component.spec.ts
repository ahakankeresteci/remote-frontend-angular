import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobadDetailsComponent } from './jobad-details.component';

describe('JobadDetailsComponent', () => {
  let component: JobadDetailsComponent;
  let fixture: ComponentFixture<JobadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
