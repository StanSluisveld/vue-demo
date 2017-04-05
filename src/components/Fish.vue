<template>
    <li class="menu-fish">
        <img v-bind:src="fish.image" v-bind:alt="fish.name" />
        <h3 class="fish-name">
            {{fish.name}}
            <span class="price>">{{formatPrice(fish.price)}}</span>
        </h3>
        <p>{{fish.desc}}</p>
        <button>Add To Order</button>
    </li>
</template>

<script>
import { formatPrice } from '../helpers';

export default {
        props: ['fish'],
        methods: {
            formatPrice: formatPrice
        }
}
</script>