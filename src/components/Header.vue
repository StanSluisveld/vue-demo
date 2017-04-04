<template>
    <header class='top'>
    <h1>
        Catch 
        <span class="ofThe">
            <span class="of">of</span>
            <span class="the">the</span>
        </span>
        day
    </h1> 
    <h3 class='tagline'><span>{{tagLine}}</span></h3>
    </header>
</template>

<script>  
 export default {
        props:['tagLine'],
        data() {
            return {
               
            }
        } 
    }
</script>