import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { ItemStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const itemModule: Module<ItemStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default itemModule;