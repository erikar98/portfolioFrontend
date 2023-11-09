import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerTypeThreeCreateComponent } from './cutomer-type-three-create.component';

describe('CutomerTypeThreeCreateComponent', () => {
  let component: CutomerTypeThreeCreateComponent;
  let fixture: ComponentFixture<CutomerTypeThreeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerTypeThreeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerTypeThreeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
