<template>
  <div>
    <button @click="login">Login with Auth Service</button>
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