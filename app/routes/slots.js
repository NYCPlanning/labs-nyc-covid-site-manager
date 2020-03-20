import Route from '@ember/routing/route';
import { fetch } from 'fetch';

export default class SlotsRoute extends Route {
  model() {
    return this.store.findAll('slot');
  }
}
