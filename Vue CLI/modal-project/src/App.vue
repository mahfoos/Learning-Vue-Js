<!--Root Component-->
<template>
    <h1>{{ title }}</h1>
    <Model />
    <!-- <input type="text" ref = "name">
    <button @click="handleClick"> Click Me </button>   lesson - 1 -->
</template>

<script>
import Model from './components/Model.vue'

export default {
  name: 'App',
  components: { Model},
  data() {
    return {
      title: "My First vue App :)"
    }
  },

  methods : {
    // handleClick() {
    //   console.log(this.$refs.name)
    //   this.$ref.name.classList.add('active') // adding claas to inout field
    //   this.$ref.name.focus()
    //  lesson - 1 }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
