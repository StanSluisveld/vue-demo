<template>
    <div class="catch-of-the-day">
        <div class="menu">
            <FirstHeader :tagLine="tagLine" />
            <h3>{{title}}</h3>
            <ul class="list-of-fishes">
                <Fish v-for="(value, key) in fishes" :key="key" :index="key" :fish="value" :addToOrder="addToOrder" />
            </ul>
        </div>
        <Order :fishes="fishes" :order="order" :orderIds="orderIds" :total="total" :renderOrder="renderOrder" />
        <Inventory @title_changed='setTitle' :fishes="fishes" :addFish="addFish" :loadSamples="loadSamples" :removeFish="removeFish" />
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
                title: ''    
            }
        },
       
        methods: { 
            formatPrice: formatPrice,
          
            addFish(fish) {
                const timestamp = Date.now();
                this.fishes[`fish${timestamp}`] = fish;
                //console.log(this.fishes)
            },
            loadSamples() {
                this.fishes = sampleFishes;
            },
            addToOrder(key) {
		        this.order[key] = this.order[key] + 1 || 1;
                this.orderIds = Object.keys(this.order)
            },
            // setFish(fish) {
            //     console.log(fish)
            //     this.fish = this.fishes;
            // },
            removeFish(key){
                const fishes = this.fishes;
                fishes[key] = null;
                console.log(fishes)
            },

            renderOrder(key) {
		const fish = this.fishes[key];
		const count = this.order[key];
        return count;
            },
            
            setTitle(title) {
    	        this.title = title;
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