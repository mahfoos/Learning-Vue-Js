<!--Root Component-->
<template>
    <h1>{{ title }}</h1>
    <p>Welcome...</p>
    <div v-if = "showModel">
          <!-- <Model :header="header" :text="text" theme = "sale" @close="toggleModel"/> -->
          <Model  @close="toggleModel">
            <template v-slot:links>
              <a href="#"> Sign Up Now</a>
              <a href="#"> More info</a>
            </template>
            <h1>Mahfoos Ahamed</h1>
            <p>Software Engineer</p>
          </Model>
    </div>

    <button @click.alt="toggleModel"> Open Model (ALT) </button> <!-- modyfying click events-->
    <!-- <Model  header = "The Man still trying" text = "Still doing"/> -->
    
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
      title: "My First vue App :)",
      header:" The Man Try Differnet",
      text:"Grab Grab",
      showModel: false
    }
  },

  methods : {
    // handleClick() {
    //   console.log(this.$refs.name)
    //   this.$ref.name.classList.add('active') // adding claas to inout field
    //   this.$ref.name.focus()
    //  lesson - 1 }
    toggleModel() {
      this.showModel = !this.showModel;
    }

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
