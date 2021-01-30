<template>
    <div class="barChart">
        <span class="echartTitle barChartTitle">
            {{barChartTitle}}
        </span>
        <v-progress-bar
                v-for="item in barChartDataUse"
                :key="item.houseStyle"
                :progress-title="item.name"
                :progressNumber="item.count"
                number-color="#00A9FF"
                title-color="#00A9FF"
                title-align="center"
                :progress-height=20
                :progress-inner-height=10
                :max-number="barWidthAfterComputed"
                progress-border-color="#00A9FF"
                progress-inner-color="linear-gradient(90deg, #4968ED, #00A9FF)"
        ></v-progress-bar>
    </div>
</template>

<script>
    import ProgressBar from "./tools/ProgressBar";

    export default {
        name: "BarChart",
        components: {
            vProgressBar: ProgressBar
        },
        props: {
            barChartData: {
                type: Array,
                default: function () {
                    return []
                }
            },
            barChartTitle:{
                type:String,
                default: "*未命名图表"
            }
        },
        data() {
            return {
                barChartDataUse_data: null
            }
        },
        computed: {
            barChartDataUse: function () {
                return this.barChartData
            },
            barWidthAfterComputed: function () {
                var barWidthBeforeComputed = this.barChartData
                let dataNumberArr = [];
                barWidthBeforeComputed.map((item)=>{
                    dataNumberArr.push(item.count)
                });
                return this.bubble(dataNumberArr); //最大值
            }
        },
        mounted() {
            this.barChartDataUse_data = this.barChartDataUse;
        },
        methods:{
            bubble:function (arr) {  //冒泡
                for (let i = 0 ; i < arr.length; i++){
                    for (let j = i+1 ; j < arr.length; j++){
                        if (arr[i] < arr[j]){
                            let mid = arr[i];
                            arr[i] = arr[j];
                            arr[j] = mid;
                        }
                    }
                }
                return arr[0];
            }
        }
    }
</script>

<style scoped>
    .barChart {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: rgba(0, 152, 254, 0.1);
        padding: 10px;
        box-sizing: border-box;
    }

    .barChartTitle{
        color: #00A9FF;
     }
</style>
