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
    un-p="y-4 md:y-6 lg:y-8"
    aria-labelledby="the-header-heading"
  >
    <app-container
      class="flex"
      un-items="center"
      un-justify="between"
    >
      <app-shadow-text
        id="the-header-heading"
        tag="h1"
        un-max-w="3/4"
        un-font="weight-light"
        un-text="2xl md:3xl dark:light dark:opacity-50"
        :value="$constants.brandName"
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
            v-text="$constants.brandName"
          />
          <span
            un-sr="only"
            v-text="`${delimiter} ${seoTitle} `"
          />
        </router-link>
      </app-shadow-text>
      <a
        href="#main"
        un-sr="only focus:not-only"
        v-text="$t('accessibility.skip_to_content')"
      />
      <the-navbar />
    </app-container>
  </header>
</template>

<style module lang="scss">

</style>
