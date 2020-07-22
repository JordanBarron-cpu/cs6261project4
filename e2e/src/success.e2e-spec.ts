import { browser, element, by } from 'protractor';
import { Helper } from './models/helper';

describe('successful scenario tests', () => {
  let helper = new Helper();

  it('load Home', () => {
    helper.loadHome();
    helper.getIdTextExpectation('resistanceMessage', 'Resistance:');
  });

  it('check if selectBoxes exist', () => {
    helper.loadHome();

    helper.doesSelectBoxExist('multipliers');
    helper.doesSelectBoxExist('tolerances');
    helper.doesSelectBoxExist('sigFigures0');
    helper.doesSelectBoxExist('sigFigure1');
    helper.doesSelectBoxExist('sigFigures2');
  });

  it('dropdowns clicked and update registration message successfully', () => {
    helper.loadHome();

    helper.classClick('tolerances', 1);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 0 +/- 2%');

    helper.classClick('multipliers', 8);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 0M +/- 2%');

    helper.classClick('sigFigures0', 2);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 20000M +/- 2%');

    helper.classClick('sigFigures1', 5);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 25000M +/- 2%');

    helper.classClick('sigFigures2', 6);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 25600M +/- 2%');
  });
});
