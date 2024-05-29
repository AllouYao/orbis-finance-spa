import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetSubMenuComponent } from './offset-sub-menu.component';

describe('OffsetSubMenuComponent', () => {
  let component: OffsetSubMenuComponent;
  let fixture: ComponentFixture<OffsetSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffsetSubMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffsetSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
