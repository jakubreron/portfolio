<script setup lang="ts">
interface Props {
  seoTitle?: string
}

withDefaults(defineProps<Props>(), {
  seoTitle: 'Front-end Developer',
})

const header = ref<HTMLElement | null>(null)

const delimiter = '|'
</script>

<template>
  <header
    ref="header"
    :class="$style.header"
    aria-labelledby="the-header-heading"
  >
    <app-container :class="$style.container">
      <app-shadow-text
        id="the-header-heading"
        tag="h1"
        :class="$style.heading"
        :value="$constants.brand.name"
      >
        <router-link
          :class="$style.heading__link"
          :title="$t('routes.homepage')"
          :to="{ name: 'index' }"
        >
          <span
            translate="no"
            class="truncate"
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

$py: 1rem;

.header {
  --py: #{$py};

  padding-block: var(--py);

  @include abstracts.media('md') {
    --py: #{$py * 1.5};
  }

  @include abstracts.media('lg') {
    --py: #{$py * 2};
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading {
  --font-size: var(--text-2xl);

  max-width: 75%;
  font-weight: var(--font-weight-primary-light);
  font-size: var(--font-size);

  @include abstracts.media('md') {
    --font-size: var(--text-3xl);
  }

  @include abstracts.dark-mode {
    opacity: .5;
  }

  &__link {
    color: var(--light)
  }
}
</style>
