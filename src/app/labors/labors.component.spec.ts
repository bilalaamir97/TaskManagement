import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LaborsComponent } from "./labors.component";

describe("LaborsComponent", () => {
  let component: LaborsComponent;
  let fixture: ComponentFixture<LaborsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
