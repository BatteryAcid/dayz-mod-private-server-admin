
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DzDashboardComponent } from './dz-dashboard.component';

describe('DzDashboardComponent', () => {
  let component: DzDashboardComponent;
  let fixture: ComponentFixture<DzDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DzDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DzDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
