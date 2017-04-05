<template>
    <li class="menu-fish">
        <img v-bind:src="fish.image" v-bind:alt="fish.name" />
        <h3 class="fish-name">
            {{fish.name}}
            <span class="price>">{{formatPrice(fish.price)}}</span>
        </h3>
        <p>{{fish.desc}}</p>
        <button v-bind:disabled='!isAvailable'>{{getButtonText()}}</button>
    </li>
</template>

<script>
import { formatPrice } from '../helpers';



export default {
        data() {
            return{
               isAvailable: this.fish.status === 'available',
            }
        },
        props: ['fish'],
        methods: {
            formatPrice: formatPrice,

            getButtonText(){
                return this.$data.isAvailable ? 'add to order' : 'sold out!'
            }
        }
       
}
</script>