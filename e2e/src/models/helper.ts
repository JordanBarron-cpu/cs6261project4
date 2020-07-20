import { browser, element, by } from 'protractor';

export class Helper {

  constructor() {}

/**
loads the home page
*/
  loadHome() {
    browser.get('/index.html');
  }

  /**
  returns the text of an id
  */
  getIdTextExpectation(idName: string, textExpectation: string) {
    let actualIdText = element(by.id(idName)).getText();
    expect(actualIdText).toEqual(textExpectation);
  }

  /**
  returns the value of an id
  */
  getIdValueExpectation(idName: string, valueExpectation: string) {
    let actualIdValue = element(by.id(idName)).getAttribute('value');
    expect(actualIdValue).toEqual(valueExpectation);
  }
}
