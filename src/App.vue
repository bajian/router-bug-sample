<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    
<mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
