<template>
  <div id="app">
    <div v-focus>哈哈哈</div>
    <router-link to="/helloworld">你好，世界</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    let stataValue = this.$store.state
    if(stataValue.age == 18){
      this.$router.push({
        path:'/helloworld'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
