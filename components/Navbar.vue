<!--
  Copyright (C) 2020 INESC TEC.
  
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->
<template>
  <div class="bg-gray-800 pb-32">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="border-b border-gray-700">
          <div class="flex items-center justify-between h-16 px-4 sm:px-0">
            <div class="flex items-center">
              <div class="flex-shrink-0 font-medium text-gray-300 uppercase">
                Stayaway COVID
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <span class="relative z-0 inline-flex shadow-sm rounded-md border border-gray-900">
                  <button type="button"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300"
                    v-for="(locale, index) in availableLocales"
                    :key="locale.code"
                    @click="changeLocale(locale)"
                    :class="{
                      'rounded-l-md': index === 0,
                      'rounded-r-md': index === availableLocales.length - 1,
                      'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900': isCurrentLocale(locale),
                      'hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700': !isCurrentLocale(locale),
                      }"
                  >
                    {{ $t(`lang.${locale.code}`) }}
                  </button>
                </span>
                <a href="#" v-if="$auth.loggedIn" @click.prevent="logout" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">{{ $t('Logout') }}</a>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden" @click="isOpen = !isOpen">
              <!-- Mobile menu button -->
              <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg class="h-6 w-6" :class="[isOpen ? 'hidden' : 'block']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg class="h-6 w-6" :class="[isOpen ? 'block' : 'hidden']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <div class="border-b border-gray-700 md:hidden" :class="[isOpen ? 'block' : 'hidden']">
        <div class="px-2 py-3 sm:px-3">
          <div role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" role="menuitem"
              v-for="(locale, index) in availableLocales"
              :key="locale.code"
              @click="changeLocale(locale)"
              :class="{
                'rounded-l-md': index === 0,
                'mt-1': index > 0,
                'rounded-r-md': index === availableLocales.length - 1,
                'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-900': isCurrentLocale(locale),
                'hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700': !isCurrentLocale(locale),
                }"
            >
              <span class="uppercase">{{ locale.code }}</span>
            </a>
          </div>
        </div>
        <div class="px-2 py-3 sm:px-3 border-t border-gray-700" v-if="$auth.loggedIn">
          <a href="#" @click.prevent="logout" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">{{ $t('Logout') }}</a>
        </div>
      </div>
    </nav>
    <header class="py-10" v-if="$auth.loggedIn">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl leading-9 font-bold text-white">
          {{ $t('Welcome') }}
        </h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
      logout: function() {
        const strategy = this.$auth.strategy.name
        const logout_endpoint = this.$auth.strategies[strategy].options.logout_endpoint || null;

        if (logout_endpoint != null) {
          this.$axios.$get(logout_endpoint)
          .then(() => this.$auth.logout());
        }
      },
      changeLocale: function(locale) {
        this.$i18n.setLocale(locale.code)
      },
      isCurrentLocale: function(locale) {
        return this.$i18n.locale === locale.code
      }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    },
  }
}
</script>