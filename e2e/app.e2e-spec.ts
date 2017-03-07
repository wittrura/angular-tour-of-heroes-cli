import { AngularTourOfHeroesCliPage } from './app.po';

describe('angular-tour-of-heroes-cli App', function() {
  let page: AngularTourOfHeroesCliPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
