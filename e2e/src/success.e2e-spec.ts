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

    helper.idClick('tolerances', 1);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 0 +/- 2%');

    helper.idClick('multipliers', 8);
    helper.getIdTextExpectation('resistanceMessage', 'Resistance: 0M +/- 2%');
  });
});
