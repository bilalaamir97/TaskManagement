import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_modulesComponent } from "./create_modules.component";

describe("create_modulesComponent", () => {
  let component: create_modulesComponent;
  let fixture: ComponentFixture<create_modulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_modulesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_modulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
