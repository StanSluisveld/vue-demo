<template>
    <form class='fish-edit' v-on:submit.prevent='createFish'> 
        <input  type="text" placeholder="fish name " v-model="name" />
            <input placeholder="fish price" v-model="price" />
            <select v-model="status">
                <option value="available" >Fresh</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea  placeholder="fish desc" v-model="desc"></textarea>
            <input type="text" placeholder="fish image" v-model="image" />
            <button type="submit">+ Add item</button>
    </form>
</template>

<script>
import Mixin from '../mixins.js';

      export default {  

       data() {
           console.log(name);
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
                console.log("add some fish");
                const fish = {
                    name: this.$data.name,
                    price: this.$data.price,
                    status: this.$data.status,
                    desc: this.$data.desc,
                    image: this.$data.image,
		}
        
                console.log(fish); 
                this.addFish(fish)       
      }
    },
    mixins: [
        Mixin
    ]
  }

</script>