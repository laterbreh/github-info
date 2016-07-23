import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GithubInfoAppComponent } from '../app/github-info.component';

beforeEachProviders(() => [GithubInfoAppComponent]);

describe('App: GithubInfo', () => {
  it('should create the app',
      inject([GithubInfoAppComponent], (app: GithubInfoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'github-info works!\'',
      inject([GithubInfoAppComponent], (app: GithubInfoAppComponent) => {
    expect(app.title).toEqual('github-info works!');
  }));
});
