
import ResponseData from "@/intefaces/ResponseData";
import TestDataService from "@/services/TestDataService";
import { useItemStore } from "@/store/itemStore"
import { storeToRefs } from 'pinia';

export const useItem = () => {
    const itStore = useItemStore();
    const {itemArr} = storeToRefs(itStore); 

    const initItems = async () => {
        itStore.cleanItems();
        TestDataService.getAll()
        .then((response) => {
           itStore.loadItems(response.data) ;
        })
        .catch((e: Error) => {
            console.log("Error", e);
            return null;
        });

    }

    return{
        itemArr,
        initItems
    }
};