import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme5PageComponent } from './theme5-page.component';

describe('Theme5PageComponent', () => {
  let component: Theme5PageComponent;
  let fixture: ComponentFixture<Theme5PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Theme5PageComponent]
    });
    fixture = TestBed.createComponent(Theme5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
