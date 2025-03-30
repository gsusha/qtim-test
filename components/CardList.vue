<template>
  <div class="card-list">
    <UiCard
      v-for="post in posts"
      :key="post.id"
      :image-url="post.image"
      :description="post.preview"
    />
  </div>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~/types/blog';

interface CardProps {
  posts: BlogPost[];
}

defineProps<CardProps>();
</script>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 30px;
}
</style>