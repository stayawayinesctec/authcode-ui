<template>
  <div>
      <input type="date" v-model="date">
      <button @click="generateCode">Generate code</button>

      <h1 v-if="authorizationCode">{{ authorizationCode }}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            date: '2020-05-06',
            authorizationCode: null,
        }
    },
    methods: {
        generateCode: async function() {
            const data = await this.$axios.$post(`${process.env.AUTHCODE_URL}/v1/authcode`, {
                onsetDate: this.date,
            }, {
                headers: {
                    Authorization: this.$auth.getToken('keycloak'),
                }
            })

            this.authorizationCode = data.authorizationCode;
        }
    }
}
</script>