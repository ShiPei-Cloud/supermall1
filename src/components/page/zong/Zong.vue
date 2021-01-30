<template>
  <div class="zong">

    <Title class="zong_title" text='总拨打量 Total Dialing'></Title>
    <ZongItem></ZongItem>
    <In></In>
  </div>
</template>
<script>
import ZongItem from "@/components/page/zong/zongCom/ZongItem";
import Title from "@/components/page/title/Title";
import In from "@/components/page/zong/zongCom/In";

export default {
  name: "Zong",
  data() {
    return {};
  },
  components: {
    ZongItem,
    Title,
    In
  }
};
</script>
<style scoped>
.zong {
  position: absolute;
  left: 52px;
  top: 55px;
}
.zong_title {
  width: 540px;
}
</style>