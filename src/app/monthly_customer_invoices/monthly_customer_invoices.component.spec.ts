import { ComponentFixture, TestBed } from "@angular/core/testing";

import { monthly_customer_invoicesComponent } from "./monthly_customer_invoices.component";

describe("monthly_customer_invoicesComponent", () => {
  let component: monthly_customer_invoicesComponent;
  let fixture: ComponentFixture<monthly_customer_invoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [monthly_customer_invoicesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(monthly_customer_invoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
