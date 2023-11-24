<template>
    <div class="card-body" >
        <button :style="{background: c}" type="button" class="btn btn-info .bg-info.bg-gradiente focus-ring-dark py-3 px-3 text-decoration-none border rounded-5 mx-auto d-block" @click="cambiaColor()">
        <strong></strong>
        </button>
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