<template>
  <div class="flex flex-col self-center">
    <input type="date" :min="minDate" :max ="maxDate" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2" v-model="date">

    <button :disabled="!ready" @click="generateCode"
      class ="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      :class="{
        'focus:outline-none focus:shadow-outline': ready,
        'opacity-50 cursor-not-allowed': !ready,
      }"
      type="button">{{ $t('Generate Code') }}</button>

    <p v-if="authorizationCode" class="text-center text-gray-800">{{ $t('The authorization code is') }}: <span class="font-bold">{{ authorizationCode }}</span></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            date: null,
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

            this.reset();
        },
        reset() {
          this.date = null;
        }
    },
    computed: {
      ready: function() {
        return this.date !== null;
      },
      minDate: function() {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const minDate = new Date(today)
        minDate.setDate(minDate.getDate() - 28)

        return minDate.toISOString().substring(0,10)
      },
      maxDate: function() {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

        return today.toISOString().substring(0,10)
      }
    },
}
</script>