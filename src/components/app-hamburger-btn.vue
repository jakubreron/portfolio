<script setup lang="ts">
interface Props {
  isActive?: boolean
  alignment?: 'left' | 'right'
  ariaLabel: string
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
  alignment: 'right',
})

const style = useCssModule()
const hamburgerClasses = computed(() => {
  const baseStyles = [
    style.hamburger,
    props.alignment === 'right'
      ? style['hamburger--right']
      : style['hamburger--left'],
  ]

  return props.isActive ? [...baseStyles, style['hamburger--active']] : baseStyles
})
</script>

<template>
  <button :aria-label="ariaLabel" :class="hamburgerClasses">
    <span :class="$style.icon" />
  </button>
</template>

<style module lang="scss">
@use 'sass:math';

@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/functions' as f;

$size: f.create-unit-size(48);

$stripe-thickness: f.create-unit-size(3);
$stripe-offset: math.div($size, 3.2);
$stripe-width: math.div($size, 2);

.hamburger {
  @apply relative;

  height: $size;
  width: $size;

  $alignments: (left, right);

  @each $alignment in $alignments {
    &--#{$alignment} {
      margin-#{$alignment}: math.div(-$stripe-width, 2);
    }
  }

  &,
  &::before,
  &::after {
    @apply rounded-full;
  }

  &::before,
  &::after {
    @include m.pseudo-styles;

    @apply inset-0;
    @apply opacity-0;
  }

  &::before {
    @apply bg-dark dark:bg-light bg-opacity-10 dark:bg-opacity-10;
    @apply transform-gpu scale-25;

    transition: 200ms;
    transition-property: opacity, transform;
  }

  &::after {
    @apply transition-opacity;
    @apply border border-current;
  }

  &:hover {
    &::before {
      @apply opacity-100;
      @apply scale-100;
    }
  }

  &:focus-visible,
  &:active {
    &::after {
      @apply opacity-25;
    }
  }

  .icon {
    @apply block;

    transition: background-color 200ms;
    will-change: background-color;

    &,
    &::before,
    &::after {
      background-color: red;
      @apply rounded;
      @apply pointer-events-none;
      @apply bg-dark dark:bg-light;
      @apply m-auto;

      height: $stripe-thickness;
      width: $stripe-width;
    }

    &::before,
    &::after {
      @include m.pseudo-styles;
      @apply transition-transform duration-300;
    }

    &::before {
      top: $stripe-offset;
    }

    &::after {
      bottom: $stripe-offset;
      transform: translate3d(#{math.div($stripe-width, 7)}, 0, 0) scale3d(.7, 1, 1);
    }
  }

  &--active {
    .icon {
      @apply bg-transparent;

      &::before {
        $translateY: -$stripe-offset +math.div($size, 2) - math.div($stripe-thickness, 2);

        transform: translate3d(0, #{$translateY}, 0) rotate3d(0, 0, 1, -45deg);
      }

      &::after {
        $translateY: $stripe-offset - math.div($size, 2)+math.div($stripe-thickness, 2);

        transform: translate3d(0, #{$translateY}, 0) rotate3d(0, 0, 1, 45deg);
      }
    }
  }
}
</style>
