import {Item} from "@/types/Items";

export interface ItemStateInterface {
    itemsArray: Array<Item>
}

function state(): ItemStateInterface {
    return {
        itemsArray:[]
    }
}

export default state;