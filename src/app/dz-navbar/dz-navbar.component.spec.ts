
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DzNavbarComponent } from './dz-navbar.component';

describe('DzNavbarComponent', () => {
  let component: DzNavbarComponent;
  let fixture: ComponentFixture<DzNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DzNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DzNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
