<template>
  <main :class="$style.app" id="app"><router-view /></main>
</template>

<style lang="scss" module>
.app {
  display: flex;
  overflow: hidden;
  position: relative;
}
</style>
