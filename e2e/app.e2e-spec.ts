import { JadedAvenuePage } from './app.po';

describe('jaded-avenue App', () => {
  let page: JadedAvenuePage;

  beforeEach(() => {
    page = new JadedAvenuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
