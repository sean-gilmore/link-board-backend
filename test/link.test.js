import Link from '../app/models/Link';

describe('Link', function() {
  describe('get Link', function () {
    it('should return a link', async function() {
      const link = await Link.get(1)
      console.log(link);
    });
  })
})