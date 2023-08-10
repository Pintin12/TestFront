
import ResponseData from "@/intefaces/ResponseData";
import TestDataService from "@/services/TestDataService";
import { useItemStore } from "@/store/itemStore"
import { storeToRefs } from 'pinia';

export const useItem = () => {
    const itStore = useItemStore();
    const {itemArr} = storeToRefs(itStore); 

    const initItems = async () => {
        TestDataService.getAll()
        .then((response: ResponseData) => {
            itStore.loadItems(response.data.result.data) ;
              
        })
        .catch((e: Error) => {
            console.log(e);
            return null;
        });

    }

    return{
        itemArr,
        initItems
    }
};