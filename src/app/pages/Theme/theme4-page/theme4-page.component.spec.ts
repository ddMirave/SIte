import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme4PageComponent } from './theme4-page.component';

describe('Theme4PageComponent', () => {
  let component: Theme4PageComponent;
  let fixture: ComponentFixture<Theme4PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Theme4PageComponent]
    });
    fixture = TestBed.createComponent(Theme4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
