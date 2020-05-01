import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnuIdsComponent } from './onu-ids.component';

describe('OnuIdsComponent', () => {
  let component: OnuIdsComponent;
  let fixture: ComponentFixture<OnuIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnuIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnuIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
