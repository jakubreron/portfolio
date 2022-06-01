<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
@use 'sass:map';

@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/variables' as v;

.container {
  $px: 1rem;

  margin: 0 auto;
  padding: 0 $px;

  @include m.media(map.get(v.$breakpoints, 'md')) {
    padding: 0 $px * 2;
  }
}
</style>
