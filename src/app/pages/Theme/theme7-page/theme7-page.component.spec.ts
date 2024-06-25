import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme7PageComponent } from './theme7-page.component';

describe('Theme7PageComponent', () => {
  let component: Theme7PageComponent;
  let fixture: ComponentFixture<Theme7PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Theme7PageComponent]
    });
    fixture = TestBed.createComponent(Theme7PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
