export class GithubInfoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('github-info-app h1')).getText();
  }
}
