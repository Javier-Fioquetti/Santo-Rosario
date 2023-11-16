<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-image" style="background-image:  url('https://media.diariouno.com.ar/p/05c9a655d99b671c56663573176e75a2/adjuntos/298/imagenes/009/019/0009019432/1200x675/smart/como-rezar-el-rosariojpeg.jpeg');">
      <div class="btn-group-vertical">
        <router-link to="/historia" type="button" class="btn btn-outline-info">Historia del Rosario</router-link> 
        <router-link to="/comoRezar" type="button" class="btn btn-outline-info">Cómo Rezar</router-link> 
        <router-link to="/dolorosos" type="button" class="btn btn-outline-info">Misterios Dolorosos</router-link> 
        <router-link to="/gloriosos" type="button" class="btn btn-outline-info">Misterios Gloriosos</router-link> 
        <router-link to="/gozosos" type="button" class="btn btn-outline-info" >Misterios Gozosos</router-link> 
        <router-link to="/luminosos" type="button" class="btn btn-outline-info">Misterios Luminosos</router-link> 
      </div>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <router-view/>
</template>

<style>


</style>
