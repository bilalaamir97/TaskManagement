import { ComponentFixture, TestBed } from "@angular/core/testing";

import { user_projectsComponent } from "./user_projects.component";

describe("user_projectsComponent", () => {
  let component: user_projectsComponent;
  let fixture: ComponentFixture<user_projectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [user_projectsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(user_projectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
