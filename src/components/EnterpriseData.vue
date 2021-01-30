<template>
  <div class="enterpriseData">
    <div class="left_title"></div>
    <z-map></z-map>
    <div class="mapData">
      <z-main-data
        class="mapData-items"
        v-for="item in mapData"
        :key="item.name"
        :data-name="item.name"
        :data-number="item.number"
      ></z-main-data>
    </div>
    <div class="barsData">
      <div class="barDataInner">
        <z-bar-chart
          class="barChart-items"
          v-for="item in barchartdata"
          :key="item.name"
          :bar-chart-data="item.data"
          :bar-chart-title="item.name"
        ></z-bar-chart>
      </div>
    </div>
    <div class="visitsInRecentYear">
      <z-line-chart
        class="lineChart-items"
        :echart-line-title="echartLineTitle"
        :line-chart-data="visitsInRecentYear"
        line-chart-data-key="month"
        line-chart-data-value="number"
      >
      </z-line-chart>
    </div>
    <div class="userDistribution">
      <z-bar-echart
        class="barChart-items"
        :echart-bar-title="echartBarTitle"
        :bar-chart-data="userDistribution"
        bar-chart-data-key="district"
        bar-chart-data-value="number"
      >
      </z-bar-echart>
    </div>
    <div class="applicationData"></div>

    <div class="templateDistribution">
      <z-pie-chart
        class="pieChart-items"
        id="templateDistributionHead"
        :echart-pie-title="echartPieTitle"
        :pie-chart-config="pieChartConfig"
        :pie-chart-data="templateDistribution"
        pie-chart-data-key="district"
        pie-chart-data-value="number"
      >
      </z-pie-chart>
    </div>
    <div class="starTemplate">
      <z-data-head
        class="dataHead"
        id="starTemplateHead"
        :data-head-ch="starTemplateTitle.CN"
        :data-head-en="starTemplateTitle.EN"
      ></z-data-head>
      123456789
    </div>
  </div>
</template>

<script>
import zMap from "./tools/Map";
import zMainData from "./tools/MainData";
import zBarChart from "./BarChart";
import zLineChart from "./EchartLine";
import zBarEchart from "./EchartBar";
import zPieChart from "./EchartPie";
import zDataHead from "./tools/DataHead";
export default {
  name: "EnterpriseData",
  components: {
    zMap,
    zMainData,
    zBarChart,
    zLineChart,
    zBarEchart,
    zPieChart,
    zDataHead,
  },
  data() {
    return {
      mapData: [
        {
          name: "用户数",
          number: [12717],
        },
        {
          name: "模板数",
          number: [1758],
        },
        {
          name: "访问量",
          number: [760679],
        },
      ],
      barchartdata: [
        {
          name: "用户分布",
          data: [
            {
              name: "网点",
              count: 801,
            },
            {
              name: "二级行",
              count: 1575,
            },
            {
              name: "部分行",
              count: 341,
            },
          ],
        },
        {
          name: "模板分布",
          data: [
            {
              name: "总行模板",
              count: 905,
            },
            {
              name: "分行模板",
              count: 853,
            },
          ],
        },
        {
          name: "访问量分布",
          data: [
            {
              name: "总行模板",
              count: 270445,
            },
            {
              name: "分行模板",
              count: 301177,
            },
            {
              name: "网点负责人",
              count: 189057,
            },
          ],
        },
      ],
      visitsInRecentYear: [
        {
          month: "1月",
          number: 9010,
        },
        {
          month: "2月",
          number: 50100,
        },
        {
          month: "3月",
          number: 21110,
        },
        {
          month: "4月",
          number: 32010,
        },
        {
          month: "5月",
          number: 45012,
        },
        {
          month: "6月",
          number: 35010,
        },
        {
          month: "7月",
          number: 11100,
        },
        {
          month: "8月",
          number: 34100,
        },
        {
          month: "9月",
          number: 25000,
        },
      ],
      userDistribution: [
        {
          district: "浦东新区",
          number: "66",
        },
        {
          district: "奉贤区",
          number: "61",
        },
        {
          district: "普陀区",
          number: "75",
        },
        {
          district: "长宁区",
          number: "61",
        },
        {
          district: "静安区",
          number: "62",
        },
        {
          district: "松江区",
          number: "60",
        },
        {
          district: "闵行区",
          number: "57",
        },
        {
          district: "青浦区",
          number: "55",
        },
        {
          district: "杨浦区",
          number: "60",
        },
        {
          district: "黄埔区",
          number: "73",
        },
        {
          district: "虹口区",
          number: "64",
        },
        {
          district: "嘉定区",
          number: "66",
        },
        {
          district: "宝山区",
          number: "71",
        },
        {
          district: "崇明区",
          number: "63",
        },
        {
          district: "徐汇区",
          number: "60",
        },
        {
          district: "金山区",
          number: "75",
        },
      ],
      templateDistribution: [
        {
          district: "浦东新区",
          number: "16",
        },
        {
          district: "奉贤区",
          number: "21",
        },
        {
          district: "普陀区",
          number: "35",
        },
        {
          district: "长宁区",
          number: "41",
        },
        {
          district: "静安区",
          number: "52",
        },
        {
          district: "松江区",
          number: "60",
        },
        {
          district: "闵行区",
          number: "77",
        },
        {
          district: "青浦区",
          number: "85",
        },
        {
          district: "杨浦区",
          number: "90",
        },
        {
          district: "黄埔区",
          number: "103",
        },
        {
          district: "虹口区",
          number: "114",
        },
        {
          district: "嘉定区",
          number: "126",
        },
        {
          district: "宝山区",
          number: "131",
        },
        {
          district: "崇明区",
          number: "143",
        },
        {
          district: "徐汇区",
          number: "150",
        },
        {
          district: "金山区",
          number: "165",
        },
      ],
      pieChartConfig: {
        legend: {
          height: "20%",
          width: "100%",
          left: "center",
          top: "bottom",
        },
        series: {
          radius: [80, 180],
          center: ["50%", "40%"],
        },
        itemStyle: {
          borderWidth: 6, //设置border的宽度有多大
          borderColor: "#042132",
        },
      },
      echartLineTitle:{"CN":'近一年访问量',"EN":'Visits In Recent Year'},
      echartBarTitle:{"CN":'用户分布',"EN":'User Distribution'},
      starTemplateTitle:{"CN":'明星模板',"EN":'Star Template'},
      echartPieTitle:{"CN":'模板分布',"EN":'Template Distribution'}
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@font-face {
  font-family: mFont;
  src: url("../assets/font/Furore-2.otf");
}

.bg(@url,@size:100%100%) {
  background: @url no-repeat;
  background-size: @size;
}

.ltwh(@l,@t,@w,@h) {
  //left top width height
  left: @l;
  top: @t;
  width: @w;
  height: @h;
}

.left_title {
  position: absolute;
  .ltwh(0px,0px,90px,640px);
  .bg(url("../assets/img/components/EnterpriseData/title.png"));
}

.mapData {
  position: absolute;
  .ltwh(570px, 42px, 171px, 266px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.barsData {
  position: absolute;
  .ltwh(748px, 2px, 591px, 630px);
  .bg(url("../assets/img/components/EnterpriseData/barChart/barChartBorder.png"));

  .barDataInner {
    position: absolute;
    .ltwh(40px, 53px, 512px, 553px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .barChart-items {
      width: 512px;
      height: 164px;
    }
  }
}

.visitsInRecentYear {
  position: absolute;
  .ltwh(1348px, 4px, 661px, 314px);
  .bg(url("../assets/img/components/EnterpriseData/lineChart/lineChartBorder.png"));

  .dataHead {
    position: absolute;
    .ltwh(0, 0, 100%, 40px);
  }

  .lineChart-items {
    width: 100%;
    height: 100%;
  }
}

.userDistribution {
  position: absolute;
  .ltwh(1348px, 327px, 1301px, 308px);
  .bg(url("../assets/img/components/EnterpriseData/barChart2/barChartBorder2.png"));

  .barChart-items {
    width: 100%;
    height: 100%;
  }
}

.applicationData {
  position: absolute;
  .ltwh(2013px, 4px, 636px, 314px);
  .bg(url("../assets/img/components/EnterpriseData/applicationData/applicationDataBorder.png"));
}

.templateDistribution {
  position: absolute;
  .ltwh(2658px, 4px, 522px, 630px);
  .bg(url("../assets/img/components/EnterpriseData/templateDistribution/templateDistributionBorder.png"));

  .pieChart-items {
    width: 100%;
    height: 100%;
  }
}

.starTemplate {
  position: absolute;
  .ltwh(3189px, 4px, 380px, 631px);
  .bg(url("../assets/img/components/EnterpriseData/starTemplate/starTemplateBorder.png"));
  font-family: mFont;

  #starTemplateHead{ //非echarts图标的标题需要自行左移20px
    left: 20px;
  }
}
</style>
