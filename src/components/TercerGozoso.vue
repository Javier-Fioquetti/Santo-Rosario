<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#tercerGozoso">
        <strong>Tercer Misterio</strong>
        </button>
        <div class="modal fade" id="tercerGozoso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 mx-auto d-block" id="exampleModalLabel">3° Misterio: El Nacimiento del Hijo de Dios en el portal de Belén </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-5">
                        <p>
                            «Sucedió que por aquellos días salió un edicto de César Augusto ordenando <br>
                            que se empadronase todo el mundo. Este primer empadronamiento tuvo lugar <br>
                            siendo Cirino gobernador de Siria. Iban todos a empadronarse, cada uno a su ciudad.<br>
                            Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David,<br>
                            que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María,<br>
                            su esposa, que estaba encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron<br>
                            los días del alumbramiento, y dio a luz a su hijo primogénito, le envolvió en pañales y le <br>
                            acostó en un pesebre, porque no tenían sitio en el alojamiento» (Lc 2,1-7).
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