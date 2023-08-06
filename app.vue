<template>
  <div class="app">
    <div class="header">
      <ul>
        <li>
          <NuxtLink to="/">
            <img src="./assets/logo.ico" alt="">
          </NuxtLink>
        </li>
        <li :class="[idx === 1 ? 'active' : '']">
          <NuxtLink to="/" @click="onRoute(1)">Home</NuxtLink>
        </li>
        <li :class="[idx === 2 ? 'active' : '']">
          <NuxtLink to="/guide" @click="onRoute(2)">Guide</NuxtLink>
        </li>
        <li :class="[idx === 3 ? 'active' : '']">
          <NuxtLink to="/changelog" @click="onRoute(3)">Changelog</NuxtLink>
        </li>
        <li :class="[idx === 4 ? 'active' : '']">
          <NuxtLink to="/download" @click="onRoute(4)">Download</NuxtLink>
        </li>
        <li></li>
      </ul>
    </div>
    <div class="main">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const idx = useState("idx", () => 0)
const onRoute = (i: number) => idx.value = i
</script>

<style lang="scss">
$selectColor: #e9f95c;

.app {
  display: grid;
  grid-template-rows: auto 1fr;

  .header {

    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;

      a {
        color: #fff;
        text-decoration: none;
      }

      a:hover {
        color: $selectColor
      }

      .active a {
        color: $selectColor
      }

      img {
        height: 30px;
      }

    }
  }

  .main {
    height: 100%;
  }
}
</style>
