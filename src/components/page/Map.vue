<template>
  <div class="map">
    <div class="mapBtn mapBtn1" :class="active==1?'active':''" @click="change(1)">崇明县</div>
    <div class="mapBtn mapBtn2" :class="active==2?'active':''" @click="change(2)">宝山区</div>
    <div class="mapBtn mapBtn3" :class="active==3?'active':''" @click="change(3)">嘉定区</div>
    <div class="mapBtn mapBtn4" :class="active==4?'active':''" @click="change(4)">闸北区</div>
    <div class="mapBtn mapBtn5" :class="active==5?'active':''" @click="change(5)">杨浦区</div>
    <div class="mapBtn mapBtn6" :class="active==6?'active':''" @click="change(6)">虹口区</div>
    <div class="mapBtn mapBtn7" :class="active==7?'active':''" @click="change(7)">普陀区</div>
    <div class="mapBtn mapBtn8" :class="active==8?'active':''" @click="change(8)">青浦区</div>
    <div class="mapBtn mapBtn9" :class="active==9?'active':''" @click="change(9)">长宁区</div>
    <div class="mapBtn mapBtn10" :class="active==10?'active':''" @click="change(10)">静安区</div>
    <div class="mapBtn mapBtn11" :class="active==11?'active':''" @click="change(11)">黄浦区</div>
    <div class="mapBtn mapBtn12" :class="active==12?'active':''" @click="change(12)">浦东新区</div>
    <div class="mapBtn mapBtn13" :class="active==13?'active':''" @click="change(13)">徐汇区</div>
    <div class="mapBtn mapBtn14" :class="active==14?'active':''" @click="change(14)">卢湾区</div>
    <div class="mapBtn mapBtn15" :class="active==15?'active':''" @click="change(15)">闵行区</div>
    <div class="mapBtn mapBtn16" :class="active==16?'active':''" @click="change(16)">松江区</div>
    <div class="mapBtn mapBtn17" :class="active==17?'active':''" @click="change(17)">奉贤区</div>
    <div class="mapBtn mapBtn18" :class="active==18?'active':''" @click="change(18)">金山区</div>

  </div>
</template>
<script>
export default {
  name: "Map",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change(index){
      this.active=index;
      console.log(index)

    }
  },
};
</script>
<style scoped>
.map {
  position: absolute;
  width: 800px;
  height: 640px;
  left: 0px;
  top: 0;
  background: url("../../assets/dataImage/map.png") center no-repeat;
  background-size: contain;
}
.mapBtn {
  position: absolute;
  height: 20px;
  font-size: 14px;
  padding-left: 10px;
  line-height: 20px;
  color: rgba(0, 252, 232, 1);
}

.active {
  color: red;
}

.mapBtn1 {
  left: 436px;
  top: 129px;
}
.mapBtn2 {
  left: 335px;
  top: 184px;
}
.mapBtn3 {
  left: 252px;
  top: 214px;
}
.mapBtn4 {
  left: 304px;
  top: 247px;
}

.mapBtn5 {
  left: 402px;
  top: 244px;
}
.mapBtn6 {
  left: 368px;
  top: 273px;
}
.mapBtn7 {
  left: 299px;
  top: 312px;
}
.mapBtn8 {
  left: 201px;
  top: 336px;
}
.mapBtn9 {
  left: 298px;
  top: 346px;
}
.mapBtn10 {
  left: 358px;
  top: 334px;
}
.mapBtn11 {
  left: 413px;
  top: 313px;
}
.mapBtn12 {
  left: 485px;
  top: 352px;
}
.mapBtn13 {
  left: 360px;
  top: 378px;
}
.mapBtn14 {
  left: 439px;
  top: 401px;
}
.mapBtn15 {
  left: 331px;
  top: 412px;
}
.mapBtn16 {
  left: 248px;
  top: 422px;
}
.mapBtn17 {
  left: 432px;
  top: 464px;
}
.mapBtn18 {
  left: 296px;
  top: 505px;
}
</style>