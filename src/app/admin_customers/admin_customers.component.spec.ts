import { ComponentFixture, TestBed } from "@angular/core/testing";

import { admin_customersComponent } from "./admin_customers.component";

describe("admin_customersComponent", () => {
  let component: admin_customersComponent;
  let fixture: ComponentFixture<admin_customersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [admin_customersComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(admin_customersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
