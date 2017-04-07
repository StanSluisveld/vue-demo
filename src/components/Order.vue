<template>
    <div class="order-wrap">
        <h2>Order</h2>   
        <ul class="order">
            <li v-for="orderId in orderIds">
              <span>{{renderOrder(orderId)}} Kilo {{fishes[orderId].name}}</span>
              <span class="price">{{formatPrice(renderOrder(orderId) * fishes[orderId].price)}}<button>&times;</button></span>
            </li>
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
        props: ['fishes', 'order', 'orderIds','total','renderOrder'],
        data(){
            return{
        
            }
        },
         methods: {
            formatPrice: formatPrice,
         },

    }   
</script>