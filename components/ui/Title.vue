<template>
  <component :is="tag" :class="['title', `title--tag-${tag}`]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  align?: 'left' | 'center' | 'right';
}

const props = withDefaults(defineProps<TitleProps>(), {
  tag: 'h1',
  align: 'left',
});
</script>

<style lang="scss" scoped>
.title {
  text-align: v-bind('props.align');

  &--tag {
    &-h1 {
      font-size: 84px;
    }
  }
}
</style>
