<script lang="ts">
import { usePlacesStore } from "@/composables";
import TestDataService from "@/services/TestDataService";
import { StateInterface } from "@/store";
import ResponseData from "@/types/ResponseData";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    
    setup() {
        const { itemsArray } = usePlacesStore();

        return {
            itemsArray,
            itemsFalse: false,
            itemsTrue: true,
            itDesc: ""
        };
    },

    methods: {
        selectItem(result: { id: number, itemState: boolean }) {
            const newState: boolean = !result.itemState;
            let data = {
                Id: result.id,
                ItemState: newState
            };
            TestDataService.update(data)
                .then((response: ResponseData) => {
                    console.log(response.data);

                    result.itemState = newState;
                })
                .catch((e: Error) => {
                    console.log(e);
                });

        },
        saveItem(iDesc: string) {
            const store = useStore<StateInterface>();
            let data = {
                itemDescription: iDesc
            };
            TestDataService.create(data)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    store.dispatch('items/getInitialItems');
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    },
});
</script>

<template>
    <div>
        <v-container class="justify-center" style="max-width: fit-content;">
            <div class="center pb-4">
                <h4>MY TEST</h4>
            </div>
            <v-text-field v-model="itDesc" @keydown.enter="saveItem(itDesc)"></v-text-field>
            <v-card v-for="(result, index) in itemsArray" :key="index" :value="result">
                <v-list v-if="result.itemState == false" max-width="300">
                    <v-list-item>
                        <v-checkbox v-model="itemsFalse" :label="result.itemDescription"
                            @click="selectItem(result)"></v-checkbox>
                    </v-list-item>
                </v-list>
            </v-card>
            <v-divider class="pa-6"></v-divider>
            <v-card v-for="(result, index) in itemsArray" :key="index" :value="result">
                <v-list v-if="result.itemState == true" max-width="300">
                    <v-list-item v-if="result.itemState">
                        <v-checkbox v-model="itemsTrue" :label="result.itemDescription"
                            @click="selectItem(result)"></v-checkbox>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped></style>
