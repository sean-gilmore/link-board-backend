// @flow
import Link from '../models/Link';
import { Link as LinkType } from '../types';


class LinkController {
  static index(): Array<LinkType> {
    return Link.all();
  }

  static show(linkId: number): LinkType {
    return Link.get(linkId);
  }

  static create(newLink): LinkType {
    return Link.create(newLink);
  }

  static update() {

  }

  static destroy() {
    
  }
}

export default LinkController;