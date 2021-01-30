<template>
  <div class="echartLine">
    <z-data-head
      class="dataHead"
      :data-head-ch="echartLineTitle.CN"
      :data-head-en="echartLineTitle.EN"
    ></z-data-head>
    <v-echarts
      class="vEcharts"
      chart-type="line"
      :show-line-chart-area-shadow="showLineChartAreaShadow"
      :grid-height="gridHeight"
      :data-from-father="lineChartData_obj"
    ></v-echarts>
  </div>
</template>

<script>
import Echarts from "./tools/Echarts";
import zDataHead from "./tools/DataHead";
export default {
  name: "EchartLine",
  components: {
    vEcharts: Echarts,
    zDataHead,
  },
  props: {
    echartLineTitle: {
      type: Object,
      default: function () {
        return {
          CN: "*未命名图表",
          EN: "*UNNAMED TABLE",
        };
      },
    },
    showLineChartAreaShadow: {
      type: Number,
      default: 1,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    gridHeight: {
      //图标内部的高度，如果不显示图表自带标题的，需要调高
      type: String,
      default: "60%",
    },
    lineChartData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    lineChartDataKey: {
      type: String,
      default: "",
    },
    lineChartDataValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    lineChartData_obj() {
      let keys = [];
      let values = [];
      this.lineChartData.map((item) => {
        keys.push(item[this.lineChartDataKey]);
        values.push(item[this.lineChartDataValue]);
      });
      console.log(JSON.stringify({ keys, values }));
      return { keys, values };
    },
  },
};
</script>

<style scoped>
.echartLine {
  /* background: rgba(0, 254, 254, 0.1); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px; */
  box-sizing: border-box;
}
.vEcharts {
  position: absolute;
  width: 95%;
  height: 90%;
}
</style>
