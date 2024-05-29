import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreniumComponent } from './prenium.component';

describe('PreniumComponent', () => {
  let component: PreniumComponent;
  let fixture: ComponentFixture<PreniumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreniumComponent]
    });
    fixture = TestBed.createComponent(PreniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
