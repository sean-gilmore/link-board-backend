// @flow
import knex from '../database';
import { Link as LinkType } from '../types';

class Link {
  static async all(): Array<LinkType> {
    const all = await knex.from('link').select().then(
      (rows) => {
        return rows;
      }
    );
    return all;
  }

  static async create(newLink): LinkType {
   // Returns an array with the ID of the new link inside it
   // Can access the id by selecting the first item of the array
    const linkId: Array<Number> = await knex('link').insert(newLink);
    const link = await this.get(linkId[0]);
    return link;
  }

  static async get(linkId: number): LinkType {
    const link = await knex.from('link').select().where('id', linkId).first();
    return link;
  }

  static async delete(linkId: number) {
    await knex.from('link').where('id', linkId).del();
    return `Removed link ${linkId}`;
  }

  static async update(linkId: Number, link: LinkType): LinkType {
    await knex('link').where({ id: linkId }).update(link);
    const newLink = await this.get(linkId);
    return newLink;
  }
}

export default Link;
