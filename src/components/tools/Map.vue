<template>
  <div class="Zmap"></div>
</template>
<script>
export default {
  name: "Zmap",
};
</script>
<style lang="less" scope>
.ltwh(@l,@t,@w,@h) {
  //left top width height
  left: @l;
  top: @t;
  width: @w;
  height: @h;
}

.bg(@url,@size:100%100%) {
  background: @url no-repeat;
  background-size: @size;
}
.Zmap {
  position: absolute;
  .ltwh(50px, 20px, 600px, 600px);
  .bg(url("../../assets/img/components/EnterpriseData/maps/上海.png"));
}

</style>