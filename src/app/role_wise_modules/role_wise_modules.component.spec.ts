import { ComponentFixture, TestBed } from "@angular/core/testing";

import { role_wise_modulesComponent } from "./role_wise_modules.component";

describe("role_wise_modulesComponent", () => {
  let component: role_wise_modulesComponent;
  let fixture: ComponentFixture<role_wise_modulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [role_wise_modulesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(role_wise_modulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
