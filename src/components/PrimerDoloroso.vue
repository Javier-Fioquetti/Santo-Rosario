<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#primerDoloroso">
        <strong>Primer Misterio</strong>
        </button>
        <div class="modal fade" id="primerDoloroso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-4 mx-auto d-block" id="exampleModalLabel">1° Misterio: La oración en el Huerto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-5">
                        <p>
                            «Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus<br>
                            discípulos: "Sentaos aquí mientras voy a orar". Y tomando consigo a Pedro y <br>
                            a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia. Entonces <br>
                            les dijo: "Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo".<br>
                            Y adelantándose un poco, cayó rostro en tierra, y suplicaba así: "Padre mío, si es posible,<br>
                            que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú"» (Mt 26, 36-39).  
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