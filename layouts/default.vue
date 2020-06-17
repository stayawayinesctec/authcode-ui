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
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul class="xl:mx-60 max-h-32 grid grid-columns-4 grid-flow-col gap-10 items-center">
            <li><a href="https://www.inesctec.pt/en"><img class="object-contain max-h-32" src="/inesctec.png" alt="INESC TEC"></a></li>
            <li><a href="https://ispup.up.pt/"><img class="object-contain max-h-32" src="/ispup.png" alt="ISPUP - Instituto de Saúde Pública da Universidade do Porto"></a></li>
            <li><a href="https://keyruptive.com/"><img class="object-contain max-h-32" src="/keyruptive.png" alt="Keyruptive"></a></li>
            <li><a href="https://www.pick.ubirider.com/sobre"><img class="object-contain max-h-32" src="/ubirider.png" alt="UbiRider"></a></li>
          </ul>
          <div class="text-center text-gray-500 text-sm">
            <p>Uma iniciativa INCoDe.2030 com o apoio da Fundação para a Ciência e a Tecnologia</p>
            <img class="h-4 md:h-8 text-center mx-auto mt-2" src="/fct.png" alt="">
          </div>
        </div>
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
