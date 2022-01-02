import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAsideComponent } from './categories-aside.component';

describe('CategoriesAsideComponent', () => {
  let component: CategoriesAsideComponent;
  let fixture: ComponentFixture<CategoriesAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
