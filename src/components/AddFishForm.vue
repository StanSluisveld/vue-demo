<template>
    <form class='fish-edit' v-on:submit.prevent='createFish' >  
        <!--@setFish="setFish" https://jsfiddle.net/z11fe07p/1269/-->
        <input type="text" placeholder="fish name " v-model="name" />
        <input placeholder="fish price" v-model="price" />
        <select v-model="status">
                <option value="available" >Fresh</option>
                <option value="unavailable">Sold Out!</option>
            </select>
        <textarea placeholder="fish desc" v-model="desc"></textarea>
        <input type="text" placeholder="fish image" v-model="image" />
        <button type="submit">+ Add item</button>
    </form>
</template>

<script>

      export default {  
        props: ['fishes', 'addFish'],
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
                    name: this.name,
                    price: this.price,
                    status: this.status,
                    desc: this.desc,
                    image: this.image,
		        }
                this.addFish(fish);
               console.log(fish); 
           
        },
    }
  }

</script>