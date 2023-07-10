---
to: src/<%= name %>/index.test.js
---
import { solve } from '_src/<%= name %>'

describe('Day <%= name %> | challange name', () => {
  describe('solve', () => {
    it('test functionalities', () => {
      expect(solve).toBeDefined();
    })
  })
})
