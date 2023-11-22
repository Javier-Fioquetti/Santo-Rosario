<template>
    <div class="card" style="width: 100vw;">
        <div class="card-body mx-auto d-block">
            <h3 class="card-title"><strong>Misterios Dolorosos</strong></h3>
            <InicioRosario/>
            <PadreNuestro/>
            
        </div>
    </div>
</template>

<script setup>
import InicioRosario from '@/components/InicioRosario.vue';
import PadreNuestro from '@/components/PadreNuestro.vue';






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