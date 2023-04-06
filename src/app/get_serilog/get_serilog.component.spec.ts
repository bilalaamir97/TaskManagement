import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GetSerilogComponent } from "./get_serilog.component";

describe("GetSerilogComponent", () => {
  let component: GetSerilogComponent;
  let fixture: ComponentFixture<GetSerilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetSerilogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSerilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
