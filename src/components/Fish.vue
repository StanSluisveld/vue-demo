<template>
    <li class="menu-fish">
        <img v-bind:src="fish.image" v-bind:alt="fish.name" />
        <h3 class="fish-name">
            {{fish.name}}
            <span class="price>">{{formatPrice(fish.price)}}</span>
        </h3>
        <p>{{fish.desc}}</p>
        <button v-on:click='() => addToOrder(index)' v-bind:disabled="!isAvailable()" >{{getButtonText()}}</button>
    </li>
</template>

<script>
import { formatPrice } from '../helpers';



export default {
        props: ['fish', 'addToOrder', 'index'],
        methods: {
            formatPrice: formatPrice,

            getButtonText(){
                return this.fish.status === "available" ? 'add to order' : 'sold out!'
            },
            isAvailable(){
               return this.fish.status === 'available'
            }
        }
       
}
</script>