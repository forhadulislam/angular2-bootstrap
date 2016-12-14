import { ShhNgPage } from './app.po';

describe('shh-ng App', function() {
  let page: ShhNgPage;

  beforeEach(() => {
    page = new ShhNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
