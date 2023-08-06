<template>
  <div class="index">
    <div class="swiper">
      <img src="~/assets/logo.ico" alt="">
    </div>
    <h1>ToDo Project</h1>
    <p>一个个人记录TODO的简洁、跨平台、数据个人保存的APP</p>
    <a href="#" target="_blank" class="to-github"> More with Github </a>
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

  .to-github {
    text-decoration: none;
    color: aliceblue;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    padding: 5px 15px;
  }
}
</style>