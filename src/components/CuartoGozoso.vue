<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#cuartoGozoso">
        <strong>Cuarto Misterio Gozoso</strong>
        </button>
        <div class="modal fade" id="cuartoGozoso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">4° Misterio: La presentación de Jesús en el Templo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            «Cuando se cumplieron los ocho días para circuncidarle, se le dio el nombre de Jesús,<br>
                            como lo había llamado el ángel antes de ser concebido en el seno. <br>
                            Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, <br>
                            llevaron a Jesús a Jerusalén para presentarle al Señor, como está escrito <br>
                            en la Ley del Señor: Todo varón primogénito será consagrado al Señor y para ofrecer <br>
                            en sacrificio un par de tórtolas o dos pichones, conforme a lo que se dice<br>
                            en la Ley del Señor» (Lc 2, 21-24).
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