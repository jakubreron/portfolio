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
  <component :is="tag" class="container" :data-type="type">
    <slot />
  </component>
</template>

<style lang="scss">
@use 'sass:map';
@use 'sass:math';

@use '~/styles/abstracts/functions' as f;
@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/variables' as v;

$base-padding-x: f.create-unit-size(16);
$base-max-width: f.create-unit-size(640);

.container {
  --padding-x: #{$base-padding-x};
  --max-width: 100%;

  width: min(100% - var(--padding-x), var(--max-width));
  margin: 0 auto;

  &[data-type='narrow'] {
    --max-width: #{$base-max-width};
  }

  &[data-type='standard'] {
    --max-width: #{$base-max-width * 1.5};
  }

  &[data-type='wide'] {
    --max-width: #{$base-max-width * 2};
  }

  @include m.media(map.get(v.$breakpoints, 'md')) {
    --padding-x: #{$base-padding-x * 2};
  }
}
</style>
