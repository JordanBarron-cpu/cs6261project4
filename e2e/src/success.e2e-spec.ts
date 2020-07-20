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

    helper.getIdValueExpectation('sigFigBox0Color0', '0');
    helper.getIdValueExpectation('sigFigBox1Color0', '0');
    helper.getIdValueExpectation('sigFigBox2Color0', '0');
    helper.getIdValueExpectation('multiplier0', '1');
    helper.getIdValueExpectation('tolerance0', '1');

    helper.getIdTextExpectation('sigFigBox0Color0', 'black');
    helper.getIdTextExpectation('sigFigBox1Color0', 'black');
    helper.getIdTextExpectation('sigFigBox2Color0', 'black');
    helper.getIdTextExpectation('multiplier0', 'x1');
    helper.getIdTextExpectation('tolerance0', '1%');
  });
});
