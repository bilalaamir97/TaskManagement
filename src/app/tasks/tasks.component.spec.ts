import { ComponentFixture, TestBed } from "@angular/core/testing";

import { tasksComponent } from "./tasks.component";

describe("tasksComponent", () => {
  let component: tasksComponent;
  let fixture: ComponentFixture<tasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [tasksComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
