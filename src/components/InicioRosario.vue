<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-2 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()" data-bs-toggle="modal" data-bs-target="#inicioRosario">
        <strong>INICIO</strong>
        </button>
        <div class="modal fade" id="inicioRosario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">Presencia de Dios</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            Por la señal de la Santa Cruz <i>(haciendo una cruz en la frente)</i>,<br>
                            de nuestros enemigos <i>(haciendo una cruz en la boca)</i>,<br>
                            libranos Señor Dios Nuestro <i>(haciendo una cruz en el corazón)</i>.<br>
                        </p>
                        <p>
                            En el Nombre del Padre, del Hijo y del Espíritu Santo, Amén.
                        </p>
                    </div>
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">Credo</h5>
                    </div>
                    <div class="modal-body fs-4">
                        <p>
                            "Creo en Dios Padre, Todopoderoso, Creador del cielo y de la tierra. <br>
                            Y en Jesucristo, su único Hijo, Nuestro Señor,<br>
                            que fue concebido por obra y gracia del Espíritu Santo.<br>
                            Nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato,<br>
                            fue crucificado, muerto y sepultado, descendió a los infiernos,<br>
                            al tercer día resucitó entre los muertos,<br>
                            subió a los cielos y está sentado a la derecha de Dios Padre, Todopoderoso.<br>
                            Desde allí ha de venir a juzgar a vivos y a muertos.<br>
                            Creo en el Espíritu Santo, la Santa Iglesia Católica, la comunión de los santos,<br>
                            el perdón de los pecados, la resurrección de la carne y la vida perdurable. Amén".
                        </p>
                    </div>
                    <div class="modal-header">
                        <h5 class="modal-title fs-2 mx-auto d-block" id="exampleModalLabel">Acto de Contrición</h5>
                    </div>
                    <div class="modal-body fs-4">
                        <p>	
                            "Pésame Dios mío y me arrepiento de todo corazón de haberos ofendido. <br>
                            Pésame por el infierno que merecí y por el cielo que perdí. <br>
                            Pero mucho más me pesa porque pecando ofendí a un Dios<br>
                            tan bueno y tan grande como Vos.<br>
                            Antes querría haber muerto que haberos ofendido.<br>
                            Y propongo firmemente no pecar más <br>
                            y evitar todas las ocaciones próximas de pecado, Amén".
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