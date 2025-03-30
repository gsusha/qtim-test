<template>
  <div class="blog-card">
    <div class="blog-card__image"></div>
    <div class="blog-card__description"></div>
    <div class="blog-card__button">{{ t('blog_card.more') }}</div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
</script>