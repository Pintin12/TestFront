import { Item } from "@/intefaces/Items";
import ResponseData from "@/intefaces/ResponseData";
import TestDataService from "@/services/TestDataService";
import { json } from "stream/consumers";

type Sent = Array<Item>;

const getAllItems= (): Array<Item>  => {
    let it = [] as Array<Item>;
    TestDataService.getAll()
    .then((response: ResponseData) => {
          it = response.data.result.data ;
          
    })
    .catch((e: Error) => {
        console.log(e);
        return null;
    });
    const s =  JSON.stringify(it);
    return it;
}

export default getAllItems;