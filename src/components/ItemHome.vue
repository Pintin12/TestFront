<script lang="ts" setup>
import TestDataService from "@/services/TestDataService";
import ResponseData from "@/intefaces/ResponseData";
import { useItem } from "@/composables/useItem";

const { itemArr, initItems } = useItem();
const itemDesc = "";
initItems();

const selectItem = (result: {
    id: number;
    itemDescription: string;
    itemState: boolean;
}) => {
    const newState: boolean = !result.itemState;
    let data = {
        Id: result.id,
        itemDescription: result.itemDescription,
        ItemState: newState,
    };
    TestDataService.update(result.id, data)
        .then((response: ResponseData) => {
            result.itemState = newState;
            initItems();
        })
        .catch((e: Error) => {
            console.log(e);
        });
};
const saveItem = (iDesc: string) => {
    let data = {
        itemDescription: iDesc,
    };
    TestDataService.create(data)
        .then(() => {
            initItems();
        })
        .catch((e: Error) => {
            console.log(e);
        });
};


</script>

<template>
    <div>
        <v-container class="justify-center" style="max-width: fit-content">
            <div class="center pb-4">
                <h4>MY TEST</h4>
            </div>
            <v-text-field v-model="itemDesc" label="Ingrese texto + enter" @keydown.enter="saveItem(itemDesc)"></v-text-field>
            <v-card v-for="(result, index) in itemArr" :key="index" :value="result">
                <v-list max-width="300" v-if="result.itemState == false">
                    <v-list-item>
                        <v-checkbox v-model="result.itemState" :label="result.itemDescription"
                            @click="selectItem(result)"></v-checkbox>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-divider class="pa-6"></v-divider>
            <v-card v-for="(result, index) in itemArr" :key="index" :value="result">
                <v-list max-width="300" v-if="result.itemState">
                    <v-list-item v-if="result.itemState">
                        <v-checkbox v-model="result.itemState" :label="result.itemDescription"
                            @click="selectItem(result)"></v-checkbox>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped></style>
