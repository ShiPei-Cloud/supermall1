<template>
  <div class="histogram">
    <div class="num" :style='num_style'>{{height}}</div>
    <div class="histogram_item">
      <div class="histogram_item_one" :style="{height:heightPre}">
        <div class="histogram_item_content"></div>
      </div>
    </div>
    <div class="text">{{city}}</div>
  </div>
</template>
<script>
export default {
  name: "JinJianShuItem",
  data() {
    return {
      heightL: this.height,
      num_style: {}
    };
  },
  props: {
    city: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 100
    },
    index: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    if (this.index % 2 === 0) {
      this.num_style={
        top:"-30px"
      }
    } else {
      this.num_style={
        top:"-45px"
      }
    }
  },

  computed: {
    heightPre() {
      return (this.heightL * 100) / (this.heightL + 20) + "%";
    }
  }
};
</script>
<style scoped>
.histogram {
  position: relative;
  width: 14px;
  height: 170px;
  /* background: red; */
  /* left: 200px; */
}

.num {
  position: absolute;
  /* top: -25px; */
  left: -7px;
  width: 30px;
  height: 20px;
  /* background: red; */
  line-height: 20px;
  text-align: center;
  color: #018efe;
}

.histogram_item {
  position: absolute;
  width: 14px;
  height: 137px;

  background: #018efe;
  /* bottom: 100px; */
  left: 0;
}

.histogram_item_one {
  position: absolute;
  /* background: blue; */
  width: 100%;
  /* height: 300px; */
  left: 0;
  bottom: 0;
}

.histogram_item_content::after,
.histogram::after {
  display: block;
  content: "";
  width: 14px;
  height: 18px;
  background: #0080ff;
  border-radius: 50%;
  transform: rotateX(110deg);
  position: absolute;
  top: -9px;
  left: 0px;
}
.histogram_item_content::after {
  background: #04b6f2;
}
.histogram_item::before {
  display: block;
  content: "";
  border-radius: 50%;
  width: 16px;
  height: 18px;
  position: absolute;
  bottom: -12px;
  left: -6px;
  border: 5px solid #0080ff;
  border-bottom: none;
  transform: rotateX(110deg);
}
.histogram_item_content::before {
  display: block;
  content: "";
  border-radius: 50%;
  width: 14px;
  height: 18px;
  position: absolute;
  bottom: -9px;
  left: 0px;
  background: #0080ff;
  border-bottom: none;
  transform: rotateX(102deg);
}

.histogram_item_content {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #04b6f2;
  width: 100%;
  height: 100%;
  animation: mymove 2s linear;
}
@keyframes mymove {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}
.text {
  position: absolute;
  width: 10px;

  bottom: -53px;

  /* left: 40px; */
  color: #00a9ff;
  font-size: 12px;
  height: 80px;
  line-clamp: 2px;
  /* writing-mode:lr-tb */
}
</style>