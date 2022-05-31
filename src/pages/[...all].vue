<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  {{ t('not-found') }}
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
