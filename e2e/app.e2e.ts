import { GithubInfoPage } from './app.po';

describe('github-info App', function() {
  let page: GithubInfoPage;

  beforeEach(() => {
    page = new GithubInfoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('github-info works!');
  });
});
