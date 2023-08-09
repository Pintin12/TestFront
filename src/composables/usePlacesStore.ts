import { computed, onMounted } from "vue";
import { StateInterface } from "@/store/index";
import { useStore } from "vuex";

export const usePlacesStore = () => {
    const store = useStore<StateInterface>();
    onMounted(()=> {
       //To do validación para que no lo recargue + de 1 vez.
        if(store.getters['items/getItems']){
            store.dispatch('items/getInitialItems')
        }
    })

    return {
        itemsArray: computed(() => store.state.items.itemsArray)
    }
};