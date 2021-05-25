<template>
    <div class="backrop">
        <div class="model">
            <h1>Model Title</h1>
            <p>Model Content</p>
        </div>
    </div>
</template>


<style scoped > /* Only target in this css */
    .model {
        width:400px;
        padding:20px;
        margin:100px auto;
        background: grey;
        border-radius:10px;
    }

    .backrop {
        top:0;
        position:fixed;
        background:rgba(0,0,0,0,5);
        width:100%;
        height:100%;
    }

    h1 {
        color: #03cfb4;
        border: none;
        padding:0;
    }

    p{
        font-style: normal;
    }
</style>