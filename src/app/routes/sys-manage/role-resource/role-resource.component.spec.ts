import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleResourceComponent } from './role-resource.component';

describe('RoleResourceComponent', () => {
  let component: RoleResourceComponent;
  let fixture: ComponentFixture<RoleResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
