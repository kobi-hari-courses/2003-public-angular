import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanderButtonComponent } from './expander-button.component';

describe('ExpanderButtonComponent', () => {
  let component: ExpanderButtonComponent;
  let fixture: ComponentFixture<ExpanderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
