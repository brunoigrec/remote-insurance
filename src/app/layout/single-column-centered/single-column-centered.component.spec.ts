import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnCenteredLayoutComponent } from './single-column-centered.component';

describe('SingleColumnCenteredLayoutComponent', () => {
  let component: SingleColumnCenteredLayoutComponent;
  let fixture: ComponentFixture<SingleColumnCenteredLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleColumnCenteredLayoutComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnCenteredLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
