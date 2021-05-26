<template>
    <div class="backdrop" @click="closeModel">
        <div class="model" :class=" { sale:theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    
    export default {
        props: ['header', 'text','theme'],   // Registering the prop Must be string 
        methods : {
            closeModel(){
                this.$emit('close')
            }
        }
    }

</script>

<style > /* Only target in this css */
    .model {
        width:400px;
        padding:20px;
        margin:100px auto;
        background: grey;
        border-radius:10px;
    }

    .backdrop {
        top:0;
        position:fixed;
        background:rgb(0,0,0,0.5);
        width:100%;
        height:100%;
    }

    .model h1 {
        color: #03cfb4;
        border: none;
        padding:0;
    }

    .model.sale {
        background: red;
        color:white;
    }

    .model.sale h1 {
        color: white;
    }

    p{
        font-style: normal;
    }
</style>