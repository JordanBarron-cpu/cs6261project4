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

  it('should set and get message that displays on html', () => {
    // component.theSigFigures[0].setSigFigure('red');
    // component.theSigFigures[1].setSigFigure('green');
    // component.theSigFigures[2].setSigFigure('blue');
    // component.theMultiplier.setMultiplier('grey');
    // component.theMultiplier.setMultiplierUnit('grey');
    // component.theTolerance.setTolerance('violet');
    component.setSigFigureResistanceBuildMessage(0, 'red');
    expect(component.message).toEqual("200 +/- 0%");
    component.setSigFigureResistanceBuildMessage(1, 'green');
    expect(component.message).toEqual("250 +/- 0%");
    component.setSigFigureResistanceBuildMessage(2, 'blue');
    expect(component.message).toEqual("256 +/- 0%");
    component.setMultiplierAndUnitResistanceBuildMessage('grey');
    expect(component.message).toEqual("25600M +/- 0%");
    component.setToleranceResistanceBuildMessage('violet');
    expect(component.message).toEqual("25600M +/- 0.1%");
  });
});
