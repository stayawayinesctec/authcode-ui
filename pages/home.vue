<template>
  <div>
      <input type="date" v-model="date">
      <button @click="generateCode">Generate code</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            date: '2020-05-06',
        }
    },
    methods: {
        generateCode: async function() {
            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBd2VOMWJQWFR0cVRYTnFUcXdnVE5oaGZ4ekJMcDctQ3ljOW9PT1N3RnJJIn0.eyJleHAiOjE1OTEwMjcwNzMsImlhdCI6MTU5MTAyNjc3MywiYXV0aF90aW1lIjoxNTkxMDI2NzcyLCJqdGkiOiIwZjc2YjdkZS1jOGZlLTRhZTUtYWRmYy00YzMzNjk2ZDEzYzEiLCJpc3MiOiJodHRwczovL3ZzYXMwMy5pbmVzY3RlYy5wdC9hdXRoL3JlYWxtcy9iYWctcHRzIiwiYXVkIjpbImhhLWF1dGhjb2RlZ2VuZXJhdGlvbiIsImFjY291bnQiXSwic3ViIjoiMzVkMjJkNzgtYjA2YS00ODZlLTllMDItMDA2YTRiOTE4YjU5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiaGEtdWktd2ViLWNsaWVudCIsIm5vbmNlIjoiTjAuMTAzMDg5NDk1OTg3MzM5ODUxNTkxMDI2NzcwNTE2Iiwic2Vzc2lvbl9zdGF0ZSI6IjcxMjg5NDU0LTk1ZDctNDExMC05NTdkLWM2ZGRiMDNhZmMwMyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly92c2FzMDMuaW5lc2N0ZWMucHQiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2Z';

            const data = await this.$axios.$post('https://vsas03.inesctec.pt/v1/authcode', {
                date: this.date,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            console.log(data);
        }
    }
}
</script>