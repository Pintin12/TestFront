import { createStore } from 'vuex';
import itemModule from './items';
import { ItemStateInterface } from './items/state';

export interface StateInterface {
  items: ItemStateInterface
}

export default createStore<StateInterface>({
  modules: {
    items: itemModule
  }
})