<template>
    <div>
        <ul class="menu">
            <!-- <li><img class="logo" src="../assets/logo.png" alt="Logo Vue"></li> -->
            <!-- <li><router-link to="/inicio">Inicio</router-link></li>
            <li><router-link to="/proyectos">Proyectos</router-link></li>
            <li><router-link to="/habilidades">Habilidades</router-link></li>
            <li><router-link to="/experiencia">Experiencia</router-link></li>
            <li><router-link to="/contacto">Redes</router-link></li> -->
            <li><router-link to="/inicio">Inicio</router-link></li>
            <li><router-link to="/anillos">Anillos</router-link></li>
            <li><router-link to="/aretes">Aretes</router-link></li>
            <li><a to="/habilidades">Pulseras</a></li>
            <li><a to="/experiencia">Gargantillas</a></li>
            <li><a to="/contacto">Dijes</a></li>
            <li><a to="/contacto">Contacto</a></li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'Navegacion',
}
</script>
<style>
@import '../assets/css/style.css';
</style>