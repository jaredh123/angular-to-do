import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotestComponent } from './compotest.component';

describe('CompotestComponent', () => {
  let component: CompotestComponent;
  let fixture: ComponentFixture<CompotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
