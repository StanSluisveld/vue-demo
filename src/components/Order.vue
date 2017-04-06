<template>
    <div class="order-wrap">
        <h2>Order</h2>   
        <p>{{orderIds}}</p>
        <p>{{total()}}</p>
    </div>
</template>

<script>
    
    export default {
        props: ['fishes', 'order', 'orderIds','total'],
        data(){
            return{
        
            }
        },
       
    }   
</script>