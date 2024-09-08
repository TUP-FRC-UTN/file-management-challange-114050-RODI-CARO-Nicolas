import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBadgesComponent } from './owner-badges.component';

describe('OwnerBadgesComponent', () => {
  let component: OwnerBadgesComponent;
  let fixture: ComponentFixture<OwnerBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
