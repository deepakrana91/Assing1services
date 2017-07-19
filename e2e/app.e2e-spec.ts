import { Assing1servicePage } from './app.po';

describe('assing1service App', () => {
  let page: Assing1servicePage;

  beforeEach(() => {
    page = new Assing1servicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
