import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbTDComponent } from './light-bulb-td.component';

describe('LightBulbTDComponent', () => {
  let component: LightBulbTDComponent;
  let fixture: ComponentFixture<LightBulbTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightBulbTDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightBulbTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
