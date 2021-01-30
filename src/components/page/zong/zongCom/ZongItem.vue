<template>
  <div id="myChart4" :style="{width: '600px', height: '250px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "ZengSuItem",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart4 = echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart4.setOption({
        legend: {
          // top: "bottom",
          orient: "vertical",
          x: "left", //可设定图例在左、右、居中
          y: "center", //可设定图例在上、下、居中
          padding: [44, 50, 0, 0],
        
           textStyle: {
            //图例文字的样式
            color: "rgba(0, 169, 255, 1)", //文字颜色
            fontSize: '12px' ,//文字大小
              borderRadius:'50%',
          }
        
        },
        color: ["#3884FC", "#FFB769", "#F9E264", "#FFB769", "#F5626E","#FBA998", "#BB60B1", "#AF87FE", "#B034E9", "#4F17CD","#171CCD", "#023A92", "#0F86B7", "#049CB1", "#26CCD8","#9DDDFA"], //手动设置每个图例的颜色

        toolbox: {
          //   show: true,
          //   feature: {
          //     mark: { show: true },
          //     dataView: { show: true, readOnly: false },
          //     restore: { show: true },
          //     saveAsImage: { show: true }
          //   }
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [40, 80],
            center: ["55%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
              
              
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                 textStyle: {
            //图例文字的样式
            color: "rgba(0, 169, 255, 1)", //文字颜色
            fontSize: '12px' //文字大小
          }
              }
            },

            data: [
              { value: 40, name: "浦东新区" },
              { value: 38, name: "奉贤区" },
              { value: 32, name: "普陀区" },
              { value: 30, name: "长宁区" },
              { value: 28, name: "徐汇区" },
              { value: 26, name: "黄浦区" },
              { value: 22, name: "虹口区" },
              { value: 18, name: "金山区" },
              { value: 40, name: "静安区" },
              { value: 38, name: "松江区" },
              { value: 32, name: "闵行区" },
              { value: 30, name: "杨浦区" },
              { value: 28, name: "宝山区" },
              { value: 26, name: "崇明区" },
              { value: 22, name: "嘉定区" },
              { value: 18, name: "青浦区" },
              { value: 18, name: "青浦区" },
              { value: 18, name: "闸北区" },

            
              { value: 18, name: "卢湾区" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart4 {
  position: absolute;
  top: 25px;
  left: 60px;
}
</style>
