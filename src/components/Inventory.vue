<template>
    <div>
        <h2>Inventory</h2>
         
        <div class="fish-edit" v-for="(fish, key) in fishes" :key="key" :index="key">
            <input type="text" name="name" :value='fish.name' placeholder="fish name" @keyup="handleChange(key, $event)" />
            <input type="text" name="price" :value='fish.price' placeholder="fish price" @keyup="handleChange(key, $event)" />
            <select type="text" name="status" :value='fish.status' placeholder="fish status" @keyup="handleChange(key, $event)">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out!</option>
				</select>
            <textarea type="text" name="desc" :value='fish.desc' placeholder="" @keyup="handleChange(key, $event)">
				</textarea>
            <input type="text" name="image" :value='fish.image' placeholder="" @keyup="handleChange(key, $event)" />
            <button v-on:click="removeFish"> remove </button>
        </div>

        <AddFishForm :fishes="fishes" :addFish="addFish" />
        <button v-on:click="loadSamples">Load sample fishes</button>
    </div>
</template>

<script>
    import AddFishForm from './AddFishForm';

    export default {
        props: ['fishes', 'addFish', 'loadSamples', 'removeFish'],
        data(){
            return {
                title: ''
            }
        },
        components: {
            'AddFishForm': AddFishForm 
        },
        methods: {
  	        handleChange(key, e) {
               // console.log(e);
               // neem de Key, target de naam van het veld en de waarde ervan
                    this.$emit('handleChanged', {key: key, field: e.target.name, value: e.target.value});
    }
  }
    }
</script>