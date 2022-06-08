<script setup lang="ts">
interface Props {
  seoTitle?: string
}

withDefaults(defineProps<Props>(), {
  seoTitle: 'Front-end Developer',
})

const delimiter = '|'
</script>

<template>
  <header
    :class="$style.header"
    aria-labelledby="the-header-heading"
  >
    <app-container :class="$style.container">
      <app-shadow-text
        id="the-header-heading"
        tag="h1"
        un-max-w="3/4"
        un-font="weight-light"
        un-text="2xl md:3xl dark:light dark:opacity-50"
        :value="$constants.brand.name"
      >
        <router-link
          un-display="block"
          :title="$t('routes.homepage')"
          :to="{ name: 'index' }"
        >
          <span
            translate="no"
            class="truncate"
            un-display="block"
            v-text="$constants.brand.name"
          />
          <span
            class="sr-only"
            v-text="`${delimiter} ${seoTitle} `"
          />
        </router-link>
      </app-shadow-text>
      <a
        href="#main"
        class="sr-only focus:not-sr-only"
        v-text="$t('accessibility.skip_to_content')"
      />
      <the-navbar />
    </app-container>
  </header>
</template>

<style module lang="scss">
@use 'sass:map';
@use '~/styles/abstracts';

$header-padding-y: abstracts.create-unit-size(16);

.header {
  --padding-y: #{$header-padding-y};

  padding-block: var(--padding-y);

  @include abstracts.media(map.get(abstracts.$breakpoints, 'md')) {
    --padding-y: #{$header-padding-y * 1.5};
  }

  @include abstracts.media(map.get(abstracts.$breakpoints, 'lg')) {
    --padding-y: #{$header-padding-y * 2};
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
