<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#quintoGozoso">
        <strong>Quinto Misterio</strong>
        </button>
        <div class="modal fade" id="quintoGozoso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 mx-auto d-block" id="exampleModalLabel">5° Misterio: El Niño Jesús perdido y hallado en el Templo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-5">
                        <p>
                            «Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. <br>
                            Cuando tuvo doce años, subieron ellos como de costumbre a la fiesta y, <br>
                            al volverse, pasados los días, el niño Jesús se quedó en Jerusalén,<br>
                            sin saberlo sus padres... Y sucedió que al cabo de tres días, <br>
                            le encontraron en el Templo sentado en medio de los maestros, <br>
                            escuchándoles y preguntándoles; todos los que le oían, estaban estupefactos <br>
                            por su inteligencia y sus respuestas» (Lc 2, 41-47)
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