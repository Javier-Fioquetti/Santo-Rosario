<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#primerGlorioso">
        <strong>Primer Misterio Glorioso</strong>
        </button>
        <div class="modal fade" id="primerGlorioso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">1° Misterio: La resurrección del Hijo de Dios</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            «El primer día de la semana, muy de mañana, fueron al sepulcro <br>
                            llevando los aromas que habían preparado. Pero encontraron que <br>
                            la piedra había sido retirada del sepulcro, y entraron, pero <br>
                            no hallaron el cuerpo del Señor Jesús. No sabían qué pensar de esto,<br>
                            cuando se presentaron ante ellas dos hombres con vestidos resplandecientes.<br>
                            Ellas, despavoridas, miraban al suelo, y ellos les dijeron: "¿Por qué buscáis<br>
                            entre los muertos al que está vivo? No está aquí, ha resucitado"» (Lc 24, 1-6).  
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