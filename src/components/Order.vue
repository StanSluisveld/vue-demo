<template>
    <div class="order-wrap">
        <h2>Order</h2>   
        <p>{{orderIds}}</p>
    </div>
</template>

<script>
    
    export default {
        props: ['fishes', 'order'],
        data(){
            return{
        
            }
        },
        computed: {
         orderIds: function () {
         return this.order;
    }
  }
       
    }   
</script>