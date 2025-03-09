import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtisansComponent } from './list-artisans.component';

describe('ListArtisansComponent', () => {
  let component: ListArtisansComponent;
  let fixture: ComponentFixture<ListArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
