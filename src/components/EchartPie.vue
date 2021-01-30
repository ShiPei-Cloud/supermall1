<template>
  <div class="echartPie">
    <z-data-head
      class="dataHead"
      :data-head-ch="echartPieTitle.CN"
      :data-head-en="echartPieTitle.EN"
    ></z-data-head>
    <v-chart-pie
      class="vEcharts"
      chart-type="pie"
      :pie-chart-config="pieChartConfig"
      :data-from-father="pieChartData_obj"
    ></v-chart-pie>
  </div>
</template>

<script>
import Echarts from "./tools/Echarts";
import zDataHead from "./tools/DataHead";
export default {
  name: "EchartPie",
  components: {
    vChartPie: Echarts,
    zDataHead,
  },
  props: {
    echartPieTitle: {
      type: Object,
      default: function () {
        return {
          CN: "*未命名图表",
          EN: "*UNNAMED TABLE",
        };
      },
    },
    pieChartConfig: {
      type: Object,
      default: function () {
        return {
          legend: {
            height: "70%",
            width: "100%",
            left: "left",
            top: "25%",
          },
          series: {
            radius: [40, 80],
            center: ["80%", "45%"],
          },
          itemStyle: {
            borderWidth: 3, //设置border的宽度有多大
            borderColor: "#042132",
          },
        };
      },
    },
    pieChartData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    pieChartDataKey: {
      type: String,
      default: "",
    },
    pieChartDataValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    pieChartData_obj() {
      let keys = [];
      let values = [];
      this.pieChartData.map((item) => {
        keys.push(item[this.pieChartDataKey]);
        values.push({
          value: item[this.pieChartDataValue],
          name: item[this.pieChartDataKey],
        });
      });
      return { keys, values };
    },
  },
};
</script>

<style lang="less" scoped>
.echartPie {
//   background: rgba(0, 254, 254, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  .vEcharts {
    position: absolute;
    width: 95%;
    height: 90%;
  }
}
</style>
