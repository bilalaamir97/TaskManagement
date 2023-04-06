import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_leave_typesComponent } from "./create_leave_types.component";

describe("create_leave_typesComponent", () => {
  let component: create_leave_typesComponent;
  let fixture: ComponentFixture<create_leave_typesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_leave_typesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_leave_typesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
