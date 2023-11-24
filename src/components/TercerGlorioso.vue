<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#tercerGlorioso">
        <strong>Tercer Misterio</strong>
        </button>
        <div class="modal fade" id="tercerGlorioso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 mx-auto d-block" id="exampleModalLabel">3° Misterio: La venida del Espíritu Santo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-5">
                        <p>
                            «Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. <br>
                            De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso, <br>
                            que llenó toda la casa en la que se encontraban. Se les aparecieron unas lenguas <br>
                            como de fuego que se repartieron y se posaron sobre cada uno de ellos; <br>
                            quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas,<br>
                            según el Espíritu les concedía expresarse» (Hch 2, 1-4).   
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
button:hover {
    box-shadow: $shadow_button;
}

</style>