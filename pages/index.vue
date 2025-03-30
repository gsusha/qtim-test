<template>
  <div class="index-page">
    <UiTitle class="index-page__title">{{ t('pages.index.articles') }}</UiTitle>
    <div v-if="isLoading" class="index-page__skeleton">
      <div v-for="(_, i) in 8" :key="i" class="index-page__skeleton-item">
        <UiSkeleton width="100%" height="280px" />
        <UiSkeleton width="100%" height="74px" />
      </div>
    </div>
    <CardList
      v-else
      class="index-page__card-list"
      :posts="displayedPosts"
    />
    <Pagination
      class="index-page__pagination"
      :total-pages="totalPages"
      :currentPage="currentPage"
      @setPageNumber="setPageNumber"
      @setNextPage="setNextPage"
    />
  </div>
</template>

<script lang="ts" setup>
import { useBlog } from '~/composables/useBlog';
import Pagination from '~/components/ui/Pagination.vue';

const { t } = useI18n();
const { displayedPosts, isLoading, totalPages, currentPage, setNextPage, setPageNumber } = useBlog();
</script>

<style lang="scss" scoped>
.index-page {
  padding: 120px 0;

  &__title {
    margin-bottom: 60px;
  }

  &__card-list {
    margin-bottom: 50px;
  }

  &__skeleton {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    &-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>