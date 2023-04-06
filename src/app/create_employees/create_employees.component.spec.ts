import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_employeesComponent } from "./create_employees.component";

describe("create_employeesComponent", () => {
  let component: create_employeesComponent;
  let fixture: ComponentFixture<create_employeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_employeesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_employeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
