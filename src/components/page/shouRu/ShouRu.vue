<template>
  <div class="about">
    <!-- <div class="title">涕延后收入</div> -->
 <Title text='递延后收入 Click Success Rate'></Title>
    <div class="left">
      <SuccessItem v-for="item in cityLeft" :key="item.name" :city='item.name' :widthL='item.num' :position='2'
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
  name: "ShouRu",
  created() {
    // require(`../assets/css/00${this.$route.params.id}.css`);
  },
  data() {
    return {
      cityLeft: [
        {
          name: "浦东新区",
          num: 500,
          color: "#3884FC",
    
        },
        {
          name: "奉贤区",
          num: 50,
          color: "#FFB769",
  
        },
        {
          name: "普陀区",
          num: 50,
          color: "#F9E264",
    
        },

        {
          name: "长宁区",
          num: 500,
          color: "#FFB769",
      
        },
        {
          name: "徐汇区",
          num: 50,
          color: "#F5626E",
         
        },
        {
          name: "黄浦区",
          num: 500,
          color: "#FBA998",
         
        },
        {
          name: "虹口区",
          num: 5000,
          color: "#BB60B1",
     
        },
        {
          name: "金山区",
          num: 500,
          color: "#AF87FE",
         
        }
      ],
      cityRight: [
        {
          name: "静安区",
          num: 60,
          color: "#B034E9",
         
        },
        {
          name: "松江区",
          num: 300,
          color: "#4F17CD",
         
        },
        {
          name: "闵行区",
          num: 1000,
          color: "#171CCD",
         
        },
        {
          name: "杨浦区",
          num: 60,
          color: "#023A92",
         
        },
        {
          name: "宝山区",
          num: 300,
          color: "#0F86B7",
         
        },
        {
          name: "崇明区",
          num: 1000,
          color: "#049CB1",
         
        },
        {
          name: "嘉定区",
          num: 60,
          color: "#26CCD8",
         
        },
        {
          name: "青浦区",
          num: 300,
          color: "#9DDDFA",
         
        }
      ]
    };
  },
  components: {
    SuccessItem,  Title
  }
};
</script>

<style scoped>
.about {
  position: absolute;
  width: 100%;
  top: 320px;
  height: 290px;
  left: 52px;;
}

/* .title {
  position: absolute;
  top: 320px;
  left: 42px;
  color: aliceblue;
  width: 640px;
  height: 32px;
  background: #00ffff;
} */
.left {
  position: absolute;
  left: 140px;
  /* top: 50px; */
}
.right {
  position: absolute;
  right: 60px;
  /* top: 50px; */
}
</style>
