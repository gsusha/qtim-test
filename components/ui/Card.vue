<template>
  <NuxtLink :to="`/blog/${post.id}`">
    <div class="card">
      <div :class="['card__image', { 'card__image--error' : isBrokenImage }]">
        <img :src="post.image" alt="" @error="handleImageError" />
        <div class="card__image-plug">{{ t('post.no_photo') }}</div>
      </div>
      <div class="card__description">
        {{ post.preview }}
      </div>
      <div class="card__button">{{ t('post.more') }}</div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~/types/blog';

const { t } = useI18n();

interface CardProps {
  post: BlogPost;
}

defineProps<CardProps>();

const isBrokenImage = ref<boolean>(false);

const handleImageError = () => {
  isBrokenImage.value = true;
};
</script>

<style lang="scss" scoped>
@use "assets/styles/colors" as colors;

.card {
  cursor: pointer;
  color: colors.$dark;
  transition: transform 0.3s ease-in-out;

  &__image {
    width: 100%;
    height: 280px;
    margin-bottom: 24px;

    background: colors.$lightest;

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

    &--error {
      img {
        display: none;
      }
    }
  }

  &__description {
    font-size: 20px;
    line-height: 120%;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 74px;
  }

  &__button {
    margin-top: 12px;

    font-size: 20px;
    color: colors.$purple-accent;
    opacity: 0;

    left: 50%;
    transform: translateY(10px);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Плавный переход для кнопки */

    .card:hover & {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-20px);
  }
}
</style>