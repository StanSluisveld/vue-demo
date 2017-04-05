<template>
    <div>
        <h2>Inventory</h2>
        <AddFishForm :fishes="fishes" :addFish="addFish" />
        <button v-on:click="loadSamples">Load sample fishes</button>
       
    </div>
</template>

<script>
    import AddFishForm from './AddFishForm';

    export default {
        props: ['fishes', 'addFish', 'loadSamples'],
        components: {
            'AddFishForm': AddFishForm 
        }
    }
</script>