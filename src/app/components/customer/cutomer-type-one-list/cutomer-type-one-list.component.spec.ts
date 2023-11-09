import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerTypeOneListComponent } from './cutomer-type-one-list.component';

describe('CutomerTypeOneListComponent', () => {
  let component: CutomerTypeOneListComponent;
  let fixture: ComponentFixture<CutomerTypeOneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerTypeOneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerTypeOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
