import knex from '../database';

class Link {
  static create(newLink) {
    knex('link').insert({"url": "http://google.com.au"});
    return console.log(knex);
  }

  static test() {
    return 'test of link class'
  }
}

export default Link;
