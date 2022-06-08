<script setup lang="ts">
import type { Route } from 'vite-plugin-pages'
import type { TranslateResult } from 'vue-i18n'

// TODO: move to the global types
interface RouterLink extends Required<Pick<Route, 'name'>> {
  text: TranslateResult
}

const isActive = ref(false)

const style = useCssModule()
const navClasses = computed(() => {
  return isActive.value ? [style.nav, style['nav--active']] : style.nav
})

const { t } = useI18n()

const links: RouterLink[] = [
  {
    name: 'index',
    text: t('navbar.menu.home'),
  },
  {
    name: 'experience',
    text: t('navbar.menu.experience'),
  },
  {
    name: 'contact',
    text: t('navbar.menu.contact'),
  },
]
</script>

<template>
  <app-hamburger-btn
    id="the-navbar-menu-activator"
    un-z="1"
    aria-haspopup="true"
    aria-controls="the-navbar-menu"
    :aria-expanded="isActive"
    :aria-label="isActive ? $t('navbar.menu.close') : $t('navbar.menu.open')"
    :is-active="isActive"
    @click="isActive = !isActive"
  />
  <nav
    :class="navClasses"
    aria-labelledby="the-navbar-heading"
  >
    <h2
      id="the-navbar-heading"
      un-sr="only"
      v-text="$t('navbar.heading')"
    />
    <app-container>
      <ul
        id="the-navbar-menu"
        aria-labelledby="the-navbar-menu-activator"
        role="menu"
        :class="$style.nav__menu"
      >
        <li
          v-for="({ name, text }, index) in links"
          :key="index"
          role="none"
        >
          <router-link
            :aria-current="$route.name === name ? 'page' : null"
            role="menuitem"
            :to="{ name }"
            v-text="text"
          />
        </li>
      </ul>
    </app-container>
  </nav>
</template>

<style module lang="scss">
@use 'sass:map';
@use '~/styles/abstracts';

.nav {
  position: fixed;
  inset: 0;
  opacity: 0;
  transition: opacity map.get(abstracts.$transitions, 'quickest');
  pointer-events: none;

  // @apply py-4 md:py-6 lg:py-8;

  /* TODO: get height from the nav */
  margin-top: 76px;

  &__menu {
    text-align: right;
  }

  &--active {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
