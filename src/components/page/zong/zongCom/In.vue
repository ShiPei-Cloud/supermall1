<template>
  <div id="myChart5" :style="{width: '50px', height: '50px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "In",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart5 = echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      myChart5.setOption({
        legend: {
          // top: "bottom"
          show: false
        },
        toolbox: {},
        color: ["#3884FC", "#FFB769", "#F9E264", "#FFB769", "#F5626E","#FBA998", "#BB60B1", "#AF87FE", "#B034E9", "#4F17CD","#171CCD", "#023A92", "#0F86B7", "#049CB1", "#26CCD8","#9DDDFA"], //手动设置每个图例的颜色

        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [10, 20],
            center: ["50%", "50%"],
            label: {
              show: false,
              position: "center"
            },

            itemStyle: {},
            data: [
              { value: 10, name: "浦东新区" },
              { value: 10, name: "奉贤区" },
              { value: 10, name: "普陀区" },
              { value: 10, name: "长宁区" },
              { value: 10, name: "徐汇区" },
              { value: 10, name: "黄浦区" },
              { value: 10, name: "虹口区" },
              { value: 10, name: "金山区" },
              { value: 10, name: "静安区" },
              { value: 10, name: "松江区" },
              { value: 10, name: "闵行区" },
              { value: 10, name: "杨浦区" },
              { value: 10, name: "宝山区" },
              { value: 10, name: "崇明区" },
              { value: 10, name: "嘉定区" },
              { value: 10, name: "青浦区" },
              { value: 10, name: "青浦区" },
              { value: 10, name: "闸北区" },

              { value: 10, name: "卢湾区" }
            ]
            // emphasis: {
            //   label: {
            //     show: false,
            //     textStyle: {
            //       //图例文字的样式
            //       color: "rgba(0, 169, 255, 1)", //文字颜色
            //       fontSize: "12px" //文字大小
            //     }
            //   }
            // }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart5 {
  position: absolute;
  top: 125px;
  left: 365px;
}
</style>
