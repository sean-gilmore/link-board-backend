// @flow
import Link from '../app/models/Link';

describe('Link', function() {
  describe('get Link', function () {
    it('should return a link', function() {
      const link = Link.get(1);
      console.log(link);
    });
  })
})