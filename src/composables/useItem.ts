import { useItemStore } from "@/store/itemStore"
import { storeToRefs } from 'pinia';

export const useItem = () => {
    const itStore = useItemStore();
    const {itemArr} = storeToRefs(itStore); 

    const initItems = async () => {
        itStore.loadItems();
    }

    return{
        itemArr
    }
};