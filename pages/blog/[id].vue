<template>
  <div class="blog-page">
    <div v-if="post && !isLoading" class="blog-page__content">
      <UiTitle class="blog-page__title">{{ post.title }}</UiTitle>
      <div :class="['blog-page__image', { 'blog-page__image--broken': isBrokenImage }]">
        <img :src="post.image" alt="" @error="handleImageError" />
        <div class="blog-page__image-plug">{{ t('post.no_photo') }}</div>
      </div>
      <div class="blog-page__description">
        <div class="blog-page__description-title">
          {{ t('post.about') }}
        </div>
        <div class="blog-page__description-content">
          {{ post.description }}
        </div>
      </div>
    </div>
    <div v-else class="blog-page__loading">{{ t('common.loading') }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~/types/blog';
import { useBlog } from '~/composables/useBlog';

const route = useRoute();
const { t } = useI18n();

const post = ref<BlogPost | undefined>(undefined);

const { fetchPost, isLoading } = useBlog();

const isBrokenImage = ref<boolean>(false);

const handleImageError = () => {
  isBrokenImage.value = true;
};

onMounted(async () => {
  post.value = await fetchPost(route.params.id.toString());
})
</script>

<style lang="scss" scoped>
@use "assets/styles/colors" as colors;

.blog-page {
  padding: 120px 0 80px 0;

  &__title {
    margin-bottom: 80px;
  }

  &__image {
    width: 100%;
    height: 700px;
    background: colors.$lightest;
    margin-bottom: 80px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-plug {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      font-size: 20px;
      opacity: 0.6;
    }

    &--broken {
      img {
        display: none;
      }
    }
  }

  &__description {
    width: 695px;

    &-title {
      font-size: 16px;
      margin-bottom: 32px;
    }

    &-content {
      font-size: 36px;
      line-height: 124%;
    }
  }
}
</style>