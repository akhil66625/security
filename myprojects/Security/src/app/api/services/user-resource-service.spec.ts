import { TestBed } from '@angular/core/testing';

import { UserResourceService } from './user-resource-service';

describe('UserResourceService.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserResourceService = TestBed.get(UserResourceService);
    expect(service).toBeTruthy();
  });
});
