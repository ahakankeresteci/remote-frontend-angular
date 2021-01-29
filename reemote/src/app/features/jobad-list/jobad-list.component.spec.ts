import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobadListComponent } from './jobad-list.component';

describe('JobadListComponent', () => {
  let component: JobadListComponent;
  let fixture: ComponentFixture<JobadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
