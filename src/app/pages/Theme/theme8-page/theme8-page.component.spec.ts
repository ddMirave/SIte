import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme8PageComponent } from './theme8-page.component';

describe('Theme8PageComponent', () => {
  let component: Theme8PageComponent;
  let fixture: ComponentFixture<Theme8PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Theme8PageComponent]
    });
    fixture = TestBed.createComponent(Theme8PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
