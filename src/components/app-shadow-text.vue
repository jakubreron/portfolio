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
@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/functions' as f;

$font-size: f.create-unit-size(100);
$stroke-width: f.create-unit-size(1, em, 100);

// TODO: unocss doesn't support this yet
$stroke-color: theme('colors.dark');
$dark\:stroke-color: theme('colors.light');

.shadow-text {
  @apply relative;

  &::before {
    // NOTE: "content" only allows the strings, we cannot use the v-bind('props.value') (it creates a css variable) here
    @include m.pseudo-styles(attr(data-text));

    pointer-events: none;
    // @apply font-weight-black;
    color: transparent;
    // @apply -left-1/3 -top-full;
    opacity: .2;

    font-size: $font-size;
    -webkit-text-stroke: $stroke-width;
    -webkit-text-stroke-color: $stroke-color;

    @media (prefers-color-scheme: dark) {
      opacity: 10;
      -webkit-text-stroke-color: $dark\:stroke-color;
    }
  }
}
</style>
