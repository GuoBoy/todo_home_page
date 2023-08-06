<template>
  <div class="changelog">
    <div class="menu">
      <ul>
        <li>
          <a href="#install">2022-10-1</a>
        </li>
        <li>
          <a href="#usage">2022-9-12</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div id="install" class="item">更新日志1</div>
      <div id="usage" class="item">更新日志1</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.changelog {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: auto;
  color: aliceblue;

  ul {
    list-style: none;
  }

  .menu {
    background: #48d654;
    overflow-y: auto;
    white-space: nowrap;
    padding-right: 10px;
  }

  .content {
    overflow-y: auto;
    background: #e1b00e;

    .item {
      min-height: 100%;
    }
  }
}
</style>