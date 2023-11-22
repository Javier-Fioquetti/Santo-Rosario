<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#padreNuestro">
        <strong>Padre Nuestro</strong>
        </button>
        <div class="modal fade" id="padreNuestro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">Padrenuestro</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            Padre nuestro que estás en el cielo,<br>
                            santificado sea tu Nombre;<br>
                            venga a nosotros tu Reino;<br>
                            hágase tu voluntad <br>
                            en la tierra como en el cielo.<br>
                            Danos hoy nuestro pan de cada día;<br>
                            perdona nuestras ofensas,<br>
                            como también nosotros perdonamos a los que nos ofenden;<br>
                            no nos dejes caer en la tentación, y líbranos del mal. Amén.<br>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
let c = ref('')

const cambiaColor = ()=> {c.value = '#ecab13'}
</script>

<style scoped lang="scss">

.modal-content {
    background-color: $bg_popup;

} 


</style>