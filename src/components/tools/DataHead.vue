<template>
    <div class="dataHead" :style="dataHead_style">
        <span class="dataHead_CN" :style="dataHead_CN_style">{{dataHeadCh}}</span>
        <span class="dataHead_EN" :style="dataHead_EN_style">{{dataHeadEn}}</span>
    </div>
</template>
<script>
export default {
    name:'DataHead',
    props:{
        dataHeadCh:{
            type:String,
            default:"*未命名图标"
        },
        dataHeadEn:{
            type:String,
            default:"*未命名图标"
        },
        color:{
            type:String,
            default:"#005BC9"
        },
        height:{
            type:String,
            default:"40px"
        }
        
    },
    data() {
        return {
            dataHead_style:{
                height:this.height,
                lineHeight:this.height
            },
            dataHead_CN_style:{
                width:"auto",
                color:this.color,
                paddingLeft:"15px",
                fontSize:"20px"
            },
            dataHead_EN_style:{
                width:"auto",
                color:this.color,
                paddingLeft:"15px",
                fontSize:"15px"
            }
        }
    },
}
</script>
<style lang="less" scope>
    .dataHead{
        position: absolute;
        top: 20px;
        width:calc(~'100% - 40px');
        background: linear-gradient(rgba(0,159,241, 0.4) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0,159,241, 0.4) 100%);
    }
</style>