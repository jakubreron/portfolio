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

@use '~/styles/abstracts';

$font-size: abstracts.create-unit-size(100);

$stroke-width: 1px;
$stroke-color: var(--dark-100);

.shadow-text {
  position: relative;

  &::before {
    // NOTE: "content" only allows the strings, we cannot use the v-bind('props.value') (it creates a css variable) here
    @include abstracts.pseudo-styles(attr(data-text));

    -webkit-text-stroke: $stroke-width;
    -webkit-text-stroke-color: $stroke-color;

    color: transparent;
    opacity: .2;

    pointer-events: none;

    top: -100%;
    left: -#{math.div(100, 3) * 1%};

    font-size: $font-size;
    font-weight: var(--font-weight-primary-black);

    @include abstracts.dark-mode {
      opacity: .1;
    }
  }
}
</style>
