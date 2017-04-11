<template>
    <div class="catch-of-the-day">
        <div class="menu">
            <FirstHeader :tagLine="tagLine" />
            <ul class="list-of-fishes">
                <Fish v-for="(value, key) in fishes" :key="key" :index="key" :fish="value" :addToOrder="addToOrder" />
            </ul>
        </div>
        <Order :fishes="fishes" :order="order" :orderIds="orderIds" :total="total" :renderOrder="renderOrder" :removeFromOrder="removeFromOrder" />
        <Inventory @handleChanged='updateFish' :fishes="fishes" :addFish="addFish" :loadSamples="loadSamples" :removeFish="removeFish" />
    </div>
</template>

<script>
    import Header from './Header';
    import Order from './Order';
    import Inventory from './Inventory';
    import Fish from './Fish';
    import sampleFishes from '../sample-fishes.js';
    import Vue from 'vue';
    import { formatPrice } from '../helpers'; 

    export default {
        data() {
            return {
                tagLine: 'Fresh Sea Food',
                fishes: {},
                order: {},
                orderIds: null,  
            }
        },
       
        methods: { 
            formatPrice: formatPrice,
          
            addFish(fish) {
                const timestamp = Date.now();
                Vue.set(this.fishes, `fish${timestamp}`, fish);
                console.log("add fish fucntion:", this.fishes)
            },
            loadSamples() {
                //this.fishes = sampleFishes;
                console.log("load sample function: ", this.fishes)
                // loop over object -> pak de key voor de vue.set
                Object.keys(sampleFishes).forEach(fishKey => {
                    Vue.set(this.fishes, fishKey, sampleFishes[fishKey])
                });
            },
            addToOrder(key) {
		        this.order[key] = this.order[key] + 1 || 1;
                this.orderIds = Object.keys(this.order)
            },

            removeFromOrder(key){
                console.log(key, this.order)
                delete this.order[key]; 
                this.orderIds = Object.keys(this.order);
                },
          
            removeFish(key){
                console.log("before:", this.fishes)
                Vue.delete(this.fishes, key)
            },

            renderOrder(key) {
		const fish = this.fishes[key];
		const count = this.order[key];
        return count;
            },
            
            updateFish(updatedFish) {
                this.fishes[updatedFish.key][updatedFish.field] = updatedFish.value;
    	        //console.log(updatedFish.key, updatedFish.field, updatedFish.value)
             },
            
            total(){
                if(this.orderIds === null){
                    return null
                }
                return this.orderIds.reduce((prevTotal, key) => {
                const fish = this.fishes[key];
                const count = this.order[key];
                const isAvailable = fish && fish.status === 'available';
                if(isAvailable) {
                    return prevTotal + ( count * fish.price || 0)
                }
                return prevTotal;
            }, 0);
            },    
        }, 
        components: {
            'FirstHeader': Header,
            'Order': Order,
            'Inventory': Inventory ,
            'Fish': Fish 
        }
    }
</script>