<!--
  Copyright (C) 2020 INESC TEC.
  
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->
<template>
  <div class="flex flex-col self-center">
    <button @click="login" class="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2" type="button">{{ $t('Login') }}</button>
  </div>
</template>

<script>
export default {
  nuxtI18n: false,
  methods: {
    login: function() {
      this.$auth.loginWith('keycloak');
    }
  }
}
</script>