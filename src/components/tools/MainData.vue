<template>
    <div class="mainData">
        <span class="dataNumber">{{dataNumberUse}}</span>
        <span class="dataName">{{dataName}}</span>
    </div>
</template>

<script>
    export default {
        name: "MainData",
        props:{
            dataNumber:{
                type:Array,
                default:function () {
                    return [0]
                }
            },
            dataName:{
                type:String,
                default:"*未命名数据"
            }
        },
        data(){
            return{
                
            }
        },
        computed:{
            dataNumberUse(){  //取包括小数点在内的前六位
                if (this.dataNumber[0].toString().length <= 6) {
                    return this.dataNumber[0].toString();
                }else{
                    return this.dataNumber[0].toString().substr(0,6);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @pa: absolute;
    @pr: relative;
    @rgbaBaseC: rgba(0, 81, 232, 0.4);
    @baseC: #00A9FF;

    .triangle(@_) {
        content: "";
        position: @pa;
        top: 50%;
        margin-top: -10px;
        width: 0;
        height: 0;
        border-width: 10px;
        border-style: solid;
    }

    .triangle(left) {
        left: 0;
        border-color: transparent transparent transparent @rgbaBaseC;
    }

    .triangle(right) {
        right: 0;
        border-color: transparent @rgbaBaseC transparent transparent;
    }

    .mainData {
        position: relative;
        width: 171px;
        height: 72px;
        background: linear-gradient(rgba(0, 66, 232, 0.4) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 81, 232, 0.4) 100%);
        box-sizing: border-box;
        &::before {
            .triangle(left)
        };
        &::after {
            .triangle(right)
        };
        .dataNumber{
            display: block;
            width: 100%;
            height: auto;
            color: @baseC;
            font-weight: bolder;
            font-size: 38px;
            text-align: center;
        }
        .dataName{
            display: block;
            width: 100%;
            color: #0067E4;
            font-size: 15px;
            text-align: center;
        }
    }
</style>
