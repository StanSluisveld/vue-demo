<template>
    <form class='fish-edit' v-on:submit.prevent='createFish'>
        <input type="text" placeholder="fish name " v-model="name" />
        <input placeholder="fish price" v-model="price" />
        <select v-model="status">
                <option value="available" >Fresh</option>
                <option value="unavailable">Sold Out!</option>
            </select>
        <textarea placeholder="fish desc" v-model="desc"></textarea>
        <input type="text" placeholder="fish image" v-model="image" />
        <!--<button type="submit" v-on:click="resetForm">+ Add item</button>-->
        <button type="submit">+ Add item</button>
    </form>
</template>

<script>
import { store } from '../mixins.js';

      export default {  
  data() { 
           return {
                name: '',
                price: '',
                status: '',
                desc: '',
                image: ''
           }   
       },

       methods: {
            createFish: function (event) {
                const fish = {
                    name: this.$data.name,
                    price: this.$data.price,
                    status: this.$data.status,
                    desc: this.$data.desc,
                    image: this.$data.image,
		        }
                store.addFish(fish);
                //console.log(fish);
               // console.log(store.state.fishes); // kan ook fish zijn ipv store.state.fishes?   
        },
        resetForm: function(e) {
            console.log('reset form');
            this.$data.name = "",
            this.$data.price = "",
            this.$data.status = "",
            this.$data.desc = "",
            this.$data.image = ""
        }
    }
  }

</script>