import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ProfileService } from './profile.service';

describe('Profile Service', () => {
  beforeEachProviders(() => [ProfileService]);

  it('should ...',
      inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
