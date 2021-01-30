<template>
  <div class="about">
    <!-- <div class="title">成功量</div> -->
 <Title text='成功量  Successful Dialing' class="about_title"></Title>
    <div class="left">
      <SuccessItem v-for="item in cityLeft" :key="item.name" :city='item.name' :widthL='item.num' :position='1'
        :background='item.color'></SuccessItem>
    </div>
    <div class="right">
      <SuccessItem v-for="item in cityRight" :key="item.name" :city='item.name' :widthL='item.num' :position='2'
        :background='item.color'></SuccessItem>
    </div>
  </div>
</template>
<script>
import SuccessItem from "@/components/page/success/successCom/SuccessItem";
import Title from "@/components/page/title/Title";
export default {
  name: "Success",
  created() {
    // require(`../assets/css/00${this.$route.params.id}.css`);
  },
  data() {
    return {
      cityLeft: [
        { name: "浦东新区", num: 500, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:28 },
        { name: "奉贤区", num: 50, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:48 },
        { name: "普陀区", num: 50, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)" ,top:68},

        { name: "长宁区", num: 500, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:88 },
        { name: "徐汇区", num: 50, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:108 },
        { name: "黄浦区", num: 500, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:128 },
        { name: "虹口区", num: 5000, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:140 },
        { name: "金山区", num: 500, color: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)",top:168 }
      ],
      cityRight: [
        { name: "静安区", num: 60, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "松江区", num: 300, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "闵行区", num: 1000, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "杨浦区", num: 60, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "宝山区", num: 300, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "崇明区", num: 1000, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "嘉定区", num: 60, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"},
        { name: "青浦区", num: 300, color: " linear-gradient(90deg, #4A66ED 0%, #00CBD8 99%)"}
      ]
    };
  },
  components: {
    SuccessItem,
      Title
  }
};
</script>

<style scoped>
.about {
  position: absolute;
  top: 320px;
  width: 100%;
  height: 290px;
  left: 52px;
}

.left {
  position: absolute;
  left: -48px;
  /* top: 50px; */
 
}
.right {
  position: absolute;
  right: 48px;
  /* top: 50px; */
}
.about_title{
  width: 540px;
}
</style>
