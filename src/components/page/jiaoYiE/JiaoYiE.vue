<template>
  <div class="jiaoYiE">
    <!-- <div class="title">年累计交易额</div> -->
    <Title text='年累计交易额 Annual Cumulative Turnover'></Title>
    <JiaoYiEItem></JiaoYiEItem>
  </div>
</template>
<script>
import JiaoYiEItem from "@/components/page/jiaoYiE/jiaoYiECom/JiaoYiEItem";
import Title from "@/components/page/title/Title";
export default {
  name: "JiaoYiE",
  data() {
    return {};
  },
  components: {
    JiaoYiEItem,
    Title
  }
};
</script>
<style scoped>
.jiaoYiE {
  position: absolute;
  top: 320px;
  /* right: 24px; */
}

/* .title {
  position: absolute;
  top: 20px;
  left: -8px;
  color: aliceblue;
  width: 640px;
  height: 32px;
  background: #00ffff;
} */
</style>