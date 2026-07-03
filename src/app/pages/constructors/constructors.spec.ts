import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Constructors } from './constructors';

describe('Constructors', () => {
  let component: Constructors;
  let fixture: ComponentFixture<Constructors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Constructors],
    }).compileComponents();

    fixture = TestBed.createComponent(Constructors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
