import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_regionComponent } from "./create_region.component";

describe("create_regionComponent", () => {
  let component: create_regionComponent;
  let fixture: ComponentFixture<create_regionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_regionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_regionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
