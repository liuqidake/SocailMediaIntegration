<template>
  <div id="app">
    <Contents v-bind:contents="contents"/>
  </div>
</template>

<script>
import Contents from "./components/Contents"
export default {
  name: 'app',
  components: {
    Contents
  },
  data(){
    return {
      contents:[
        {
          id:1,
          name:"Jackson",
          content: "Hello Guys"
        },
        {
          id:2,
          name:"Elsa",
          content: "I am so happy today"
        },
        {
          id:3,
          name:"Harry",
          content: "Well well well"
        },
      ]
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #dadee3
}
#app {
   font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;  */
}

</style>
