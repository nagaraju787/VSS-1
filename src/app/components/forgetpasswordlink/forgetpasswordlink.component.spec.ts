import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordlinkComponent } from './forgetpasswordlink.component';

describe('ForgetpasswordlinkComponent', () => {
  let component: ForgetpasswordlinkComponent;
  let fixture: ComponentFixture<ForgetpasswordlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpasswordlinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpasswordlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
