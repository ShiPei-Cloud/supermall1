<template>
  <div class="title">
    <div class="title_content">数据可视化</div>
    <div class="title_content_E">Data Visualization</div>
  </div>
</template>
<script>
export default {
  name: "Title",
  data() {
    return {};
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  left: 0;
  top: 0;
  width: 91px;
  height: 100%;
  background: url("../../assets/dataImage/title.png") center no-repeat;
  color: aliceblue;
}

.title_content {
  position: absolute;
  top: 50%;
  left: 18%;
  transform: translate(0, -50%);
  /* width: 10px; */
  writing-mode: tb-rl;
  font-size: 27px;
letter-spacing:10px;
  font-weight: 400;
  color: rgba(0, 255, 255, 1);
}

.title_content_E {
  position: absolute;
  top: 50%;
  right: 18%;
  transform: translate(0, -50%);
  writing-mode: tb-rl;
  color: rgba(0, 255, 255, 1);
  font-weight: 400;
  font-size: 15px;
letter-spacing:2px;

}
</style>