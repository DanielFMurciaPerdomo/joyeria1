<template>
<div class="fondo1">
    <div class="titulo">
        <h1>Contacto proveedor</h1>
    </div>
    <div class="container">
        <div class="contact-wrapper animated bounceInUp">
                <div class="contact-form">
                    <h3>Escribe para contactarnos</h3>
                    <form action="">
                        <p>
                            <label for="nombre completo">Nombre Completo/Nombre Compañia</label>
                            <input type="text" name="fullname" id="nombre completo">
                        </p>
                        <p>
                            <label for="correo">Email</label>
                            <input type="email" name="email" id="correo">
                        </p>
                        <p>
                            <label for="telefono">Telefono de contacto</label>
                            <input type="tel" name="phone" id="telefono">
                        </p>
                        <p>
                            <label for="material">Materal a proveer</label>
                            <input type="text" name="affair" id="material">
                        </p>
                        <p class="block">
                            <label for="mensaje">Mensaje</label> 
                            <textarea name="message" rows="3" id="mensaje"></textarea>
                        </p>
                        <p class="block">
                            <button>
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
                <div class="contact-info">
                    <h4>Mas información</h4>
                    <ul>
                        <li> ❢ Fontibon, la cofradia</li>
                        <li> ☏ 647 00 10</li>
                        <li> ✉ joyaspablom@hotmail.com</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                    <p>Company.com</p>
                </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name:'Contacto',
}
</script>
<style>
@import '../assets/css/style.css';
</style>