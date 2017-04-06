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
        <Order
        :fishes="fishes"
        :order="order"
        :orderIds="orderIds"
        :total="total"
         />
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
    import Vue from 'vue';

    export default {
        data() {
            return {
                tagLine: 'Fresh Sea Food',
                fishes: {},
                order: {},
                orderIds: null,    
            }
        },
        // const total = orderIds.reduce((prevTotal, key) => {
		// 	const fish = this.props.fishes[key];
		// 	const count = this.props.order[key];
		// 	const isAvailable = fish && fish.status === 'available';
		// 	if(isAvailable) {
		// 		return prevTotal + ( count * fish.price || 0)
		// 	}
		// 	return prevTotal;
		// }, 0);
        methods: {
            addFish(fish) {
                const timestamp = Date.now();
                this.fishes[`fish-${timestamp}`] = fish;
                console.log(this.$data.fishes)
            },
            loadSamples() {
                this.fishes = sampleFishes;
            },
            addToOrder(key) {
                // const order = {...this.state.order} kan vervangen worden door this.$data.order
		        this.order[key] = this.order[key] + 1 || 1;
               // console.log(this.$data.order) 
               this.orderIds = Object.keys(this.order)
     
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



