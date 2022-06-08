<script setup lang="ts">
interface Props {
  tag?: string
  type?: 'adaptive' | 'fluid'
}

withDefaults(defineProps<Props>(), {
  tag: 'div',
  type: 'adaptive',
})
</script>

<template>
  <component :is="tag" :class="$style.container" :data-type="type">
    <slot />
  </component>
</template>

<style module lang="scss">
@use 'sass:map';
@use 'sass:math';

@use '~/styles/abstracts';

$px: 2rem;

.container {
  --px: #{$px};
  --mw: 100%; // 100% by default, without any data-type

  width: min(100% - var(--px), var(--mw));
  margin: 0 auto;

  &[data-type="adaptive"] {
    @each $breakpoint, $width in abstracts.$breakpoints {
      @include abstracts.media($breakpoint) {
        --mw: #{$width};
      }
    }
  }

  &[data-type="fluid"] {
    @include abstracts.media('md') {
      --px: #{$px * 2};
    }
  }
}
</style>
