<template>
    <div>
        <h2>Inventory</h2>
        <div class="fish-edit" v-for="(fish, key) in fishes" :key="key" :index="key">
				<input type="text" name="name" :value='fish.name' placeholder="fish name" />
				<input type="text" name="price" :value='fish.price' placeholder="fish price"/>
				<select type="text" name="status" :value='fish.status' placeholder="fish status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out!</option>
				</select>
				<textarea type="text" name="desc" :value='fish.desc' placeholder="" >
				</textarea>
				<input type="text" name="image" :value='fish.image' placeholder="" />
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
        components: {
            'AddFishForm': AddFishForm 
        }
    }
</script>