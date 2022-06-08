<script setup lang="ts">
import { type RouterLink } from '~/types'

const isActive = ref(false)

const style = useCssModule()
const navClasses = computed(() => isActive.value ? [style.nav, style['nav--active']] : style.nav)

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
      class="sr-only"
      v-text="$t('navbar.heading')"
    />
    <app-container>
      <menu
        id="the-navbar-menu"
        aria-labelledby="the-navbar-menu-activator"
        :class="$style.menu"
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
          >
            {{ text }}
          </router-link>
        </li>
      </menu>
    </app-container>
  </nav>
</template>

<style module lang="scss">
@use 'sass:map';
@use '~/styles/abstracts';

$py: 1rem;

.nav {
  --py: #{$py};

  position: fixed;
  inset: 0;
  opacity: 0;
  transition: opacity map.get(abstracts.$transitions, 'quickest');
  pointer-events: none;
  padding: var(--py) 0;

  @include abstracts.media('md') {
    --py: #{$py * 1.5};
  }

  @include abstracts.media('lg') {
    --py: #{$py * 2};
  }

  &--active {
    opacity: 1;
    pointer-events: auto;
  }
}

.menu {
  text-align: right;
}
</style>
