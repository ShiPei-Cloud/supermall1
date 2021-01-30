<template>
  <div id="myChart2" :style="{width: '400px', height: '250px'}"></div>
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
      let myChart2 = echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        title: {
          text: ""
        },
        tooltip: {
          position: "bottom",
          backgroundColor: "RGBA(0, 13, 46, 1)",
          padding: [
            5, // 上
            0, // 右
            5, // 下
            10 // 左
          ],
          textStyle: {
            color: "rgba(0, 169, 255, 1)"
          }
        },
        legend: {
          //   data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
          show: false
        },
        radar: {
          shape: "circle",
          name: {
            textStyle: {
              color: "#00A9FF",
              //   backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "浦东新区", max: 600 },
            { name: "奉贤区", max: 600 },
            { name: "普陀区 ", max: 600 },
            { name: "长宁区", max: 600 },
            { name: "徐汇区", max: 600 },
            { name: "黄浦区", max: 600 },
            { name: "虹口区", max: 600 },
            { name: "金山区", max: 600 },
            { name: "静安区 ", max: 600 },
            { name: "松江区", max: 600 },
            { name: "闵行区", max: 600 },
            { name: "杨浦区", max: 600 },
            { name: "宝山区", max: 600 },
            { name: "崇明区", max: 600 },
            { name: "嘉定区 ", max: 600 },
            { name: "青浦区", max: 600 },
            { name: "金山区", max: 600 },
            { name: "卢湾区", max: 600 }
          ],
          splitLine: {
            lineStyle: {
              color: ["#00A9FF"],
              type: "dashed"
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "00A9FF",
              type: "dashed"
            }
          }
        },
        //  backgroundColor: '#2c343c',

        series: [
          {
            type: "radar",
            data: [
              {
                value: [
                  500,
                  140,
                  280,
                  310,
                  420,
                  210,
                  50,
                  140,
                  280,
                  310,
                  420,
                  210,
                  280,
                  310,
                  420,
                  210,
                  200,
                  200
                ],

                name: "增速 Growth Rate"
              }
            ],
            areaStyle: {
              color: "#808615"
              //     shadowColor: "blue" ,// 圆颜色
              //   //      shadowBlur: 10
            },
            emphasis: {
              label: {
                show: false,

                textStyle: {
                  //图例文字的样式
                  color: "rgba(0, 169, 255, 1)", //文字颜色
                  fontSize: "12px" //文字大小
                }
              }
            },
            lineStyle: {
              color: "#808615",
              width: 1
            },
            itemStyle: {
              opacity: 1,
              normal: {
                //这里是重点
                color: "#808615",
                borderWidth: 1
              }
            },
            symbol: "circle",
            symbolSize: 6 //圆点大小
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart2 {
  position: absolute;
  top: 40px;
  left: -20px;
}
</style>
