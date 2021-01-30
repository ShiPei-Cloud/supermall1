<template>
    <div class="progressBar"
         :progressTitle="progressTitle"
         :progressHeight="progressHeight"
         :titleDirection="titleDirection"
         :style="progressBarStyle"
    >
        <span class="progressBar_title"
              :titleColor="titleColor"
              :titleAlign="titleAlign"
              :style="progressBarTitleStyle"
        >
            {{progressTitle}}
        </span>
        <div class="progressBar_border"
             :style="progressBarBorderStyle"
        >
            <transition
            >
                <div class="progressBar_inner"
                     :progressInnerHeight="progressInnerHeight"
                     :style="progressBarInnerStyle"
                     :ref="progressBarInnerRefName"
                >
                </div>
            </transition>
        </div>
        <span class="progressBar_number"
              :numberColor="numberColor"
              :numberAlign="numberAlign"
              :style="progressBarNumberStyle"
        >
            {{progressNumber}}
        </span>
    </div>
</template>

<script>
    import animations from 'create-keyframe-animation'

    export default {
        name: "ProgressBar",
        props: {
            progressTitle: { //标题
                type: String,
                default: ''
            },
            progressHeight: { //总体高度
                type: Number,
                default: 20
            },
            progressInnerHeight: { //内部进度条高度
                type: Number,
                default: 0
            },
            progressBorderColor: { //外部边框颜色
                type: String,
                default: "#00FFFF"
            },
            progressInnerColor: { //内部进度条的颜色
                type: String,
                default: "#00FFFF"
            },
            titleDirection: { //标题的显示位置,left或right
                type: String,
                default: "left"
            },
            titleColor: { //标题的颜色
                type: String,
                default: "#FFFFFF"
            },
            titleAlign: { //标题居中
                type: String,
                default: "center"
            },
            progressNumber: { //数量
                type: Number,
                default: 0
            },
            numberColor: { //数量颜色
                type: String,
                default: "#FFFFFF"
            },
            numberAlign: { //数量居中
                type: String,
                default: "center"
            },
            maxNumber: { //最大值
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                progressBarStyle: { //总体样式
                    height: this.progressHeight + "px",
                    display: "flex",
                    flexDirection: this.titleDirection === "right" ? "row-reverse" : "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                },
                progressBarBorderStyle: { //边框样式
                    padding: (this.progressInnerHeight === 0 ? 0 : ((this.progressHeight - this.progressInnerHeight) / 2)) + "px",
                    borderRadius: this.progressHeight / 2 + "px",
                    borderColor: this.progressBorderColor
                },
                progressBarInnerStyle: { //内部进度条样式
                    borderRadius: this.progressInnerHeight / 2 + "px",
                    background: this.progressInnerColor,
                },
                progressBarTitleStyle: { //进度条标题样式
                    color: this.titleColor,
                    textAlign: this.titleAlign === "left" ? "left" : (this.titleAlign === "right" ? "right" : "center"),
                    lineHeight: this.progressHeight + "px"
                },
                progressBarNumberStyle: { //数量样式
                    color: this.numberColor,
                    textAlign: this.numberAlign === "left" ? "left" : (this.numberAlign === "right" ? "right" : "center"),
                    lineHeight: this.progressHeight + "px"
                },
                animateName: "progressBarAnimateName_" + (new Date()).getTime(),
                progressBarInnerRefName: "progressBarInnerRefName_" + (new Date()).getTime()
            }
        },
        methods: {
            innerBarWidthAfterComputed: function () {
                return (this.progressNumber / this.maxNumber) * 100 + "%"
            },
        },
        mounted(){
            if(animations.hasAnimation(this.animateName)){
                this.animateName = "progressBarAnimateName_" + (new Date()).getTime(); //防止重名动画
            }
            let anim = {
                0: {
                    width: 0
                },
                100: {
                    width: this.innerBarWidthAfterComputed()
                }
            };
            animations.registerAnimation({
                name: this.animateName, //动画名称
                animation: anim, //动画运行参数
                presets: { //动画预选项
                    duration: 1000, //持续时间
                    easing: "linear", //动画模式
                }
            });
            // 运行动画
            animations.runAnimation(this.$refs[this.progressBarInnerRefName], this.animateName);
        }
    }
</script>

<style scoped>
    .progressBar {
        width: 100%;
    }

    .progressBar_title {
        width: 15%;
        font-size: 12px;
    }

    .progressBar_border {
        width: 75%;
        height: 100%;
        border: blue solid 1px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .progressBar_inner {
        background-color: blue;
        height: inherit;
        width: 0;
    }

    .progressBar_number {
        width: 10%;
        font-size: 12px;
    }
</style>
