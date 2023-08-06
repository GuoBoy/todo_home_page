<template>
  <div class="index">
    <div class="swiper">
      <img src="~/assets/logo.ico" alt="">
    </div>
    <h1>ToDo Project</h1>
    <p>一个个人记录TODO的简洁、跨平台、数据个人保存的APP</p>
    <p>下载</p>
    <div class="download">
      <a href="#" class="item"> Windows Server </a>
      <a href="#" class="item"> Linux Server </a>
      <a href="#" class="item"> PC Client </a>
      <a href="#" class="item"> Andriod Client </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: aliceblue;

  img {
    height: 35vh;
  }

  .download {
    .item {
      text-decoration: none;
      color: aliceblue;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 999px;
      padding: 5px 15px;
      margin: 0 2px;
    }
  }


}
</style>