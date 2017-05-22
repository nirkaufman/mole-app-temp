import { MoleAppPage } from './app.po';

describe('mole-app App', () => {
  let page: MoleAppPage;

  beforeEach(() => {
    page = new MoleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ml works!');
  });
});
