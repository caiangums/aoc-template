---
to: src/<%= name %>/index.test.js
---
import { myFunc } from '_src/<%= name %>'

describe('Day <%= name %> | challange name', () => {
  describe('myFunc', () => {
    it('test functionalities', () => {
      expect(myFunc).toBeDefined();
    })
  })
})
