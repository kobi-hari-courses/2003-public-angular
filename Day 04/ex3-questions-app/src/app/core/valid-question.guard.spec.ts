import { TestBed } from '@angular/core/testing';

import { ValidQuestionGuard } from './valid-question.guard';

describe('ValidQuestionGuard', () => {
  let guard: ValidQuestionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidQuestionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
