<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
@use 'sass:map';

@use '~/styles/abstracts/functions' as f;
@use '~/styles/abstracts/mixins' as m;
@use '~/styles/abstracts/variables' as v;

$px: f.create-unit-size(16);

.container {
  --px: #{$px};
  padding: 0 var(--px);
  margin: 0 auto;

  @include m.media(map.get(v.$breakpoints, 'md')) {
    --px: #{$px * 2};
  }
}
</style>
