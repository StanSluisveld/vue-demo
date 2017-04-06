<template>
    <div class="order-wrap">
        <h2>Order</h2>   
        {{orderIds}}
    </div>
</template>

<script>
    
    export default {
        props: ['fishes', 'order', 'orderIds']
       
    }
    
</script>