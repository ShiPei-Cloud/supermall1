<template>
  <div id="myChart0" :style="{width: '700px', height: '270px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "EachersZheXianTu",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart0"));
      // 绘制图表
      myChart.setOption({
        // title: { text: "在Vue中使用echarts", textStyle: { color: "#00FFFF" } },
        tooltip: {},
        //  backgroundColor: '#12cf96',
        xAxis: {
          data: [
            "奉贤区",
            "普陀区",
            "长宁区",
            "徐汇区",
            "黄浦区",
            "虹口区",
            "金山区",
            "静安区",
            "松江区",
            "闵行区",
            "杨浦区",
            "宝山区",
            "崇明区",
            "嘉定区",
            "青浦区"
          ],
          axisLine: {
            lineStyle: {
              color: "#05BCF0"
            }
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split("").join("\n");
            }
          },
        //   splitLine: {
        //     // show: true,
        //     lineStyle: {
        //       color: ["#04BDFF"],
        //       type:'dashed'
        //     }
        //   }
         
        },

        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#05BCF0"
            }
          },
           splitLine: {
            // show: true,
            lineStyle: {
              color: ["#04BDFF"],
              type:'dashed'
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            
            data: [
              5,
              20,
              36,
              10,
              10,
              300,
              5,
              20,
              36,
              10,
              10,
              20,
              5,
              20,
              36,
              10,
              10,
              20
            ],
            barWidth: 10,
            itemStyle: {
              normal: {
                // color: "linear-gradient(0deg, #0080FF 0%, #05BEF0 100%)",
                color:'#05B8F2'
                
                
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart0{
    position: absolute;
    top: 30px;
    left: -20px;
}
</style>
