<script setup lang="ts">
interface Props {
  value: string
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
})
</script>

<template>
  <component :is="tag" :class="$style['shadow-text']" :data-text="value">
    <slot />
  </component>
</template>

<style module lang="scss">
@use 'sass:map';
@use 'sass:math';

@use '~/styles/abstracts/functions' as f;
@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/variables' as v;

$font-size: f.create-unit-size(100);

$stroke-width: f.create-unit-size(1, em, 100);
$stroke-color: map.get(v.$colors, 'dark');
$dark-stroke-color: map.get(v.$colors, 'light');

.shadow-text {
  position: relative;

  &::before {
    // NOTE: "content" only allows the strings, we cannot use the v-bind('props.value') (it creates a css variable) here
    @include m.pseudo-styles(attr(data-text));

    -webkit-text-stroke: $stroke-width;
    -webkit-text-stroke-color: $stroke-color;

    color: transparent;
    opacity: .2;

    pointer-events: none;

    top: -100%;
    left: -#{math.div(100, 3) * 1%};

    font-size: $font-size;
    font-weight: map.get(v.$font-primary-weights, 'black');

    @media (prefers-color-scheme: dark) {
      -webkit-text-stroke-color: $dark-stroke-color;
      opacity: .1;
    }
  }
}
</style>
