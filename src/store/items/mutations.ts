import { MutationTree } from 'vuex';
import { ItemStateInterface } from './state';
import { Item } from '@/types/Items';


const mutation: MutationTree<ItemStateInterface> = {
    setItems(  state: ItemStateInterface, items: Array<Item> ) {
        state.itemsArray = items;
    }
    
}


export default mutation;