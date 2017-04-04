<template>
   <form class='store-selector'>
        <h2>Please enter a store</h2>
        <input type='text' :placeholder='text' />
        <button type='submit'>Visit store</button>	
	</form>
</template>

<script>
import { getStoreName } from '../helpers';

    export default {
        data() {
            return {
               text: getStoreName() 
            }
        } 
    }
</script>