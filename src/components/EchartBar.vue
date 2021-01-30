<template>
  <div class="echartBar">
    <z-data-head
      class="dataHead"
      :data-head-ch="echartBarTitle.CN"
      :data-head-en="echartBarTitle.EN"
    ></z-data-head>
    <v-chart-bar
      class="vEcharts"
      chart-type="bar"
      :data-from-father="barChartData_obj"
    ></v-chart-bar>
  </div>
</template>

<script>
import Echarts from "./tools/Echarts";
import zDataHead from "./tools/DataHead";

export default {
  name: "EchartBar",
  components: {
    vChartBar: Echarts,
    zDataHead,
  },
  props: {
    echartBarTitle: {
      type: Object,
      default: function () {
        return {
          CN: "*未命名图表",
          EN: "*UNNAMED TABLE",
        };
      },
    },
    barChartData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    barChartDataKey: {
      type: String,
      default: "",
    },
    barChartDataValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    barChartData_obj() {
      let keys = [];
      let values = [];
      this.barChartData.map((item) => {
        keys.push(item[this.barChartDataKey]);
        values.push(item[this.barChartDataValue]);
      });
      return { keys, values };
    },
  },
};
</script>

<style lang="less" scoped>
.echartBar {
//   background: rgba(0, 254, 254, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
  .vEcharts {
    position: absolute;
    width: 95%;
    height: 100%;
  }
}
</style>
