import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHeadingComponent } from './board-heading';

describe('BoardHeading', () => {
  let component: BoardHeadingComponent;
  let fixture: ComponentFixture<BoardHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardHeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
