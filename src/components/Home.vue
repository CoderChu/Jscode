<template>
  <div>
    <h1>嘻嘻</h1>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default{
  name:'Home',
  data(){
    return{
      name:"",
    }
  },
  created(){
    this.name = localStorage.getItem('username')
  }
}
</script>

<style scoped>

</style>
