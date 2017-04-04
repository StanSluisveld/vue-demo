<template>
    <div class="catch-of-the-day">
     
        <div class="menu">
            <FirstHeader :tagLine="tagLine" />
        </div>
        <Order />
        <Inventory :loadSamples="loadSamples" />
    </div>  
</template>

<script>
    import Header from './Header';
    import Order from './Order';
    import Inventory from './Inventory';

    export default {
        data() {
            return {
                tagLine: 'Fresh Sea Food',
                loadSamples: this.mLoadSamples
            }
        },
        components: {
            'FirstHeader': Header,
            'Order': Order,
            'Inventory': Inventory   
        }
    }



</script>
