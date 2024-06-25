import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme3PageComponent } from './theme3-page.component';

describe('Theme3PageComponent', () => {
  let component: Theme3PageComponent;
  let fixture: ComponentFixture<Theme3PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Theme3PageComponent]
    });
    fixture = TestBed.createComponent(Theme3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
