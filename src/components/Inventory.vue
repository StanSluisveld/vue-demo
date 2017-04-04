<template>
    <div>
    <h2>Inventory</h2>
    <AddFishForm />
    </div>
</template>


<script>
    import AddFishForm from './AddFishForm';

    export default {
        components: {
            'AddFishForm': AddFishForm 
        }
    }
</script>