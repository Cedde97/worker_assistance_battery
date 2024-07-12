import { TestBed } from '@angular/core/testing';

import { PageCommunicationService } from './page-communication.service';

describe('PageCommunicationService', () => {
  let service: PageCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
