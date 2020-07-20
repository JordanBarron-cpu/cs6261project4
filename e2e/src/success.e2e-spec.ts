import { browser, element, by } from 'protractor';

describe('successful scenario tests', () => {
  it('load Home', () => {
    browser.get('/');
    let actual = element(by.id('resistanceMessage')).getText();
    expect(actual).toEqual("Resistance:");
  });
});
