import { GetterTree } from 'vuex';
import { ItemStateInterface } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<ItemStateInterface, StateInterface> = {
    getItems(state) {
        return state.itemsArray;
    }
}

export default getters;