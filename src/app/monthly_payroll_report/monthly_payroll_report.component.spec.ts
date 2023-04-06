import { ComponentFixture, TestBed } from "@angular/core/testing";

import { monthly_payroll_reportComponent } from "./monthly_payroll_report.component";

describe("monthly_payroll_reportComponent", () => {
  let component: monthly_payroll_reportComponent;
  let fixture: ComponentFixture<monthly_payroll_reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [monthly_payroll_reportComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(monthly_payroll_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
