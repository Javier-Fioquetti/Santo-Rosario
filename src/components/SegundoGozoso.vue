<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#segundoGozoso">
        <strong>Segundo Misterio Gozoso</strong>
        </button>
        <div class="modal fade" id="segundoGozoso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">2° Misterio: La Visitación de Nuestra Señora a su prima Santa Isabel</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            «En aquellos días María se puso en camino y fue aprisa <br>
                            a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías<br>
                            y saludó a Isabel. Y sucedió que, en cuanto Isabel oyó el saludo de María,<br>
                            saltó de gozo el niño en su seno, e Isabel quedó llena de Espíritu Santo;<br>
                            y exclamando a voz en grito, dijo: "Bendita tú entre las mujeres y bendito <br>
                            el fruto de tu seno"» (Lc 1, 39-42)
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