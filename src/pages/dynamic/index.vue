<template>
    <div>
        <HelloWorld :msg="`${route.params.id}`" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {useRoute} from 'vue-router'

import HelloWorld from '../../components/HelloWorld.vue';
export default defineComponent({
    name:'dynamic',
    components:{
        HelloWorld
    },
    setup:()=>{
        return {
            route:useRoute()
        }
    }
})
</script>
