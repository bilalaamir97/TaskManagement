import { ComponentFixture, TestBed } from "@angular/core/testing";

import { create_usersComponent } from "./create_users.component";

describe("create_usersComponent", () => {
  let component: create_usersComponent;
  let fixture: ComponentFixture<create_usersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [create_usersComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(create_usersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
