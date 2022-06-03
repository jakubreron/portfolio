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

@use '~/styles/abstracts/functions' as f;
@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/variables' as v;

$base-padding-x: f.create-unit-size(16);
$base-max-width: f.create-unit-size(640);

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

  @include m.media(map.get(v.$breakpoints, 'md')) {
    --padding-x: #{$base-padding-x * 2};
  }
}
</style>
