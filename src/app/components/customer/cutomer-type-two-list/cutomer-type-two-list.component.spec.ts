import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerTypeTwoListComponent } from './cutomer-type-two-list.component';

describe('CutomerTypeTwoListComponent', () => {
  let component: CutomerTypeTwoListComponent;
  let fixture: ComponentFixture<CutomerTypeTwoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerTypeTwoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerTypeTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
