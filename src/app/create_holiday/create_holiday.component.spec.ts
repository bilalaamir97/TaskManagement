import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_holidayComponent } from "./create_holiday.component";

describe("create_holidayComponent", () => {
  let component: create_holidayComponent;
  let fixture: ComponentFixture<create_holidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_holidayComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_holidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
