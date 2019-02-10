import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsComponent } from './atoms.component';

describe('AtomsComponent', () => {
  let component: AtomsComponent;
  let fixture: ComponentFixture<AtomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
