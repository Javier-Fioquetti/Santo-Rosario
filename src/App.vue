<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-image">
      <div class="btn-group-vertical">
          <router-link to="/historia" type="button" class="btn btn-outline-info">Historia del Rosario</router-link> 
          <router-link to="/comoRezar" type="button" class="btn btn-outline-info">Cómo Rezar</router-link>
          <router-link to="/dolorosos" type="button" class="btn btn-outline-info">Misterios Dolorosos</router-link>
          <router-link to="/gloriosos" type="button" class="btn btn-outline-info">Misterios Gloriosos</router-link>
          <router-link to="/gozosos" type="button" class="btn btn-outline-info" >Misterios Gozosos</router-link>
          <router-link to="/luminosos" type="button" class="btn btn-outline-info" >Misterios Luminosos</router-link>
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
  <div class="footer"></div>


  
</template>

<style lang="scss">
.footer {
  background-image: url('https://images.unsplash.com/photo-1639971802307-269101982f19?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
.bg-image {
  background-image: url('https://elobservadorenlinea.com/wp-content/uploads/2021/10/dante010-1586971040128-cathopic.jpg');
  background-size: cover;
  background-attachment: fixed;
}


</style>
