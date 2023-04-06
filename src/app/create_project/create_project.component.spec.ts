import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_projectComponent } from "./create_project.component";

describe("create_projectComponent", () => {
  let component: create_projectComponent;
  let fixture: ComponentFixture<create_projectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_projectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_projectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
