
import getAllItems from "@/helpers/items/getItems";
import { Item } from "@/intefaces/Items";
import { defineStore } from "pinia";

interface ItemState{
    itemArr: Array<Item>
}

export const useItemStore = defineStore('items',{
state:(): ItemState => ({
    itemArr: []
}),
actions:{
    loadItems(){
       this.itemArr = getAllItems();
    },

}
});