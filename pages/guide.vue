<template>
  <div class="guide">
    <div class="menu">
      <ul>
        <li>
          <a href="#install">安装</a>
        </li>
        <li>
          <a href="#usage">使用</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div id="install" class="item">安装</div>
      <div id="usage" class="item">使用</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.guide {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: auto;

  color: aliceblue;

  a {
    text-decoration: none;
    color: aliceblue;
  }

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