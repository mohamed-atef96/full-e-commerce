import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedProductdComponent } from './top-rated-productd.component';

describe('TopRatedProductdComponent', () => {
  let component: TopRatedProductdComponent;
  let fixture: ComponentFixture<TopRatedProductdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedProductdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedProductdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
