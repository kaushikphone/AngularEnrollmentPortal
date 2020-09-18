import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownLocationComponent } from './unknown-location.component';

describe('UnknownLocationComponent', () => {
  let component: UnknownLocationComponent;
  let fixture: ComponentFixture<UnknownLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
