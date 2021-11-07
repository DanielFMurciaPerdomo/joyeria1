<template>
    <div>
        <ul class="menu">
            <li><router-link to="/inicio">Inicio</router-link></li>
            <li><router-link to="/anillos">Anillos</router-link></li>
            <li><router-link to="/aretes">Aretes</router-link></li>
            <li><router-link to="/pulseras">Pulseras</router-link></li>
            <li><router-link to="/gargantillas">Gargantillas</router-link></li>
            <li><router-link to="/dijes">Dijes</router-link></li>
            <li><router-link to="/contactos">Contacto</router-link></li>
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