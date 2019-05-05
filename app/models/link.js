import knex from '../database';

class Link {
  static create(newLink) {
    return knex('link').insert(newLink);
  }

  static get(linkId) {
    return knex.from('link').select().where('id', linkId);
  }

  static all() {
    return knex.from('link').select().then(
      (rows) => {
        return rows;
      }
    );
  }
}

export default Link;
