import knex from '../database';

class Link {
  static create(newLink) {
    knex('link').insert({"url": "http://google.com.au"});
    return console.log(knex);
  }

  static test() {
    return 'test of link class'
  }

  static get(linkId) {
    return knex.from('link').select().then(
      (rows) => {
        return rows;
      }
    );
  }
}

export default Link;
