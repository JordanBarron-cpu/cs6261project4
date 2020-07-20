import { browser, element, by } from 'protractor';
import { Helper } from './models/helper';

describe('successful scenario tests', () => {
  let helper = new Helper();

  it('load Home', () => {
    helper.loadHome();
    helper.idTextExpectation('resistanceMessage', 'Resistance:');
  });
});
