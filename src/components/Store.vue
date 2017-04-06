<template>
    <div class="catch-of-the-day">   
        <div class="menu">
            <FirstHeader :tagLine="tagLine" />
            <ul class="list-of-fishes">
                <Fish 
                    v-for="(value, key) in fishes" 
                    :key="key" 
                    :index="key"
                    :fish="value" 
                    :addToOrder="addToOrder"
                    />
            </ul>
        </div>
        <Order />
        <Inventory 
            :fishes="fishes" 
            :addFish="addFish" 
            :loadSamples="loadSamples" />
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
                fishes: {},
                order: {}  
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
            },
            addToOrder(key) {
                // const order = {...this.state.order} kan vervangen worden door this.$data.order
		        this.$data.order[key] = this.$data.order[key] + 1 || 1;
                console.log(this.$data.order)
                
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
