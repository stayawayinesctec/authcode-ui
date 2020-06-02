<template>
  <div class="flex h-screen justify-center">
    <div class="flex flex-col self-center">
      <button @click="login" class="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2" type="button">Login with Auth Service</button>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Stayaway. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login: function() {
      this.$auth.loginWith('keycloak');
    }
  }
}
</script>