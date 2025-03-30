<template>
  <div class="footer">
    <div class="footer__content container">
      footer
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "assets/styles/colors" as colors;

.footer {
  background: colors.$purple-accent;
}
</style>