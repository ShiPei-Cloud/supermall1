<template>
  <div class="cate">
   
    <Title text='年累计进件数 Years Accumulative'></Title>
    <JinJianShuItem v-for="(item,index) in city" :key="item.name" :city='item.name' :height='item.num' :index='index'
      class="his">
    </JinJianShuItem>
  </div>
</template>
<script>
import JinJianShuItem from "@/components/page/jinJianShu/jinJianShuCom/JinJianShuItem";
import Title from "@/components/page/title/Title";
export default {
  name: "JinJianShu",
  data() {
    return {
      city: [
        { name: "浦东新区", num: 500, color: "#FFFFCC" },
        { name: "奉贤区", num: 50, color: "#CCFFFF" },
        { name: "普陀区", num: 50, color: "#CCFFFF" },
        { name: "长宁区", num: 500, color: "#CCFF99" },
        { name: "徐汇区", num: 50, color: "#CCFF99" },
        { name: "黄浦区", num: 500, color: "#CCFF99" },
        { name: "虹口区", num: 5000, color: "#CCFF99" },
        { name: "金山区", num: 500, color: "#CCFF99" },
        { name: "静安区", num: 60, color: "#99CCCC" },
        { name: "松江区", num: 300, color: "#99CCFF" },
        { name: "闵行区", num: 1000, color: "#666699" },
        { name: "杨浦区", num: 60, color: "#99CCCC" },
        { name: "宝山区", num: 300, color: "#99CCFF" },
        { name: "崇明区", num: 1000, color: "#666699" },
        { name: "嘉定区", num: 60, color: "#99CCCC" },
        { name: "青浦区", num: 300, color: "#99CCFF" }
      ]
    };
  },
  components: {
    JinJianShuItem,
    Title
  }
};
</script>
<style scoped>
.cate {
  position: absolute;
  top: 25px;
  width: 640px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .title {
  position: absolute;
  top: -80px;
  left: -16px;
  color: aliceblue;
  width: 640px;
  height: 32px;
  background: #00ffff;
} */
.his {
  flex: 1;
}
</style>