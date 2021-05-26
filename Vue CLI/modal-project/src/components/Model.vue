<template>
    <div class="backdrop" @click.self="closeModel">
        
        <div class="model" :class=" { sale:theme === 'sale'}">
            <slot> </slot>
            <!-- <h1>{{ header }}</h1>
            <p>{{ text }}</p> -->
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        // props: ['header', 'text','theme'],   // Registering the prop Must be string 
         props: ['theme'],
        methods : {
            closeModel(){
                this.$emit('close')  // creating custom events
            }
        }
    }

</script>

<style > /* Only target in this css */
    .model {
        width:400px;
        padding:20px;
        margin:100px auto;
        background: white;
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

    .model .actions {
        text-align :center;
        margin:30px 0px 10px 0;

    }

    .model .actions a {
        color: #333;
        padding: 8px;
        border:1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }

    p{
        font-style: normal;
    }
</style>