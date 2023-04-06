import { ComponentFixture, TestBed } from "@angular/core/testing";

import { employee_office_timingsComponent } from "./employee_office_timings.component";

describe("employee_office_timingsComponent", () => {
  let component: employee_office_timingsComponent;
  let fixture: ComponentFixture<employee_office_timingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [employee_office_timingsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employee_office_timingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
