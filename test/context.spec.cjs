/*!
 * Copyright (c) 2021-2026 Digital Bazaar, Inc. All rights reserved.
 */
/* global describe */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts,
  metadata,
  named
} = require('../dist/main.cjs');
const {
  tests
} = require('./context.common.cjs');

describe('Context (require)', () => {
  tests({contexts, metadata, named, expect});
});
