<template>
  <div class="zengSu">
    <!-- <div class="title">涕延后收入</div> -->
    <Title text='增速 Growth Rate' class="title"></Title>
    <ZengSuItem></ZengSuItem>
    <div class="grade">
      <div class="grade_title">增速排名</div>
      <div class="grade_name">

        <ZengSuPaiMing v-for=" (item,index) in paiMing" :key="index">
          <div class="grade_name_item">{{index+1}}:{{item}}</div>
        </ZengSuPaiMing>
      </div>
    </div>
  </div>
</template>
<script>
import ZengSuItem from "@/components/page/zengSu/zengSuCom/ZengSuItem";
import Title from "@/components/page/title/Title";
import ZengSuPaiMing from "@/components/page/zengSu/zengSuCom/ZengSuPaiMing";

export default {
  name: "ZengSu",
  data() {
    return {
      paiMing: [
        "浦东新区",
        "静安区",
        "宝山区",
        "浦东新区",
        "静安区",
        "宝山区",
        "浦东新区",
        "静安区",
        "宝山区",
        "浦东新区",
        "静安区",
        "宝山区",
        "浦东新区",
        "静安区",
        "宝山区",
        "浦东新区",
      
      ]
    };
  },
  components: {
    ZengSuItem,
    Title,
    ZengSuPaiMing
  }
};
</script>
<style scoped>
.zengSu {
  position: absolute;
  height: 300px;
  width: 600px;
  top: 26px;
  left: 52px;
}

.title{
      width: 600px;
}

.grade {
  position: absolute;
  top: 40px;
  left: 400px;
  width: 190px;
  height: 232px;
  border: 1px solid rgba(1, 131, 254, 1);
  overflow: hidden;
}
.grade_title {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  line-height: 30px;
  font-size: 15px;

  font-weight: 400;
  color: #00a9ff;
  text-align: center;
  /* background: url("../../../assets/dataImage/grade_title.png") center no-repeat; */
  
background: RGBA(0, 11, 40, 1);
  z-index: 1;
}

.grade_name {
  position: absolute;
  top: 30px;
  left: 0;
  color: #00a9ff;
  width: 100%;
  height: 200px;
  /* overflow: hidden; */
  animation:  move 5s linear infinite;
  z-index: 0;
}

@keyframes move {
  from{
    top:30px;
  }
  to{
    top: -120px;
  }

  
}

.grade_name_item {
  width: 100%;
  height: 22px;
  line-height: 22px;
  text-align: left;
}
</style>