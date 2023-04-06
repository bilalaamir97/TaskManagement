import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_departmentComponent } from "./create_department.component";

describe("create_departmentComponent", () => {
  let component: create_departmentComponent;
  let fixture: ComponentFixture<create_departmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_departmentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_departmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
