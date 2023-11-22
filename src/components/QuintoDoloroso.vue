<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#quintoDoloroso">
        <strong>Quinto Misterio Dolorosos</strong>
        </button>
        <div class="modal fade" id="quintoDoloroso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">5° Misterio: La crucifixión y muerte de Jesús</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            «Llegados al lugar llamado "La Calavera", le crucificaron allí a él y a los dos malhechores, <br>
                            uno a la derecha y otro a la izquierda. Jesús decía: "Padre, perdónales, porque no saben<br>
                            lo que hacen"... Era ya eso de mediodía cuando, al eclipsarse el sol, hubo oscuridad <br>
                            sobre toda la tierra hasta la media tarde. El velo del Santuario se rasgó por medio y <br>
                            Jesús, dando un fuerte grito dijo: "Padre, en tus manos pongo mi espíritu" y, dicho esto, <br>
                            expiró» (Lc  23, 33-46).
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