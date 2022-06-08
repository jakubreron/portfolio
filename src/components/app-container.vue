<script setup lang="ts">
interface Props {
  tag?: string
  type?: 'narrow' | 'standard' | 'wide'
}

withDefaults(defineProps<Props>(), {
  tag: 'div',
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

$base-padding-x: abstracts.create-unit-size(16);
$base-max-width: abstracts.create-unit-size(640);

$types: (
  'narrow': $base-max-width,
  'standard': $base-max-width * 1.5,
  'wide': $base-max-width * 2,
);

.container {
  --padding-x: #{$base-padding-x};
  --max-width: 100%;

  width: min(100% - var(--padding-x), var(--max-width));
  margin: 0 auto;

  @each $type,
  $max-width in $types {
    &[data-type='#{$type}'] {
      --max-width: #{$max-width};
    }
  }

  @include abstracts.media(map.get(abstracts.$breakpoints, 'md')) {
    --padding-x: #{$base-padding-x * 2};
  }
}
</style>
