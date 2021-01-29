import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobadsComponent } from './update-jobads.component';

describe('UpdateJobadsComponent', () => {
  let component: UpdateJobadsComponent;
  let fixture: ComponentFixture<UpdateJobadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
