<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#tercerDoloroso">
        <strong>Tercer Misterio</strong>
        </button>
        <div class="modal fade" id="tercerDoloroso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 mx-auto d-block" id="exampleModalLabel">3° Misterio: La coronación de espinas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-5">
                        <p>
                            «Entonces los soldados del procurador llevaron consigo a Jesús <br>
                            al pretorio y reunieron alrededor de él a toda la cohorte.<br>
                            Lo desnudaron y le echaron encima un manto de púrpura y, <br>
                            trenzando una corona de espinas, se la pusieron sobre la cabeza,<br>
                            y en su mano derecha una caña, y doblando la rodilla delante de él,<br>
                            le hacían burla diciendo: "Salve, Rey de los judíos"». (Mt 27, 27-29)
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