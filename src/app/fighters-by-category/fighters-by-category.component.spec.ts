import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightersByCategoryComponent } from './fighters-by-category.component';

describe('FightersByCategoryComponent', () => {
  let component: FightersByCategoryComponent;
  let fixture: ComponentFixture<FightersByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightersByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
