import { ComponentFixture, TestBed } from "@angular/core/testing";

import { user_module_detailsComponent } from "./user_module_details.component";

describe("team_reportComponent", () => {
  let component: user_module_detailsComponent;
  let fixture: ComponentFixture<user_module_detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [user_module_detailsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(user_module_detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
