import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetCardComponent } from './offset-card.component';

describe('OffsetCardComponent', () => {
  let component: OffsetCardComponent;
  let fixture: ComponentFixture<OffsetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffsetCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffsetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
