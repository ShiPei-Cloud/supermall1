<template>
  <div class="yuE">
    <!-- <div class="title">涕延后收入</div> -->
    <Title text='贷款余额 Loan Balance' class="title"></Title>
    <YuEItem></YuEItem>
 
  </div>

</template>
<script>

import YuEItem from "@/components/page/yuE/yuECom/YuEItem";
import Title from "@/components/page/title/Title";


export default {
  name: "YuE",
  data() {
    return {};
  },
  components:{
      YuEItem,
      Title
  }
};
</script>
<style scoped>
.yuE {
  position: absolute;
  top: 320px;
  left: 52px;
  width: 620px;
  height: 260px;
  /* border: 1px solid red; */
}

.title{
      width: 600px;
}
</style>