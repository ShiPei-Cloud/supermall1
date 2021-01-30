<template>
  <div id="app">
    <router-view class="routerView" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
*{
  padding: 0;
  margin: 0;
}

.bg(@url,@size:100%100%){
  background:@url no-repeat;
  background-size:@size;
}

.ltwh(@l,@t,@w,@h){  //left top width height
  left: @l;
  top: @t;
  width:@w;
  height: @h;
}

#app {
  width: 3584px;
  height: 640px;
  .bg(url("./assets/img/app/bg.png"));

  .routerView{
    position:absolute;
    .ltwh(0px, 0px, 100%, 100%);
    z-index: 100;
  }
}
</style>
