<template>
  <div class="index-page">
    <UiTitle class="index-page__title">{{ t('pages.index.articles') }}</UiTitle>
    <div v-if="isLoading" class="index-page__loading">Загрузка</div>
    <CardList v-else :posts />
  </div>
</template>

<script lang="ts" setup>
import { useBlog } from '~/composables/useBlog';
import type { BlogPost } from '~/types/blog';

const { t } = useI18n();
const { fetchPosts, isLoading } = useBlog();

const posts = ref<BlogPost[]>([]);

onMounted(async () => {
  try {
    posts.value = await fetchPosts()
  } catch (err) {
    console.error(err)
  }
})
</script>

<style lang="scss" scoped>
.index-page {
  padding: 120px 0;

  &__title {
    margin-bottom: 60px;
  }
}
</style>