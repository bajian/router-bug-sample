<template>

  <div class="app">
    <keep-alive>
    <router-view></router-view>
  </keep-alive>

  <div flex="dir:left cross:bottom"  class="tabbar">
    <router-link tag="a" to="/index/a" replace>
    go to a
  </router-link>
  <router-link tag="a" to="/index/b" replace>
    go to b
  </router-link>
</div>

</div>
</template>

<script>

  export default {
   data(){
     return {
    }
  },
  mounted(){

    this.$nextTick(function () {
    })
  },
  destroyed(){
    console.log('app destroyed');
  }
  ,
  beforeRouteEnter(to ,from ,next){
    next(vm => {
  })
  },
  methods: {
},
components: {
  // column2
}
}
</script>

<style scoped>

  .tabbar{
    cursor: pointer;
  }

  .blank{
    height: 4.32142857rem;/* 121px */
  }

  .tabbar-background{
    z-index: 1;
    height: 4.32142857rem;/* 121px */
    max-width: 600px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background: #fff;
  }

  .tabbar{
    z-index: 2;
    background: transparent;
    max-width: 600px;
    width: 100%;
    position: fixed;
    bottom: 0rem;/* 18px */
    display: flex !important; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
    display: inline-flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
    flex-wrap: nowrap;
    text-align: center;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

  }

  .tabbar>a{
    user-select:none;
    -webkit-user-select:none;
    text-decoration: none;
    padding: 2px 0px;
    text-align: center;
    align-self: flex-end;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 12px;

    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -moz-box-flex: 1; /*Firefox*/
    -webkit-box-flex: 1; /*Safari,Opera,Chrome*/
    box-flex: 1;
    color: black;
  }

  .tabbar>a.router-link-active{
    color:#ff4081
  }



</style>
