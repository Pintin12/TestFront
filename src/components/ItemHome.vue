<script lang="ts" setup>
import TestDataService from "@/services/TestDataService";
import ResponseData from "@/intefaces/ResponseData";
import { useItem } from "@/composables/useItem";
import { computed } from "vue";

const { itemArr, initItems } = useItem();

initItems();


const selectItem = (result: { id: number; itemState: boolean }) => {
    const newState: boolean = !result.itemState;
    let data = {
        Id: result.id,
        ItemState: newState,
    };
    TestDataService.update(data)
        .then((response: ResponseData) => {
            console.log(response.data);

            result.itemState = newState;
        })
        .catch((e: Error) => {
            console.log(e);
        });
}
const saveItem = (iDesc: string) => {
    let data = {
        itemDescription: iDesc,
    };
    TestDataService.create(data)
        .then((response: ResponseData) => {
            initItems();
        })
        .catch((e: Error) => {
            console.log(e);
        });
}

const itemsFc = computed(() => itemArr.value)

const itemDesc = "";

</script>

<template>
    <div>
        <v-container class="justify-center" style="max-width: fit-content">
            <div class="center pb-4">
                <h4>MY TEST</h4>
            </div>
            <v-text-field v-model="itemDesc"  @keydown.enter="saveItem(itemDesc)"></v-text-field>
                <v-card v-for="(result, index) in itemArr" :key="index" :value="result">
                <v-list max-width="300" v-if="result.itemState == false">
                    <v-list-item >
                        <v-checkbox v-model="result.itemState" :label="result.itemDescription"
                            @click="selectItem(result)"></v-checkbox>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-divider class="pa-6"></v-divider>
            <v-card v-for="(result, index) in itemArr" :key="index" :value="result">
                <v-list  max-width="300" v-if="result.itemState">
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
