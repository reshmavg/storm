/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CompanyComponent } from './company.component';

describe('Component: Company', () => {
  it('should create an instance', () => {
    let component = new CompanyComponent();
    expect(component).toBeTruthy();
  });
});
