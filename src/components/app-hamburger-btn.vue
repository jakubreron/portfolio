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
@use 'sass:map';

@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/functions' as f;
@use '~/styles/abstracts/variables' as v;

$size: f.create-unit-size(48);

$stripe-thickness: f.create-unit-size(3);
$stripe-offset: math.div($size, 3.2);
$stripe-width: math.div($size, 2);

.hamburger {
  position: relative;

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
    border-radius: 100%;
  }

  &::before,
  &::after {
    @include m.pseudo-styles;

    inset: 0;
    opacity: 0;
  }

  &::before {
    // @apply bg-dark dark:bg-light bg-opacity-10 dark:bg-opacity-10;
    // @apply transform-gpu scale-25;

    transition: 200ms;
    transition-property: opacity, transform;
  }

  &::after {
    transition: opacity map.get(v.$transitions, 'quickest');
    border: 1px solid currentColor;
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:focus-visible,
  &:active {
    &::after {
      opacity: .25;
    }
  }

  .icon {
    display: block;

    transition: background-color 200ms;
    will-change: background-color;

    &,
    &::before,
    &::after {
      border-radius: f.create-unit-size(4);
      pointer-events: none;
      background-color: map.get(v.$colors, 'dark');
      margin: auto;

      height: $stripe-thickness;
      width: $stripe-width;

      @include m.dark-mode {
        background-color: map.get(v.$colors, 'light');
      }
    }

    &::before,
    &::after {
      @include m.pseudo-styles;
      transition: transform map.get(v.$transitions, 'quick')
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
      background-color: transparent;

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
