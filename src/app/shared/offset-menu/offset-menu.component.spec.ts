import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetMenuComponent } from './offset-menu.component';

describe('OffsetMenuComponent', () => {
  let component: OffsetMenuComponent;
  let fixture: ComponentFixture<OffsetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffsetMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffsetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
