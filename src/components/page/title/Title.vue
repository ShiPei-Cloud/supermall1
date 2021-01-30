<template>
  <div class="title">{{text}}</div>
</template>
<script>
export default {
  name: "Title",
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: "涕延后收入"
    }
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  top: 0;
  left: 0px;
  color: #0075ff;
  width: 640px;
  height: 32px;
  line-height: 32px;
  background: url("../../../assets/dataImage/title_bg.png") center;
}
</style>