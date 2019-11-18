import Link from '../Link';
import { assert } from 'chai';

describe('Link', function() {
  describe('get Link', function () {
    it('should return a link if link is present', async function() {
      const expected = {id: 1, url: 'http://www.example.com'};
      const link = await Link.get(1)

      assert.equal(link.id, expected.id);
      assert.equal(link.url, expected.url);
    });

    it('should return no data is link is not present', async function() {
      const link = await Link.get(999);

      assert.isUndefined(link);
    })
  });
})
