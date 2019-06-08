// @flow
import Link from '../models/Link';

class LinkController {
  static async index() {
    return await Link.all();
  }

  static async get(linkId: number) {
  }

  static async create() {

  }

  static async update() {

  }

  static async destroy() {
    
  }
}

export default LinkController;