import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_designationComponent } from "./create_designation.component";

describe("create_designationComponent", () => {
  let component: create_designationComponent;
  let fixture: ComponentFixture<create_designationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_designationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_designationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
