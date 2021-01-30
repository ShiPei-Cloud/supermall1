<template>
  <div id="myChart3" :style="{width: '600px', height: '280px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "YuEItem",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart3 = echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart3.setOption({
        xAxis: {
          type: "category",
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
          }
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
              type: "dashed"
            }
          }
        },
        series: [
          {
            data: [
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300
            ],
            type: "line",
            symbol: "circle", //设定为实心点  类型 ： 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbolSize: 6, //圆点大小
            itemStyle: {
              normal: {
                color: "#00FF00", //圆点颜色
                borderColor: "#00FF00",
                // borderWidth: 8,

                lineStyle: {
                  //折线颜色大小
                  type: "solid", //'dotted'虚线 'solid'实线
                  color: "#00FF00",
                  width: 1
                  //   borderColor: "#faa12f" //拐点边框颜色
                }
              }
            },
            // areaStyle: {}
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "RGBA(0, 255, 0, 0.8)"
                  
                },
                {
                  offset: 1,
                  color: "RGBA(0, 255, 0, 0.01)"
                }
              ])
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
#myChart3 {
  position: absolute;
  top: 4px;
  left: 14px;
}
</style>
