<template>
    <div class="catch-of-the-day">
        <div class="menu">
            <Header></Header>
        </div>
        <Order></Order>
        <Inventory></Inventory>
    </div>
    
</template>

<script>
    import Header from './Header';
    import Order from './Order';
    import Inventory from './Inventory';

    export default {
        components: {
            'Header': Header,
            'Order': Order,
            'Inventory': Inventory
        
        }
    }

</script>
