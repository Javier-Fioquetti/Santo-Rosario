<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#salve">
        <strong></strong>
        </button>
        <div class="modal fade" id="salve" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">Salve</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; <br>
                            Dios te salve. A Ti llamamos los desterrados hijos de Eva; <br>
                            a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. <br>
                            Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos;<br>
                            y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. <br>
                            ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! <br>
                            Ruega por nosotros, Santa Madre de Dios, para que seamos dignos <br>
                            de alcanzar las divinas gracias y promesas de Nuestro Señor Jesucristo. <br>
                            Amén.
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