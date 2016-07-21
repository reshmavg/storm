import { StormPage } from './app.po';

describe('storm App', function() {
  let page: StormPage;

  beforeEach(() => {
    page = new StormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
