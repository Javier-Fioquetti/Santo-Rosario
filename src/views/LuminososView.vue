<template>
    <div class="card" style="width: 100vw;">
        <div class="card-body mx-auto d-block">
            <h3 class="card-title"><strong>Misterios Luminosos</strong></h3>
            <InicioRosario/>
            <PrimerLuminoso/>
            <PadreNuestro/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <AveMaria/>
            <GloriaMisterios/>
            
        </div>
    </div>
  </template>
  
  <script setup>
  import InicioRosario from '@/components/InicioRosario.vue'
  import PrimerLuminoso from '@/components/PrimerLuminoso.vue'
  import PadreNuestro from '@/components/PadreNuestro.vue'
  import AveMaria from '@/components/AveMaria.vue'
  import GloriaMisterios from '@/components/GloriaMisterios.vue'
  
  
  
  
  </script>
  
  <style scoped lang="scss">
  h3 {
    color: $header_misterios;
  }
  .card{
    background-image: url(https://desdelafe.mx/wp-content/uploads/2019/05/virgen-maria.jpg);
    background-size: cover;
    background-attachment: fixed;
  }
  </style>