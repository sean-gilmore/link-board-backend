// @flow
import knex from '../database';
import { Link as LinkType } from '../types';

class Link {
  static all(): Array<LinkType> {
    const all = knex.from('link').select().then(
      (rows) => {
        console.log(rows);
        return rows;
      }
    );
    return all;
  }

  static create(newLink): LinkType {
    knex('link').insert(newLink);
  }

  static get(linkId: number): LinkType {
    return knex.from('link').select().where('id', linkId);
  }
}

export default Link;
