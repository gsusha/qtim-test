<template>
  <div class="index-page">
    <UiTitle class="index-page__title">{{ t('pages.index.articles') }}</UiTitle>
    <div v-if="isLoading" class="index-page__loading">{{ t('common.loading') }}</div>
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
}
</style>