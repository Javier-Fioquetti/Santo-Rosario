<template>
    <div class="card" style="width: 100vw;">
        <div class="card-body mx-auto d-block">
            <h3 class="card-title"><strong>Misterios Luminosos</strong></h3>
            <div id="header-1"></div>
            <InicioRosario/>
            <PrimerLuminoso/>
            <PadreNuestro/>
            <AveMaria-1/>
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
            <SegundoLuminoso/>
            <PadreNuestro/>
            <AveMaria-1/>
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
            <TercerLuminoso/>
            <PadreNuestro/>
            <AveMaria-1/>
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
            <CuartoLuminoso/>
            <PadreNuestro/>
            <AveMaria-1/>
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
            <QuintoLuminoso/>
            <PadreNuestro/>
            <AveMaria-1/>
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
            <br>
            <h5>Oraciones Finales</h5>
            <PadreNuestro/>
            <AveMaria-1/>
            <AveMaria/>
            <AveMaria/>
            <GloriaFinal/>
            <Salve/>
            <a class="btn btn-secondary nav-link" href="#header-1">Volver</a>


            
        </div>
    </div>
  </template>
  
  <script setup>
  import InicioRosario from '@/components/InicioRosario.vue'
  import PrimerLuminoso from '@/components/PrimerLuminoso.vue'
  import PadreNuestro from '@/components/PadreNuestro.vue'
  import AveMaria from '@/components/AveMaria.vue'
  import AveMaria1 from '@/components/AveMaria-1.vue'
  import GloriaMisterios from '@/components/GloriaMisterios.vue'
  import SegundoLuminoso from '@/components/SegundoLuminoso.vue'
  import TercerLuminoso from '@/components/TercerLuminoso.vue'
  import CuartoLuminoso from '@/components/CuartoLuminoso.vue'
  import QuintoLuminoso from '@/components/QuintoLuminoso.vue'
  import GloriaFinal from '@/components/GloriaFinal.vue'
  import Salve from '@/components/SalveFinal.vue'
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
  h5 {
    text-shadow: 5px 5px 5px black;
    color: $texto_blanco;
  }
  </style>