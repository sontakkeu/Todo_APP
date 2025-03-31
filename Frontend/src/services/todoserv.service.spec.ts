import { TestBed } from '@angular/core/testing';

import { TodoservService } from './todoserv.service';

describe('TodoservService', () => {
  let service: TodoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
