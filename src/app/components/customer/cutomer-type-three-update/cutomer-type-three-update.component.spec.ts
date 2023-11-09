import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerTypeThreeUpdateComponent } from './cutomer-type-three-update.component';

describe('CutomerTypeThreeUpdateComponent', () => {
  let component: CutomerTypeThreeUpdateComponent;
  let fixture: ComponentFixture<CutomerTypeThreeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerTypeThreeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerTypeThreeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
