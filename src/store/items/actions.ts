import { ActionTree } from 'vuex';
import { ItemStateInterface } from './state';
import { StateInterface } from '../index';
import TestDataService from '@/services/TestDataService';
import ResponseData from '@/types/ResponseData';

const actions: ActionTree<ItemStateInterface, StateInterface> = {
    getInitialItems( { commit } ) {
        TestDataService.getAll()
        .then((response: ResponseData) => {
            commit('setItems',response.data.result.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
}

export default actions;