<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <app-container>
    <h2 v-text="t('not-found')" />
  </app-container>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
