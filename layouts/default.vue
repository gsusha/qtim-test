<template>
  <div class="layout-default">
    <AppHeader class="layout-default__header"></AppHeader>
    <main class="layout-default__main">
      <slot />
    </main>
    <AppFooter class="layout-default__footer"></AppFooter>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  max-width: 1440px;
  margin: 0 auto;
}
</style>