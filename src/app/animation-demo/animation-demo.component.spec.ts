/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimationDemoComponent } from './animation-demo.component';

describe('Component: AnimationDemo', () => {
  it('should create an instance', () => {
    let component = new AnimationDemoComponent();
    expect(component).toBeTruthy();
  });
});
