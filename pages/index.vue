<!--
  Copyright (C) 2020 INESC TEC.

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->
<template>
  <div class="flex flex-col self-center">
    <datepicker
      v-model="date"
      :placeholder="$t('Select date')"
      :disabled-dates="datePickerState.disabledDates"
      :language="datePickerState.language"
      input-class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2"
    ></datepicker>

    <!--<input type="date" :min="minDate" :max ="maxDate" class="" v-model="date">-->

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
import Datepicker from 'vuejs-datepicker';
import {en, ptBR} from 'vuejs-datepicker/dist/locale';

function minDate() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const minDate = new Date(today)
  minDate.setDate(minDate.getDate() - 28)

  return minDate;
}

function maxDate() {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  return today;
}

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
      datePickerState: function() {
        const localeLanguageMapping = {
          en: en,
          pt: ptBR,
        };

        return {
          disabledDates: {
            from: maxDate(),
            to: minDate(),
          },
          language: localeLanguageMapping[this.$i18n.locale],
        }
      }
    },
    components: {
      Datepicker
    }
}
</script>