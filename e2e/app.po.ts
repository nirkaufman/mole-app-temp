import { browser, element, by } from 'protractor';

export class MoleAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ml-root h1')).getText();
  }
}
