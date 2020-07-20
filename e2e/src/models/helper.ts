import { browser, element, by } from 'protractor';

export class Helper {

  constructor() {}

  loadHome() {
    browser.get('/');
  }

  idTextExpectation(idName: string, textExpectation: string) {
    let actualIdText = element(by.id(idName)).getText();
    expect(actualIdText).toEqual(textExpectation);
  }
}
