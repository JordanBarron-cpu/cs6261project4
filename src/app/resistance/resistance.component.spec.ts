import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistanceComponent } from './resistance.component';
import { SigFigure } from '../model/sig-figure';
import { Multiplier } from '../model/multiplier';
import { Tolerance } from '../model/tolerance';

describe('ResistanceComponent', () => {
  let component: ResistanceComponent;
  let fixture: ComponentFixture<ResistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize RegistrationComponent ngOnIt correctly', () => {
    expect(component.theSigFigures).toEqual([new SigFigure(), new SigFigure(), new SigFigure]);
    expect(component.theTolerance).toEqual(new Tolerance());
    expect(component.theMultiplier).toEqual(new Multiplier());
    expect(component.message).toEqual("");
  });
});
