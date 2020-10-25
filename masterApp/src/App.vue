<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">vue</el-menu-item>
      <el-menu-item index="/react">react</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    
  },
  data(){
    return{
      activeIndex:'1'
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key)
    },
  },
};
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
