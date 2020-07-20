import { browser, element, by } from 'protractor';
import { Helper } from './models/helper';

describe('successful scenario tests', () => {
  let helper = new Helper();

  it('load Home', () => {
    helper.loadHome();
    helper.getIdTextExpectation('resistanceMessage', 'Resistance:');
  });

  it('initial value and text of selectBoxes', () => {
    helper.loadHome();

    // helper.getIdValueExpectation('sigFig1', '0');
    // helper.getIdValueExpectation('sigFig2', '0');
    // helper.getIdValueExpectation('sigFig3', '0');
    helper.getIdValueExpectation('multiplier0', '1');
    helper.getIdValueExpectation('tolerance0', '1');

    helper.getIdTextExpectation('sigFig0', 'black');
    // helper.getIdTextExpectation('sigFig2', 'black');
    // helper.getIdTextExpectation('sigFig3', 'black');
    helper.getIdTextExpectation('multiplier0', 'x1');
    helper.getIdTextExpectation('tolerance0', '1%');
  });
});
