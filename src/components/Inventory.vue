<template>
    <div>
        <h2>Inventory</h2>
        <AddFishForm />
        <button v-on:click="loadSamples">Load sample fishes</button>
        {{fishes}}
    </div>
</template>

<script>
    import AddFishForm from './AddFishForm';
    import { store } from '../mixins.js';

    export default {
        data() {
            return {
                fishes: {}
            }
        },
        methods: {
            loadSamples: function(){
                this.$data.fishes = store.loadFishes();
                // JSON zorgt ervoor dat het geen observer data type is en dat het zichtbaar is in vue dev tools
                JSON.parse(JSON.stringify(this.$data.fishes));            
            },  
            addFish: function(){
                this$data.fishes = store.addFish();
                JSON.parse(JSON.stringify(this.$data.fishes));  
            } 
        },
        components: {
            'AddFishForm': AddFishForm 
        }
    }
</script>