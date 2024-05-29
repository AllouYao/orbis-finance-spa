import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetItemComponent } from './offset-item.component';

describe('OffsetItemComponent', () => {
  let component: OffsetItemComponent;
  let fixture: ComponentFixture<OffsetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffsetItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffsetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
