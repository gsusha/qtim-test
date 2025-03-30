<template>
  <div class="skeleton" :style="{ width, height }"></div>
</template>

<script lang="ts" setup>
interface SkeletonProps {
  width?: string;
  height?: string;
}

withDefaults(defineProps<SkeletonProps>(), {
  width: '100%',
  height: '100%'
});
</script>

<style lang="scss" scoped>
.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
}
</style>