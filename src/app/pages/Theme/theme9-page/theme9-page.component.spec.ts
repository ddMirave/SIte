import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme9PageComponent } from './theme9-page.component';

describe('Theme9PageComponent', () => {
  let component: Theme9PageComponent;
  let fixture: ComponentFixture<Theme9PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Theme9PageComponent]
    });
    fixture = TestBed.createComponent(Theme9PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
