import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_sub_modulesComponent } from "./create_sub_modules.component";

describe("create_sub_modulesComponent", () => {
  let component: create_sub_modulesComponent;
  let fixture: ComponentFixture<create_sub_modulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_sub_modulesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_sub_modulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
