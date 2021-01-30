<template>
  <div class="click">
    <!-- <div class="title">点选成功率</div> -->
    <Title text='点选成功率 Click Success Rate'></Title>
    <ClickItem></ClickItem>
  </div>
</template>
<script>
import ClickItem from "@/components/page/click/clickCom/ClickItem";
import Title from "@/components/page/title/Title";
export default {
  name: "Click",
  data() {
    return {};
  },
  components: {
    ClickItem,
    Title
  }
};
</script>
<style scoped>
.click {
  position: absolute;
  top: 25px;
  width: 640px;
  height: 320px;
  left: 52px;
}


</style>