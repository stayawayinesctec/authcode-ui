<!--
  Copyright (C) 2020 INESC TEC.
  
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->
<template>
  <div>
    <div class="min-h-screen bg-white">
      <Navbar></Navbar>
      <div class="py-10">
        <main class="-mt-32">
          <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <nuxt />
            </div>
          </div>
        </main>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 INESCTEC. {{ $t('All rights reserved.') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>
