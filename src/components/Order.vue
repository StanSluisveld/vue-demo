<template>
    <div class="order-wrap">
        <h2>Order</h2>   
        <ul class="order">
            <li v-for="orderId in orderIds" v-if="fishes[orderId] && fishes[orderId].status == 'available'">        
              <span>{{renderOrder(orderId)}} Kilo {{fishes[orderId].name}}</span>
              <span class="price">{{formatPrice(renderOrder(orderId) * fishes[orderId].price)}}<button v-on:click='removeFromOrder(orderId)'>&times;</button></span>
            </li>
            <li v-for="orderId in orderIds"  v-if="(!fishes[orderId] && orderIds) || (fishes[orderId] && fishes[orderId].status == 'unavailable')"><span>Sorry, this product is no longer available<button v-on:click='removeFromOrder(orderId)'>&times;</button></span></li>
            <li class="total">
                <strong>Total: </strong>
                {{formatPrice(total())}}
            </li>
        </ul>
    </div>
</template>

<script>
 import { formatPrice } from '../helpers';
    
    export default {
        props: ['fishes', 'order', 'orderIds','total','renderOrder', 'removeFromOrder' ],
        data(){
            return{
        
            }
        },
         methods: {
            formatPrice: formatPrice,
         },
    }   
</script>