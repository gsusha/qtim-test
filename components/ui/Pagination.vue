<template>
  <div class="pagination">
    <div v-for="page in totalPages"
         :class="[
           'pagination__item',
           'pagination__item-page',
           { 'pagination__item-page--active': page === currentPage }
         ]"
         @click="handlePageClick(page)"
    >
      <div class="pagination__item-content">
        {{ page }}
      </div>
    </div>
    <div :class="[
        'pagination__item',
        'pagination__item-next',
        { 'pagination__item-next--disabled': currentPage === totalPages }
      ]"
         @click="handleNextPageClick">
      <div class="pagination__item-content">
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

interface PaginationEmits {
  (event: 'setPageNumber', number: number): void;

  (event: 'setNextPage'): void;
}

const props = defineProps<PaginationProps>();
const emit = defineEmits<PaginationEmits>();

const handlePageClick = (number: number) => {
  if (number !== props.currentPage) {
    emit('setPageNumber', number);
  }
};

const handleNextPageClick = () => {
  if (props.currentPage < props.totalPages) {
    emit('setNextPage');
  }
};
</script>

<style lang="scss" scoped>
@use "assets/styles/colors" as colors;

.pagination {
  display: flex;
  gap: 8px;

  &__item {
    cursor: pointer;

    width: 44px;
    height: 44px;
    border-radius: 12px;

    font-size: 16px;
    background: colors.$lightest;

    position: relative;

    transition: background-color .1s ease-in-out;

    &-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);

      line-height: 50%;
      vertical-align: bottom;
    }

    &-page {
      &--active {
        background: colors.$dark;
        color: colors.$white;
      }
    }

    &-next {
      background: colors.$white;
      border: 1px solid colors.$lightest;

      &--disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }

    &:hover {
      background: colors.$light;

      &.pagination__item-page {
        &--active {
          background: colors.$dark;
          color: colors.$white;
        }
      }

      &.pagination__item-next {
        border-color: colors.$light;
      }
    }
  }
}
</style>