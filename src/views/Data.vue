<template>
  <div class="data">
    <Title></Title>
    <Map></Map>
    <div class="left">
      <div class="fenQiTong" @click='shift(1)' :class="active==1?'active':''">分期通</div>
      <div class="eFenGou" @click='shift(2)' :class="active==2?'active':''">一分购</div>

      <Zong></Zong>
      <Success class="data_success"></Success>
    </div>
    <div class="middle">
      <div class="middle_left">
        <ShouRu></ShouRu>
        <Click></Click>
      </div>
      <div class="middle_right">
        <JinJianShu></JinJianShu>
        <JiaoYiE></JiaoYiE>
      </div>
    </div>
    <div class="right">
      <ZengSu></ZengSu>
      <YuE></YuE>
    </div>
  </div>
</template>
<script>
import Title from "@/components/page/Title";
import Map from "@/components/page/Map";
import Success from "@/components/page/success/Success";
import ShouRu from "@/components/page/shouRu/ShouRu";
import JinJianShu from "@/components/page/jinJianShu/JinJianShu";
import JiaoYiE from "@/components/page/jiaoYiE/JiaoYiE";
import Click from "@/components/page/click/Click";
import ZengSu from "@/components/page/zengSu/ZengSu";
import YuE from "@/components/page/yuE/YuE";
import Zong from "@/components/page/zong/Zong";

export default {
  name: "Data",
  data() {
    return {
      active: 0
    };
  },
  components: {
    Title,
    Map,
    Success,
    ShouRu,
    JinJianShu,
    JiaoYiE,
    Click,
    ZengSu,
    YuE,
    Zong
  },
  methods: {
    shift(index) {
      this.active=index;
      console.log(index)
    }
  }
};
</script>
<style scoped>
.data {
  position: relative;
  width: 3584px !important;
  height: 640px !important;
  background: url("../assets/dataImage/bg.png") center no-repeat;
}

/* .data_success{
    position: absolute;
    top: 300px;

} */
.left {
  position: absolute;
  width: 641px;
  height: 630px;
  left: 725px;
  top: 5px;
  background: url("../assets/dataImage/leftBorder.png") center no-repeat;
}

.fenQiTong,
.eFenGou {
  position: absolute;
  top: 9px;
  width: 111px;
  height: 37px;
  background: url("../assets/dataImage/no_active.png") center no-repeat;
  text-align: center;
  font-size: 16px;
  color: #0075ff;
  line-height: 37px;
}
.fenQiTong,
.eFenGou {
  right: 50px;
}

.eFenGou {
  right: 190px;
}

.middle {
  position: absolute;
  width: 1432px;
  height: 630px;
  left: 1413px;
  top: 5px;
  background: url("../assets/dataImage/middleBorder.png") center no-repeat;
}

.middle_left {
  position: absolute;
  width: 700px;
  height: 100%;
  left: 0;
  top: 0;
}

.middle_right {
  position: absolute;
  width: 700px;
  height: 100%;
  right: 0;
  top: 0;
}

.right {
  position: absolute;
  width: 702px;
  height: 630px;
  right: 28px;
  top: 5px;
  background: url("../assets/dataImage/rightBorder.png") center no-repeat;
  /* background-size: contain; */
}

.active {
  background: url("../assets/dataImage/active.png") center no-repeat;
  /* color:red; */
}
</style>