<template>
    <div class="catch-of-the-day">   
        <div class="menu">
            <FirstHeader :tagLine="tagLine" />
            <ul class="list-of-fishes">
                <Fish v-for="(value, key) in fishes" :key="key" />
            </ul>
        </div>
        <Order />
        <Inventory :fishes="fishes" :addFish="addFish" :loadSamples="loadSamples" />
    </div>  
</template>

<script>
    import Header from './Header';
    import Order from './Order';
    import Inventory from './Inventory';
    import Fish from './Fish';
    import sampleFishes from '../sample-fishes.js';

    export default {
        data() {
            return {
                tagLine: 'Fresh Sea Food',
                fishes: {
                    "fish-1": {
                        name: "jan",
                        price: 5000
                    },
                    "fish-2": {
                        name: "jan",
                        price: 5000
                    }
                }
            }
        },
        methods: {
            addFish(fish) {
                const timestamp = Date.now();
                this.$data.fishes[`fish-${timestamp}`] = fish;
                console.log(this.$data.fishes)
            },
            loadSamples() {
                this.$data.fishes = sampleFishes;
            }
        },
        components: {
            'FirstHeader': Header,
            'Order': Order,
            'Inventory': Inventory ,
            'Fish': Fish 
        }
    }



</script>
