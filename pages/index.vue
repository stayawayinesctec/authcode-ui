<template>
  <div>
      <Navbar/>
      <div class="flex h-screen justify-center">
        <div class="flex flex-col self-center">
          <input type="date" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2" v-model="date">

          <button :disabled="!ready" @click="generateCode"
            class ="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            :class="{
              'focus:outline-none focus:shadow-outline': ready,
              'opacity-50 cursor-not-allowed': !ready,
            }"
            type="button">Generate Code</button>

          <p v-if="authorizationCode" class="text-center text-gray-800">Code is: <span class="font-bold">{{ authorizationCode }}</span></p>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';

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
      }
    },
    components: {
      Navbar
    }
}
</script>