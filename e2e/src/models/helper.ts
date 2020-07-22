import { browser, element, by } from 'protractor';

export class Helper {

  constructor() {}

/**
loads the home page
*/
  loadHome() {
    browser.get('/index.html');
  }

  classClick(className: string, index: number) {
    let dropdown = element.all(by.css("." + className + " option"));
    dropdown.get(index).click();
  }

  doesSelectBoxExist(className: string) {
    let result = element(by.css("." + className))
    expect(result).toBeTruthy();
  }

  /**
  returns the text of an id
  */
  getIdTextExpectation(idName: string, textExpectation: string) {
    let actualIdText = element(by.id(idName)).getText();
    expect(actualIdText).toEqual(textExpectation);
  }
}
