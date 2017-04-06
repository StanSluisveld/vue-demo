<template>
    <div class="order-wrap">
        <h2>Order</h2>   
        {{orderIds}}

    </div>
</template>

<script>
    
    export default {
        props: ['fishes', 'order'],
        data(){
            return {
                orderIds: Object.keys(this.$props.order) 
            } 
        },
        Vue.set(orderIds, keys, order)
    }
    
</script>