<template>
  <div class="home-main">
    <div class="home-index">
        <div class="container" style="max-width:100%">
            <section id="home">
            <section class="home">
                <div class="row">
                    <div class="col-lg-5 col-12" style="">
                        <div class="jumbotron" style="background-color:#003469; margin-top:15px; ">
                            <div class="title-home d-flex mb-1">
                                Hyundai Time
                            </div>
                            <div class="sub-title-home d-flex mb-3">
                                te acerca a tus sueños.
                            </div>
                            <div class="sub-sub-title-home d-flex">
                                Anota y para el mayor número de goles y acumula puntos.
                            </div>
                            <div class="des-home d-flex">
                                Recuerda que mientras más puntos ganes en el menor tiempo posible,
                                mayores probabilidades tendrás de ser el ganador
                                para asistir a un partido del Chelsea F.C. en Londres junto con un acompañante.
                            </div>
                            <div v-if="window.width > 991" class="botones-home">
                                <div class="mt-5" v-if="this.isLoggedIn == false">
                                    <div class="row" style="">
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button @click="$bvModal.show('agenciasHamburger')" class="button-mobile" style="margin-left: 0px; margin-bottom: 25px; color:#003469; background-color:#FFF !important;">Agenda tu prueba de manejo</b-button>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button class="button-mobile" style="color:#003469; margin-bottom: 25px; background-color:#FFF" v-b-modal.registro2 >Regístrate y gana</b-button>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button class="button-mobile boton-jugar" style=" color:#003469; background-color:#FFF"  v-b-modal.modal-1>Inicia sesión y juega</b-button>
                                        </div>
                                    <!-- <div class="col-8 d-flex justify-content-start">
                                        <b-button class="button-mobile" style="color:#003469; background-color:#FFF" v-b-modal.registro2 >Registrarse</b-button>
                                    </div> -->
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="row mt-5" style="">
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button @click="$bvModal.show('agenciasHamburger')" class="" style="color:#003469; background-color:#FFF; margin-bottom: 30px">Agenda tu prueba de manejo</b-button>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <div v-if="this.loggedInUser.max_games - this.loggedInUser.games.length > 0"><router-link class="b-play" style="" to="game"><b-button type="button" class="button-mobile b-play" style="padding:20px 100px; color:#FFF; background-color:#00b0f0; font-size:30px;">Jugar</b-button></router-link></div>
                                            <div v-else><b-button v-on:click="noGamesAlert" title="No cuentas con juegos disponibles" type="button" class="button-mobile b-play" style="padding:20px 100px; color:#FFF; background-color:#00b0f0; font-size:30px;">Jugar</b-button></div>
                                            <!-- <b-button type="button" v-on:click="logOut()" class="button-mobile" style="color:#003469; background-color:#FFF" >Cerrar Sesión</b-button> -->
                                        </div>
                                    <!-- <div class="col-8 d-flex justify-content-start">
                                        <b-button type="button" v-on:click="logOut()" class="button-mobile" style="color:#003469; background-color:#FFF" >Cerrar Sesión</b-button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="mt-5" v-if="this.isLoggedIn == false">
                                    <div class="row mr-0 ml-0" style="max-width:100%">
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button @click="$bvModal.show('agencias')" class="button-mobile" style="color:#003469; background-color:#FFF">Agenda tu prueba de manejo</b-button>
                                        </div>
                                    </div>
                                    <div class="row mr-0 ml-0" style="max-width:100%; margin-top: 30px">
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button class="button-mobile" style="color:#003469; background-color:#FFF" v-b-modal.registro2 >Regístrate y gana</b-button>
                                        </div>
                                    </div>
                                    <div class="row mr-0 ml-0" style="max-width:100%; margin-top: 30px">
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button class="button-mobile" style="color:#003469; background-color:#FFF"  v-b-modal.modal-1 >Inicia sesión y juega</b-button>
                                        </div>
                                    </div>
                                    
                                    <!-- <div class="row mr-0 ml-0" style="max-width:100%; margin-top: 30px">
                                    <div class="col-12 d-flex justify-content-center">
                                        <b-button v-b-modal.agencias class="button-mobile" style="color:#003469; background-color:#FFF">Agenda tu prueba de manejo</b-button>
                                    </div>
                                    </div> -->
                                </div>
                                <div v-else>
                                    <div class="row mr-0 ml-0" style="max-width:100%; margin-top: 30px">
                                        <div class="col-12 d-flex justify-content-center">
                                            <b-button @click="$bvModal.show('agencias')" class="" style="color:#003469; background-color:#FFF; margin-bottom: 30px">Agenda tu prueba de manejo</b-button>
                                        </div>
                                        <div class="col-12 d-flex justify-content-center">
                                            <div v-if="this.loggedInUser.max_games - this.loggedInUser.games.length > 0"><router-link to="/game"><b-button type="button" class="button-mobile b-play" style="padding:15px 80px; color:#FFF; background-color:#00b0f0; font-size:30px;">Jugar</b-button></router-link></div>
                                            <div v-else><b-button v-on:click="noGamesAlert" title="No cuentas con juegos disponibles" type="button" class="button-mobile b-play" style="padding:15px 80px; color:#FFF; background-color:#00b0f0; font-size:30px;">Jugar</b-button></div>
                                        </div>
                                    </div>
                                    <div class="row mr-0 ml-0" style="max-width:100%; margin-top: 30px">
                                        <div class="col-12 d-flex justify-content-center">
                                            <!-- <b-button type="button" v-on:click="logOut()" class="button-mobile" style="color:#003469; background-color:#FFF" >Cerrar Sesión</b-button> -->
                                        </div>
                                    </div>
                                    <!-- <div class="row mr-0 ml-0" style="max-width:100%; margin-top: 30px">
                                    <div class="col-12 d-flex justify-content-center">
                                        <b-button v-b-modal.agencias class="button-mobile" style="color:#003469; background-color:#FFF">Agenda tu prueba de manejo</b-button>
                                    </div>
                                    </div> -->
                                </div>
                            </div>
                            <!-- <b-button class="btn btn-primary btn-sm" v-b-modal.mreglas>Instrucciones</b-button> -->
                            <b-modal id="mreglas"  title="" size="lg" class="" style="font-weight:bold; border-color:transparent" centered hide-footer >
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <h1 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Instrucciones del juego</h1>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <h5 class="title-modal">Para desktop</h5>
                                                <p>
                                                    Da click en el mouse para tirar y direccionar el balón. Para atajar da click y mueve
                                                    los guantes con el mouse. Si tu máquina tiene pad, deslízate hacia donde quieres
                                                    direccionar el balón o los guantes.
                                                </p>

                                                <h5 class="title-modal" style="margin-top: 20px;"> Para dispositivos móviles</h5>
                                                <p>
                                                    Toca la pantalla y desliza hacia donde quieras direccionar el balón o cuando juegas
                                                    como portero hacia donde quieras mover los guantes.
                                                    <!-- Para instrucciones más detalladas visita <a data-target="#myModal" data-toggle="modal" class="MainNavText" id="MainNavHelp" href="collapse-1">“INSTRUCCIONES DE JUEGO”.</a> -->
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-12 col-md-6 d-flex justify-content-between mt-2">
                                                <table class="table">
                                                    <thead>
                                                        <tr scope="col">
                                                            <th class="head-t" style="color: #003469;">Acción como tirador</th>
                                                            <th class="head-t" style="color: #003469;">Puntos</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row" class="head-t">Gol anotado</td>
                                                            <td scope="row" class="head-t">10</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row" class="head-t">Gol fallado</td>
                                                            <td scope="row" class="head-t">-5</td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                            <div class="col-12 col-md-6 d-flex justify-content-between mt-2" >
                                                <table class="table">
                                                    <thead>
                                                        <tr scope="col">
                                                            <th class="head-t" style="color: #003469;">Acción como portero</th>
                                                            <th class="head-t" style="color: #003469;">Puntos</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row" class="head-t">Atajada exitosa</td>
                                                            <td scope="row" class="head-t">5</td>
                                                        </tr>
                                                        <tr>
                                                            <td scope="row" class="head-t">Atajada no exitosa</td>
                                                            <td scope="row" class="head-t">-5</td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="d-flex justify-content-center">
                                                    Para instrucciones más detalladas haz click
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                <a class="dflex" v-b-toggle.collapse-1 style="cursor:pointer; color:#003469; font-size:15px">  “AQUÍ”.</a>
                                                </div>
                                                <b-collapse id="collapse-1" class="mt-2">
                                                    <b-card style="border:none">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12  rules">

                                                                    <h1 style="font-weight:bold ; font-size:18px; color:#003469 "> Instrucciones de Juego HYUNDAI TIME</h1>
                                                                    <p class="card-text">
                                                                        Para poder acceder al juego, el interesado deberá ingresar a www.hyuindaitimepromo.mx
                                                                        y registrarse.  Para el registro deberá capturar los siguientes datos: Código único, nombre, edad,
                                                                        género, modelo Hyundai de interés y correo electrónico. Deberá aceptar términos, condiciones y
                                                                        aviso de privacidad, así como la cesión de derechos de uso de imagen para videos o fotos que se requieran
                                                                        con fines publicitarios de la promoción.
                                                                    </p>
                                                                    <ul class="puntos">
                                                                        <li> <p>● Dará click en “REGISTRO”.</p> </li>
                                                                        <li><p>● Al momento de registrarse, se le solicitará al participante crear un usuario y contraseña.</p></li>
                                                                        <li><p>● Una vez dentro dar click en “JUGAR”.</p></li>
                                                                    </ul>

                                                                    <p>
                                                                        El juego consiste en tirar a gol 5 veces y parar tiros del oponente (computadora) 5 veces. Los tiros y
                                                                        las atajadas serán intercaladas. Un tiro, una atajada, un tiro, una atajada y así sucesivamente,
                                                                        teniendo 10 oportunidades a total.
                                                                    </p>
                                                                    <p>
                                                                        Al finalizar los 5 tiros y las 5 atajadas, el puntaje y el tiempo aparecerán en pantalla. La puntuación
                                                                        se guardará cada vez que juegues al terminar tu quinta atajada, hasta el término de la promoción.
                                                                    </p>
                                                                    <p>
                                                                        Al finalizar el juego, el usuario podrá registrar hasta 3 correos electrónicos válidos de personas
                                                                        mayores de 18 años con el propósito de invitarlos a realizar una prueba de manejo en cualquier
                                                                        Distribuidor Autorizado Hyundai participante. Por cada amigo que refiera, se le otorgará una oportunidad
                                                                        extra de jugar (si refiere sólo a uno se le otorgará una oportunidad extra de acumular puntos, si refiere
                                                                        dos serán dos oportunidades extras, y si son tres serán tres oportunidades extras).
                                                                    </p>
                                                                    <p>
                                                                        Los puntos de juegos subsecuentes obtenidos gracias a los juegos adicionales por referir familiares y/o
                                                                        amigos se irán sumando al puntaje del participante. Una vez terminado cada juego, los datos de puntos y tiempo
                                                                        le serán enviados vía correo electrónico al jugador.
                                                                    </p>
                                                                    <p>
                                                                        Si los referidos del participante acuden a realizar su prueba de manejo y se registran para participar, la dinámica
                                                                        para participar será la misma y al participante que lo refirió, le llegará una notificación vía correo electrónico
                                                                        con la notificación de que tiene “una oportunidad extra” para jugar.
                                                                    </p>
                                                                    <p>
                                                                        Teniendo así cada participante, hasta 7 oportunidades de juego en el caso que sus 3 amigos acudan a un
                                                                        Distribuidor Autorizado Hyundai participante a realizar una prueba de manejo de cualquier vehículo Hyundai.
                                                                    </p>
                                                                    <h2 class="puntos">Puntos del juego</h2>
                                                                    <p>A continuación, se muestran las tablas de puntuación de cada tiro o atajada:</p>
                                                                    <h3>TABLAS DE PUNTOS POR TIPO DE TIRO</h3>
                                                                    <div class="table-rules">
                                                                        <table class="table table-bordered table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col" style="width:75%">ACCIÓN COMO TIRADOR</th>
                                                                                    <th scope="col" style="width:25%">PUNTOS</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th scope="row" style="width:75%">Gol anotado</th>
                                                                                    <td style="width:25%">10</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" style="width:75%">Gol fallado</th>
                                                                                    <td style="width:25%">-5</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                            <div class="space"></div>
                                                                            <div class="space"></div>
                                                                            <div class="space"></div>
                                                                        <table class="table table-bordered table-striped">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col" style="width:75%">ACCIÓN COMO PORTERO</th>
                                                                                    <th scope="col" style="width:25%">PUNTOS</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th scope="row" style="width:75%">Atajada exitosa</th>
                                                                                    <td style="width:25%">5</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" style="width:75%">Atajada no exitosa (gol del oponente)</th>
                                                                                    <td style="width:25%">-5</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    <p>El ganador será quien al término de la promoción, obtenga el mayor puntaje en el menor tiempo posible.</p>
                                                                    <h3>INSTRUCCIONES DETALLADAS PARA JUGAR</h3>
                                                                    <p>Este manual describe la funcionalidad del juego HYUNDAI TIME tanto para su uso en dispositivos móviles como en laptop/PC. </p>
                                                                    <h4>Jugar en dispositivo móvil </h4>
                                                                    <div class="navbar navbar-default navbar-fixed-top">
                                                                        <div class="container">
                                                                        <p>
                                                                            1. El equipo debe estar en posición horizontal para que el juego funcione en pantalla completa.
                                                                            <br />
                                                                            2. Seleccionar el botón “JUGAR”.
                                                                            <br />
                                                                            <br />
                                                                            ● Tirador
                                                                        </p>
                                                                        <ul>
                                                                            <li>1. Es necesario tocar la pantalla para deslizar el balón con dirección hacia la portería.
                                                                        La velocidad con la que se realiza el movimiento determina la fuerza del disparo.</li>


                                                                            <ul>
                                                                            <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol.</li>
                                                                            <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa.</li>

                                                                            </ul>
                                                                        </ul>
                                                                        <div class="row" style="width:90%">
                                                                        <p class="ml-2">● Portero </p>
                                                                        </div>
                                                                        <br>
                                                                        <ul>

                                                                            <li>1. Es necesario tocar la pantalla una vez para que el jugador tire. </li>
                                                                            <li>2. Para impedir que el balón entre en la portería se deberán deslizar los guantes hacía la dirección del balón para bloquearlo.</li>
                                                                            <ul>
                                                                                <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol para el oponente (computadora). </li>
                                                                                <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa .</li>
                                                                            </ul>
                                                                        </ul>
                                                                        </div>
                                                                    </div>
                                                                    <h4>Jugar en Laptop/PC</h4>
                                                                    <div class="navbar navbar-default navbar-fixed-top">
                                                                        <div class="container">
                                                                        <p>
                                                                            1. Seleccionar el botón “JUGAR”.
                                                                            <br />
                                                                            <br />
                                                                            ● Tirador
                                                                        </p>

                                                                        <ul>
                                                                            <li>1. Utilizando el mouse, deslizar el balón con dirección hacia la portería. La velocidad con la que se realiza el movimiento determina la fuerza del disparo.</li>
                                                                            <ul>
                                                                                <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol.</li>
                                                                                <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa.</li>

                                                                            </ul>
                                                                        </ul>
                                                                        <div class="row" style="width:90%">
                                                                        <p class="ml-2">● Portero </p>
                                                                        </div>
                                                                        <br>
                                                                        <ul>
                                                                            <li>1. Es necesario dar click a la pantalla una vez para que el jugador tire.</li>
                                                                            <li>2. Para impedir que el balón entre en la portería se deberán deslizar los guantes hacía la dirección del balón para bloquearlo. </li>
                                                                            <ul>
                                                                                <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol para el oponente (computadora).</li>
                                                                                <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa.</li>
                                                                            </ul>
                                                                        </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-modal>
                            <b-modal id="modal-1"  title="" size="lg" class="" style="font-weight:bold; border-color:transparent" centered hide-footer >
                                <div class="row">
                                    <div class="col-12">
                                        <h1 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Inicio de sesión</h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <form @submit.prevent="handleSubmitLogin">
                                            <div class="form-group" style="font-style: italic">
                                                <label for="Correo"></label>
                                                <input placeholder="Correo" type="email" v-model="user.email" id="correo" name="correo" class="form-control" :class="{ 'is-invalid': submitted2 && $v.user.email.$error }" />
                                                <div v-if="submitted2 && !$v.user.email.required" class="invalid-feedback">Correo Requerido</div>
                                                <div v-if="submitted2 && !$v.user.email.email" class="invalid-feedback">Correo Inválido</div>

                                            </div>
                                            <div class="form-group" style="font-style: italic">
                                                <label for="password"></label>
                                                <input placeholder="Contraseña" type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted2 && $v.user.password.$error }" />
                                                <div v-if="submitted2 && !$v.user.password.required" class="invalid-feedback">Contraseña Requerida</div>
                                                <div v-if="submitted2 && !$v.user.password.minLength" class="invalid-feedback">Contraseña debe contener 8 caracteres mínimo</div>

                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary">Ingresar</button>
                                                <div class="mt-3 ml-2" style="color:#003469; font-weight: bold;">
                                                    Si no cuentas con un usuario y contraseña regístrate <a href="#" style="color:#003469; font-style:italic; text-decoration:underline" v-b-modal.registro2 title="Tooltip in a modal!">aquí</a>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-start">
                                                    <div class="" style="">
                                                    <a @click="forgotPassword()"   style="cursor:pointer;font-style: italic;color:#003469; text-decoration:underline">RECUPERAR CONTRASEÑA</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="d-flex" style="color:red">
                                                        {{this.changePassword}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 d-flex justify-content-center">
                                                    <div class="" style="color:red">
                                                    {{this.responseError}}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </b-modal>
                            <b-modal id="registro2"  title="" size="lg" class="" style="font-weight:bold; border-color:transparent" centered  hide-footer >
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h1 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Registro</h1>
                                    </div>
                                </div>
                                <form @submit.prevent="handleButton">
                                <div class="form-group">
                                    <label for="firstName"></label>
                                    <input placeholder="Nombre Completo" type="text" v-model="registerUser.app_user.name" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.name.$error }" />
                                    <div v-if="submitted && !$v.registerUser.app_user.name.required" class="invalid-feedback">Nombre completo requerido</div>
                                </div>
                                <div class="form-group">
                                    <div class="form-row align-items-center">
                                        <div class="col-12 col-lg-4 my-1">
                                        <span class="mr-3 ml-3" style="font-weight: bold; color:#003469;font-style: italic">Edad</span>
                                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                        <select v-model="registerUser.app_user.age"  class="form-control custom-select" id="inlineFormCustomSelect" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.age.$error }" >
                                            <option selected></option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                            <option value="60">60</option>
                                            <option value="61">61</option>
                                            <option value="62">62</option>
                                            <option value="63">63</option>
                                            <option value="64">64</option>
                                            <option value="65">65</option>
                                            <option value="66">66</option>
                                            <option value="67">67</option>
                                            <option value="68">68</option>
                                            <option value="69">69</option>
                                            <option value="70">70</option>
                                            <option value="71">71</option>
                                            <option value="72">72</option>
                                            <option value="73">73</option>
                                            <option value="74">74</option>
                                            <option value="75">75</option>
                                            <option value="76">76</option>
                                            <option value="77">77</option>
                                            <option value="78">78</option>
                                            <option value="79">79</option>
                                            <option value="80">80</option>
                                            <option value="81">81</option>
                                            <option value="82">82</option>
                                            <option value="83">83</option>
                                            <option value="84">84</option>
                                            <option value="85">85</option>
                                            <option value="86">86</option>
                                            <option value="87">87</option>
                                            <option value="88">88</option>
                                            <option value="89">89</option>
                                            <option value="90">90</option>
                                            <option value="91">91</option>
                                            <option value="92">92</option>
                                            <option value="93">93</option>
                                            <option value="94">94</option>
                                            <option value="95">95</option>
                                            <option value="96">96</option>
                                            <option value="97">97</option>
                                            <option value="98">98</option>
                                            <option value="99">99</option>
                                        </select>
                                        <div v-if="submitted && !$v.registerUser.app_user.age.required" class="invalid-feedback">Seleccione Edad</div>
                                        </div>
                                        <div class="col-12 col-lg-2 d-flex">
                                            <div class="margin-auto" style="font-weight: bold; color:#003469;font-style: italic;">
                                                Género
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-2 my-1 ">
                                            <!-- <input type="radio" name="radio-1" id="radio-1" value="angular"
                                            v-model="selection.framework"> -->
                                        <b-form-radio v-model.number="registerUser.app_user.gender" class="form-control" type="number"   name="some-radios" value="1" style="font-style: italic;color: #003469;" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.gender.$error }">Mujer</b-form-radio>
                                        </div>
                                        <div class="col-12 col-lg-2 my-1">
                                        <b-form-radio v-model.number="registerUser.app_user.gender" class="form-control" type="number"  name="some-radios" value="0" style="font-style: italic;color: #003469; margin-right:40px" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.gender.$error }">Hombre</b-form-radio>
                                        </div>
                                        <div v-if="submitted && !$v.registerUser.app_user.gender.required" class="invalid-feedback">Seleccione Genero</div>
                                        <!-- <div class="col-2">
                                        </div> -->
                                        <hr class="line">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-row align-items-center">
                                    <div class="col-12 col-lg-5 my-1">
                                        <span class="mr-2 ml-3" style="font-weight: bold; color:#003469;font-style: italic">Estado</span>
                                        <select v-model="registerUser.app_user.state"  class="form-control custom-select" id="inlineFormCustomSelectState" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.state.$error }">
                                            <option selected></option>
                                            <option value="0">Aguascalientes</option>
                                            <option value="1">Baja California</option>
                                            <option value="2">Baja California Sur</option>
                                            <option value="3">Campeche</option>
                                            <option value="4">Chihuahua</option>
                                            <option value="5">Chiapas</option>
                                            <option value="6">Ciudad de México</option>
                                            <option value="7">Coahuila</option>
                                            <option value="8">Colima</option>
                                            <option value="9">Durango</option>
                                            <option value="10">Guerrero</option>
                                            <option value="11">Guanajuato</option>
                                            <option value="12">Hidalgo</option>
                                            <option value="13">Jalisco</option>
                                            <option value="14">Mexico</option>
                                            <option value="15">Michoacan</option>
                                            <option value="16">Morelos</option>
                                            <option value="17">Nayarit</option>
                                            <option value="18">Nuevo Leon</option>
                                            <option value="19">Oaxaca</option>
                                            <option value="20">Puebla</option>
                                            <option value="21">Queretaro</option>
                                            <option value="22">Quintana Roo</option>
                                            <option value="23">Sinaloa</option>
                                            <option value="24">San Luis Potosi</option>
                                            <option value="25">Sonora</option>
                                            <option value="26">Tabasco</option>
                                            <option value="27">Tamaulipas</option>
                                            <option value="28">Tlaxcala</option>
                                            <option value="29">Veracruz</option>
                                            <option value="30">Yucatan</option>
                                            <option value="31">Zacatecas</option>
                                        </select>
                                        <div v-if="submitted && !$v.registerUser.app_user.state.required" class="invalid-feedback">Seleccione Estado</div>
                                    </div>
                                    <hr class="line">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email"></label>
                                    <input placeholder="Correo Electrónico" type="email" v-model="registerUser.app_user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.email.$error }" />
                                    <div v-if="submitted && !$v.registerUser.app_user.email.required" class="invalid-feedback">
                                        Introduzca su correo electrónico
                                    </div>
                                    <div v-if="submitted && !$v.registerUser.app_user.email.email" class="invalid-feedback">
                                        Correo es Inválido
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password"></label>
                                    <input placeholder="Contraseña" type="password" v-model="registerUser.app_user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.password.$error }" />
                                    <small>
                                        Tu contraseña debe ser de mínimo 8 caracteres
                                    </small>
                                    <div v-if="submitted && !$v.registerUser.app_user.password.required" class="invalid-feedback">
                                        Ingrese una contraseña
                                    </div>
                                    <div v-if="submitted && !$v.registerUser.app_user.password.minLength" class="invalid-feedback">
                                        La contraseña debe tener al menos 8 caracteres
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="passwordConfirmation"></label>
                                    <input placeholder="Confirmar Contraseña" type="password" v-model="registerUser.app_user.password_confirmation" id="passwordConfirmation" name="passwordConfirmation" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.password_confirmation.$error }" />
                                    <div v-if="submitted && !$v.registerUser.app_user.password_confirmation.required" class="invalid-feedback">
                                        Ingrese confirmación de contraseña
                                    </div>
                                    <div v-else-if="submitted && !$v.registerUser.app_user.password_confirmation.sameAs" class="invalid-feedback">
                                        La contraseña no coincide
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="vehiculo"></label>
                                    <input placeholder="Vehículo Hyundai de interés" type="text" v-model="registerUser.app_user.hyundai_vehicle" id="vehiculo" name="vehiculo" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.hyundai_vehicle.$error }" />
                                    <div v-if="submitted && !$v.registerUser.app_user.hyundai_vehicle.required" class="invalid-feedback">
                                        Introduzca Vehículo de Interés
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="code"></label>
                                    <input placeholder="Código" type="text" v-model="registerUser.app_user.code" id="codigo" name="codigo" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.code.$error }" />
                                    <div v-if="submitted && !$v.registerUser.app_user.code.required" class="invalid-feedback">Introduzca un código</div>
                                    <!-- <input name="fruit" v-model="$v.fruit.$model" /> -->
                                    <!-- <p v-if="$v.code.$error">Introduzca un código válido</p> -->
                                    <!-- <div v-else-if="
                                    Vehículo Hyundai de interés
                                    submitted && this.status == 'code'" class="invalid-feedback">
                                        Introduzca un código válido
                                    </div> -->
                                </div>
                                <div class="form-group termss">
                                    <div v-if="this.browser === 'IE'">
                                        <input  type="checkbox" v-model="userRegister.app_user.terms" id="terms" name="terms" class="check-terms-IE custom-control-input termss" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.terms.$error }" />
                                    <label for="terms" style="font-style: italic; color:#003469; margin-right:5px">He Leído y acepto </label>
                                    <a href="./pdfs/BASES-LEGALES_TERMINOS Y CONDICIONES .pdf" target="_blank"  style="font-style: italic;color:#003469; text-decoration:underline">Términos y condiciones,</a>
                                    <a href="./pdfs/AVISO-PRIVACIDAD.pdf" target="_blank"  style="font-style: italic;color:#003469; text-decoration:underline"> Aviso de privacidad</a> y
                                    <a href="./pdfs/LIBERACION.pdf" target="_blank"  style="font-style: italic;color:#003469; text-decoration:underline"> Carta de aceptación de uso de imagen</a>
                                    <div v-if="submitted && !$v.registerUser.app_user.terms.sameAs" class="invalid-feedback">Debe aceptar Términos y condiciones, Aviso de privacidad y Carta de aceptación de uso de imagen</div>
                                    </div>
                                    <div v-else>
                                        <input  type="checkbox" v-model="registerUser.app_user.terms" id="terms" name="terms" class="check-terms custom-control-input termss" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.terms.$error }" />
                                        <label for="terms" style="font-style: italic; color:#003469; margin-right:5px">He Leído y acepto </label>
                                        <a href="./pdfs/BASES-LEGALES_TERMINOS Y CONDICIONES .pdf" target="_blank"  style="font-style: italic;color:#003469; text-decoration:underline">Términos y condiciones,</a>
                                        <a href="./pdfs/AVISO-PRIVACIDAD.pdf" target="_blank"  style="font-style: italic;color:#003469; text-decoration:underline"> Aviso de privacidad</a> y
                                        <a href="./pdfs/LIBERACION.pdf" target="_blank"  style="font-style: italic;color:#003469; text-decoration:underline"> Carta de aceptación de uso de imagen</a>
                                        <div v-if="submitted && !$v.registerUser.app_user.terms.sameAs" class="invalid-feedback">Debe aceptar Términos y condiciones, Aviso de privacidad y Carta de aceptación de uso de imagen</div>
                                    </div>
                                </div>
                                <b-button v-b-toggle.collapse-referFriends variant="primary" style="margin-right:30px; color:white; background-color:#003469; font-weight:bolder">Siguiente</b-button>
                                <b-collapse id="collapse-referFriends" class="mt-2">
                                    <b-card>
                                    <div class="row">
                                        <div class="col-12">
                                            <h2 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Refiere a 3 amigos y obtén más oportunidades de jugar y acumular puntos.</h2>
                                            <!-- <h2 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Refiere a 3 amigos.</h2> -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center">
                                            <div class="d-flex" style="color:red">
                                                {{this.referFriends}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="invite"></label>
                                        <input placeholder="Correo 1" type="email" v-model="registerUser.app_user.invite" id="" name="invite" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.invite.$error }" />
                                        <div v-if="submitted && !$v.registerUser.app_user.invite.email" class="invalid-feedback">
                                        Correo es Inválido
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="invite2"></label>
                                        <input placeholder="Correo 2" type="email" v-model="registerUser.app_user.invite2" id="" name="invite2" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.invite2.$error }" />
                                        <div v-if="submitted && !$v.registerUser.app_user.invite2.email" class="invalid-feedback">Correo Es Inválido</div>
                                    </div>
                                    <div class="form-group">
                                        <label for="invite3"></label>
                                        <input placeholder="Correo 3" type="email" v-model="registerUser.app_user.invite3" id="" name="invite3" class="form-control" :class="{ 'is-invalid': submitted && $v.registerUser.app_user.invite3.$error }" />
                                        <div v-if="submitted && !$v.registerUser.app_user.invite3.email" class="invalid-feedback">Correo Es Inválido</div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-12">
                                            <button v-on:click="withFriends()" class="button-mobile mt-3" style="margin-right:30px; color:#FFF; background-color:#003469; font-weight: bold;">Enviar</button>
                                            <button v-on:click="withoutFriends()" class="button-mobile mt-3" style="margin-right:30px; color:#FFF; background-color:#003469; font-weight: bold;">Omitir Y Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center">
                                            <div class="d-flex" style="color:red">
                                                {{this.fields}}
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <b-button v-on:click="register()" class="button mt-3" size='lg' style="margin-right:30px; color:#FFF; background-color:#003469; font-weight: bold;">Omitir y Enviar</b-button> -->
                                    </b-card>
                                </b-collapse>
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-center">
                                        <div class="" style="color:red">
                                            {{this.status}}
                                        </div>
                                    </div>
                                </div>
                            </form>
                            </div>
                            </b-modal>
                        </div>
                    </div>
                    <div class=" col-lg-7 col-12 " style="margin-bottom: 35px">
                    <img src="../assets/images/HW-IMAGEN.png" class="img-fluid img-header-p"  alt="team">
                    </div>
                </div>
            </section>
            </section>
        </div>
    </div>
    <div class="contenedor-dinamica">
        <section id="dinamica">
        <section class="dinamica">
            <div class="container py-5">
                <div class="row pb-5">
                    <div class="col-12 dinamica-title col-md-12 d-flex justify-content-center">
                        <h1 style="text-align: center;">Dinámica de Promoción</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 icon d-flex flex-column justify-content-end">
                        <div class="iconos">
                            <img class="" src="../assets/images/ICONOS-01.png" alt="">
                        </div>
                        <div class="">
                            <p class="pt-3">
                                Visita tu Distribuidor Autorizado Hyundai más <br>
                                cercano y haz una prueba de manejo de <br>
                                cualquier vehículo.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 icon d-flex flex-column justify-content-end">
                        <div class="iconos">
                            <img class="" src="../assets/images/ICONOS-02.png" alt="">
                        </div>
                        <div class="iconos">
                            <p class="pt-3">
                                Recibe un regalo al instante y <br>
                                un boleto con un código <br>
                                único para participar.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 icon d-flex flex-column justify-content-end">
                        <div class="iconos">
                            <img class="" src="../assets/images/ICONOS-03.png" alt="">
                        </div>
                        <div class="">
                            <p class="pt-3">
                                Entra a www.hyundaitimepromo.mx, <br>
                                registra tu código para jugar <br>
                                y acumula puntos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
            <div class="row">
                    <div class="col-12 col-md-6 icon d-flex flex-column justify-content-end">
                        <div class="iconos">
                            <img src="../assets/images/ICONOS-05.png" alt="">
                        </div>
                        <div class="">
                            <p class="pt-3">
                                Invita a tu familia y amigos a <br>
                                realizar una prueba de manejo y ten <br>
                                la oportunidad de acumular más puntos.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 icon d-flex flex-column justify-content-end">
                        <div class="iconos">
                            <img src="../assets/images/ICONOS-06.png" alt="">
                        </div>
                        <div class="">
                            <p class="pt-3">El participante con más puntos en el menor <br>
                                tiempo posible será el ganador de un viaje doble <br>
                                para asistir a un partido del Chelsea en Londres.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
        <div class="container">
            <div class="row mt-4">
                <div class="col-12">
                    <div>
                        <section id="instrucciones">
                        <section class="instrucciones">
                        <b-button v-b-toggle.collapse-1 variant="primary"><h2 class="mb-0 mt-2" style="font-weight:bold">INSTRUCCIONES DEL JUEGO</h2></b-button>
                        </section>
                        </section>
                        <b-collapse id="collapse-1" class="mt-2">
                            <b-card style="border:none">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12  rules">

                                            <h1 style="font-weight:bold ; font-size:18px; color:#003469 "> Instrucciones de Juego HYUNDAI TIME</h1>
                                            <p class="card-text">
                                                Para poder acceder al juego, el interesado deberá ingresar a www.hyuindaitimepromo.mx
                                                y registrarse.  Para el registro deberá capturar los siguientes datos: Código único, nombre, edad,
                                                género, modelo Hyundai de interés y correo electrónico. Deberá aceptar términos, condiciones y
                                                aviso de privacidad, así como la cesión de derechos de uso de imagen para videos o fotos que se requieran
                                                con fines publicitarios de la promoción.
                                            </p>
                                            <ul class="puntos">
                                                <li> <p>● Dará click en “REGISTRO”.</p> </li>
                                                <li><p>● Al momento de registrarse, se le solicitará al participante crear un usuario y contraseña.</p></li>
                                                <li><p>● Una vez dentro dar click en “JUGAR”.</p></li>
                                            </ul>

                                            <p>
                                                El juego consiste en tirar a gol 5 veces y parar tiros del oponente (computadora) 5 veces. Los tiros y
                                                las atajadas serán intercaladas. Un tiro, una atajada, un tiro, una atajada y así sucesivamente,
                                                teniendo 10 oportunidades a total.
                                            </p>
                                            <p>
                                                Al finalizar los 5 tiros y las 5 atajadas, el puntaje y el tiempo aparecerán en pantalla. La puntuación
                                                se guardará cada vez que juegues al terminar tu quinta atajada, hasta el término de la promoción.
                                            </p>
                                            <p>
                                                Al finalizar el juego, el usuario podrá registrar hasta 3 correos electrónicos válidos de personas
                                                mayores de 18 años con el propósito de invitarlos a realizar una prueba de manejo en cualquier
                                                Distribuidor Autorizado Hyundai participante. Por cada amigo que refiera, se le otorgará una oportunidad
                                                extra de jugar (si refiere sólo a uno se le otorgará una oportunidad extra de acumular puntos, si refiere
                                                dos serán dos oportunidades extras, y si son tres serán tres oportunidades extras).
                                            </p>
                                            <p>
                                                Los puntos de juegos subsecuentes obtenidos gracias a los juegos adicionales por referir familiares y/o
                                                amigos se irán sumando al puntaje del participante. Una vez terminado cada juego, los datos de puntos y tiempo
                                                le serán enviados vía correo electrónico al jugador.
                                            </p>
                                            <p>
                                                Si los referidos del participante acuden a realizar su prueba de manejo y se registran para participar, la dinámica
                                                para participar será la misma y al participante que lo refirió, le llegará una notificación vía correo electrónico
                                                con la notificación de que tiene “una oportunidad extra” para jugar.
                                            </p>
                                            <p>
                                                Teniendo así cada participante, hasta 7 oportunidades de juego en el caso que sus 3 amigos acudan a un
                                                Distribuidor Autorizado Hyundai participante a realizar una prueba de manejo de cualquier vehículo Hyundai.
                                            </p>
                                            <h2 class="puntos">Puntos del juego</h2>
                                            <p>A continuación, se muestran las tablas de puntuación de cada tiro o atajada:</p>
                                            <h3>TABLAS DE PUNTOS POR TIPO DE TIRO</h3>
                                            <div class="table-rules">
                                                <table class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" style="width:75%">ACCIÓN COMO TIRADOR</th>
                                                            <th scope="col" style="width:25%">PUNTOS</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style="width:75%">Gol anotado</th>
                                                            <td style="width:25%">10</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" style="width:75%">Gol fallado</th>
                                                            <td style="width:25%">-5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                    <div class="space"></div>
                                                    <div class="space"></div>
                                                    <div class="space"></div>
                                                <table class="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" style="width:75%">ACCIÓN COMO PORTERO</th>
                                                            <th scope="col" style="width:25%">PUNTOS</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style="width:75%">Atajada exitosa</th>
                                                            <td style="width:25%">5</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row" style="width:75%">Atajada no exitosa (gol del oponente)</th>
                                                            <td style="width:25%">-5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <p>El ganador será quien al término de la promoción, obtenga el mayor puntaje en el menor tiempo posible.</p>
                                            <h3>INSTRUCCIONES DETALLADAS PARA JUGAR</h3>
                                            <p>Este manual describe la funcionalidad del juego HYUNDAI TIME tanto para su uso en dispositivos móviles como en laptop/PC. </p>
                                            <h4>Jugar en dispositivo móvil </h4>
                                            <div class="navbar navbar-default navbar-fixed-top">
                                                <div class="container">
                                                <p>
                                                    1. El equipo debe estar en posición horizontal para que el juego funcione en pantalla completa.
                                                    <br />
                                                    2. Seleccionar el botón “JUGAR”.
                                                    <br />
                                                    <br />
                                                    ● Tirador
                                                </p>
                                                <ul>
                                                    <li>1. Es necesario tocar la pantalla para deslizar el balón con dirección hacia la portería.
                                                La velocidad con la que se realiza el movimiento determina la fuerza del disparo.</li>


                                                    <ul>
                                                    <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol.</li>
                                                    <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa.</li>

                                                    </ul>
                                                </ul>
                                                <div class="row" style="width:90%">
                                                  <p class="ml-2">● Portero </p>
                                                </div>
                                                <br>
                                                <ul>

                                                    <li>1. Es necesario tocar la pantalla una vez para que el jugador tire. </li>
                                                    <li>2. Para impedir que el balón entre en la portería se deberán deslizar los guantes hacía la dirección del balón para bloquearlo.</li>
                                                    <ul>
                                                        <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol para el oponente (computadora). </li>
                                                        <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa .</li>
                                                    </ul>
                                                </ul>
                                                </div>
                                            </div>
                                            <h4>Jugar en Laptop/PC</h4>
                                            <div class="navbar navbar-default navbar-fixed-top">
                                                <div class="container">
                                                <p>
                                                    1. Seleccionar el botón “JUGAR”.
                                                    <br />
                                                    <br />
                                                    ● Tirador
                                                </p>

                                                <ul>
                                                    <li>1. Utilizando el mouse, deslizar el balón con dirección hacia la portería. La velocidad con la que se realiza el movimiento determina la fuerza del disparo.</li>
                                                    <ul>
                                                        <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol.</li>
                                                        <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa.</li>

                                                    </ul>
                                                </ul>
                                                <div class="row" style="width:90%">
                                                  <p class="ml-2">● Portero </p>
                                                </div>
                                                <br>
                                                <ul>
                                                    <li>1. Es necesario dar click a la pantalla una vez para que el jugador tire.</li>
                                                    <li>2. Para impedir que el balón entre en la portería se deberán deslizar los guantes hacía la dirección del balón para bloquearlo. </li>
                                                    <ul>
                                                        <li class="ml-3">a. Si la pelota entra a la portería cuenta como gol para el oponente (computadora).</li>
                                                        <li class="ml-3">b. En caso de que el disparo sea afuera de la portería o el portero intercepte el balón, cuenta como atajada exitosa.</li>
                                                    </ul>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1 class="" style="color:transparent">space</h1>
                </div>
            </div>
        </div>

    </div>

    <!-- </section> -->


    <div class="tablero">
        <div class="container">
            <div class="row list-score">
                <!-- <div class="col-12 players-title col-md-12 d-flex justify-content-center">
                    <img class="ball" src="../assets/images/HW-DASH-1.png" alt=""><h1 style="text-align: center;">Mejores Jugadores</h1><img class="ball" src="../assets/images/HW-DASH-1.png" alt="">
                </div> -->
                <div class="col-12 col-md-12 d-flex justify-content-center">
                    <img class="img-players" src="../assets/images/test.jpg" alt="">
                </div>
                <!-- <ul class="col-12 d-flex justify-content-center list-group list-players mr-0 pr-0">
                    <li class="list-group-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id"></h2>
                                </div>
                                <div class="col-4">
                                    <p class="name"></p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">Puntos</p>
                                </div>
                                <div class="col-3">
                                    <p class="puntaje">Tiempo</p>
                                </div>
                            </div>
                            <div class="row player d-flex align-items-center" style="border-radius:10px">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id">1</h2>
                                </div>
                                <div class="col-4">
                                    <p class="name">Nombre completo</p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">2930</p>
                                </div>
                                <div class="col-3">
                                    <p class="time">01:12</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="container">
                            <div class="row player d-flex align-items-center" style="border-radius:10px">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id">2</h2>
                                </div>
                                <div class="col-4">
                                    <p class="name">Nombre completo</p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">2930</p>
                                </div>
                                <div class="col-3">
                                    <p class="time">01:12</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="container">
                            <div class="row player d-flex align-items-center" style="border-radius:10px">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id">3</h2>
                                </div>
                                <div class="col-4">
                                    <p class="name">Nombre completo</p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">2930</p>
                                </div>
                                <div class="col-3">
                                    <p class="time">01:12</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="container">
                            <div class="row player d-flex align-items-center" style="border-radius:10px">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id">4</h2>
                                </div>
                                <div class="col-4">
                                    <p class="name">Nombre completo</p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">2930</p>
                                </div>
                                <div class="col-3">
                                    <p class="time">01:12</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="container">
                            <div class="row player d-flex align-items-center" style="border-radius:10px">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id">5</h2>
                                </div>
                                <div class="col-4">
                                    <p class="name">Nombre completo</p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">2930</p>
                                </div>
                                <div class="col-3">
                                    <p class="time">01:12</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="container">
                            <div class="row player d-flex align-items-center" style="border-radius:10px">
                                <div class="col-1 m-0 p-0">
                                    <h2 class="id">6</h2>
                                </div>
                                <div class="col-4">
                                    <p class="name">Nombre completo</p>
                                </div>
                                <div class="col-4">
                                    <p class="puntaje">2930</p>
                                </div>
                                <div class="col-3">
                                    <p class="time">01:12</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
    <section id="preguntas">
    <section class="preguntas">
        <div class="contenedor-faqs">
            <div class="container">
                <div class="row pb-2 pt-3">
                    <div class="col-12 faqs-title col-md-12 d-flex justify-content-center">
                        <h1 style="text-align: center;">Preguntas Frecuentes</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 col-xs-1 d-flex justify-content-center space">
                    </div>
                    <div class="col-10 col-xs-10 tablero-list">
                        <div role="tablist">

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-1 variant="info">¿Cómo sé si me registré correctamente en la página web?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Te llegará un correo electrónico a la dirección que proporcionaste con la confirmación. 
                                            Si no lo encuentras en tu bandeja de entrada, revisa tu carpeta de no deseados o SPAM.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                        <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-2 variant="info">No recibí correo electrónico de confirmación de registro. ¿Qué hago?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Revisa tu carpeta de correos no deseados o SPAM. Si no encuentras el correo electrónico de
                                            registro contáctanos: info@hyundaitimepromo.mx o al teléfono 5525617865.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-3 variant="info">¿Cuántas personas puedo referir?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Puedes referir hasta tres personas. Pueden ser familiares o amigos y los podrás referir ingresando
                                            su correo electrónico en el sitio web www.hyundaitimepromo.mx al momento de registrarte.
                                            Después de leer y aceptar Términos y Condiciones, Aviso de privacidad y Carta de autorización de
                                            uso de imagen deberás dar click en “ENVIAR” y el siguiente paso será ingresar los correos de tus
                                            referidos.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-4 variant="info">¿Qué pasa si mis referidos no van a hacer su prueba de manejo de cualquier vehículo HYUNDAI?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si tus referidos (pueden ser familiares y/o amigos) no acuden a realizar una prueba de manejo, ya
                                            no se te proporcionará una oportunidad adicional a la que ya se te proporcionó al momento de
                                            referirlos.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-5 variant="info">¿Cómo puedo saber mi puntuación y tiempos?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Al terminar tu juego aparecerá en pantalla la información de puntos y de tiempo. Cada vez que
                                            termines un juego te llegará un correo electrónico de la promoción HYUNDAI TIME con la
                                            información actualizada de puntaje y tiempos.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-6 variant="info">¿Cuándo sabré si soy ganador del viaje a Londres?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            El 15 de Noviembre informaremos a los ganadores.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-7 variant="info">¿Qué pasa si mi pasaporte no está vigente?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si tu pasaporte no está vigente no podrás participar por entradas dobles a un partido de Chelsea en Londres.
                                            Tu pasaporte debe tener vigencia de al menos 6 meses posteriores a la fecha de salida
                                            que en este caso es entre el 2 y 3 de Diciembre de 2019.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-8 variant="info">¿Necesito VISA para poder participar?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si. Necesitas contar con VISA vigente ya que algunos vuelos de ganadores podrían incluir conexión
                                            en Estados Unidos y eso requiere contar con visa vigente.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-9 variant="info">¿Qué pasa si no refiero a ninguna persona?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si no refieres a ninguna persona (pueden ser familiares y/o amigos) no tendrás oportunidades
                                            adicionales para jugar y acumular puntos. Pero sí podrás jugar la primera vez con el código de
                                            acceso que te entregaron en el Distribuidor Autorizado Hyundai.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-10 variant="info">¿Cómo recuperar contraseña si la olvidé?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Podrás recuperar tu contraseña dando click en “RECUPERAR CONTRASEÑA” dentro de la ventana de inicio de sesión.
                                            Te llegará un correo electrónico con una contraseña nueva para que puedas ingresar al
                                            sitio www.hyundaitimepromo.mx.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-11 variant="info">¿Con cuántos correos me puedo registrar?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Cada participante se puede registrar únicamente con una cuenta. Podrá realizar varias pruebas de
                                            manejo pero únicamemnte se entregará un código de acceso al juego online por persona durante
                                            la vigencia de la promoción.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-12 variant="info">¿Qué pasa si no se acumula el marcador?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Siempre que termines un juego se acumulará el marcador y el tiempo. Si tienes dudas adicionales
                                            comunícate a info@hyundaitimepromo.mx o al teléfono 5525617865.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-13 variant="info">¿Qué especificaciones tecnológicas se requieren para jugar?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Asegura que tu computadora cuente con conexión estable a internet, de preferencia última
                                            versión del navegador. No es necesario instalarle un plugin adicional. De preferencia debes jugar
                                            en dispositivos de las últimas generaciones. Mínimo un GB de memoria en RAM.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-14 variant="info">¿Puedo jugar desde mi celular?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si. HYUNDAI TIME se puede jugar en cualquier dispositivo celular tanto IOS como ANDROID.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-15 variant="info">¿El juego abre en IOS y en Androird?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si. Podrás jugar HYUNDAI TIME en ambos sistemas. También en computadoras de escritorio PC y MAC.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-16 variant="info">¿Se puede pausar el juego?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-16" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            No. Una vez que comienzas a jugar el juego finalizará hasta que hayas tirado 5 veces y atajado 5 tiros.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-17 variant="info">¿Qué incluye el viaje / regalo?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-17" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Son 6 viajes dobles para asistir a un partido del Chelsea en Londres. Es decir, los 6 primeros lugares
                                            en el juego serán los ganadores, siempre y cuando cumplan al 100% los Términos y Condiciones
                                            de la promoción.
                                            <br>
                                            <br>
                                            El viaje incluye: boleto de avión redondo doble (ganador y acompañante), México – Londres –
                                            México, Hospedaje en Londres por tres noches en hotel 4 estrellas (1 cuarto
                                            ganador/acompañante), desayunos incluídos, transportación aeropuerto – hotel – aeropuerto,
                                            entradas al estadio para presenciar el partido del Chelsea vs Aston Villa a celebrarse en el estadio
                                            Stanford Bridge el 4 de Diciembre de 2019, transportación hotel – estadio –hotel.
                                            <br>
                                            <br>
                                            Actividades y detalles no mencionados NO están incluídos.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-18 variant="info">¿Puedo transferir mi viaje / regalo?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-18" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            No. El regalo no es transferible.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-19 variant="info">¿Pueden participar menores de edad?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            No. Sólo podrán participar mayores de 18 años, nacidos en la República Mexicana y con pasaporte y VISA vigentes.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-20 variant="info">¿Cómo sé si me va a llegar una oportunidad extra de juego gracias a mi referido?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-20" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Te llegará un correo electrónico cuando tu referido haya acudido a hacer su prueba de manejo a
                                            un Distribuidor Autorizado Hyundai y cuando haya ingresado a su vez su código en
                                            www.hyundaitimepromo.mx.
                                            <br>
                                            <br>
                                            Si lo referiste pero no fue a hacer su prueba de manejo, en automático te aparecerá en la pantalla
                                            superior de la página web una leyenda con la cantidad de oportunidades de juego que tienes
                                            disponible.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-21 variant="info">¿Cuando me avisan que soy ganador, cuanto tiempo tengo para reclamar el regalo?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-21" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Cuando se informe a los ganadores que son acreedores al regalo, les informaremos los pasos
                                            siguientes y la fecha en la que tendrán que acudir a su DISTIBUIDOR AUTORIZADO HYUNDAI a recoger
                                            su regalo.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>


                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-22 variant="info">¿Participan todos los distribuidores?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-22" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si. Participan todos los Distribuidores Autorizados Hyundai.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-23 variant="info">¿Puedo hacer mi prueba de manejo en cualquier Distribuidor Autorizado Hyundai?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-23" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Si.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-24 variant="info">¿Qué pasa si gané y mi pasaporte o VISA no está vigente?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-24" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            No podrás ser acreedor al regalo del ganador.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>


                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-25 variant="info">¿Cuánto dura la promoción?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-25" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            La vigencia de la promoción Hyundai Time es de las 00:00 hrs del 26 de septiembre al 10 de
                                            noviembre de 2019 a la media noche, es decir a las 11:59:59 pm.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>


                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-26 variant="info">¿Cuánto tiempo dura mi código y cuánto tiempo tengo para referir amigos o familiares?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-26" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            El código de acceso al juego tiene vigencia durante toda la promoción.
                                            Podrás referir amigos o familiares en cualquier momento durante la vigencia de la promoción Hyundai Time,
                                            pero únicamente al momento de registrarte. Es decir, sólo podrás referir hasta 3 amigos.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>


                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-27 variant="info">¿Qué gano si hago una prueba de manejo en alguno de los Distribuidor Autorizado Hyundai?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-27" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Todas las personas que hagan una prueba de manejo, que sean mayores de edad, ganarán un
                                            regalo instantáneo. Estos regalos instantáneos están sujetos a disponibilidad y hasta agotar
                                            existencias durante la vigencia de la promoción.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>


                            <b-card style="border-buttom-color:#ffffff; border: 0px;" no-body class="mb-1">
                            <b-card-header style="border: 0px; background-color:#ffffff;" header-tag="header" class="p-1 pregunta" role="tab">
                                <b-button style="font-weight: bold; color:#000000; background-color: #ffffff; border-buttom-color:#ffffff; border:0px; border-bottom: 1px solid #0c0c0c; border-radius: 0;" block href="#" v-b-toggle.accordion-28 variant="info">¿Tienes alguna otra duda?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-28" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text style="font-size: 11px;">
                                        <!--<code>visible</code> is <code>true</code>-->
                                        <p class="respuesta">
                                            Contáctanos: info@hyundaitimepromo.mx y tel: 5525617865.
                                        </p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>
                        </div>
                    </div>
                    <div class="col-1 col-xs-1 d-flex justify-content-center space">
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
    <div class="avobe-footer">
    </div>
  </div>

</template>

<script>

import index from '@/components/index.vue'; // @ is an alias to /src
import axios from "axios";
import { required, email, minLength, sameAs, minValue, maxValue } from "vuelidate/lib/validators";
import Vuelidate from 'vuelidate';
import JQuery from 'jquery';
import authMixin from '../mixins/authentication';

var BG = document.getElementById('body');

export default {
  mixins: [authMixin],
  components: {

  },
  data() {
    return {
        browser:null,
        terms:null,
        checked: [
          { text:'He leído y acepto', terms: 'first' },
        ],
        heLeido: true,
        showInicioDeSesionModal:false,
        registerResponse: '',
        response: "",
        token:'',
        uid:'',
        client:'',
        isLoggedIn: false,
        status:'',
        fields:'',
        result:'',
        referFriends:'',
        responseError:'',
        buttonRef: false,
        buttonNoRef: false,
        changePassword:'',
        window: {
          width: 0,
        },
        user: {
            email: "",
            password: "",
        },
        submitted: false,
        submitted2: false,
        registerUser: {
            app_user: {
                name:'',
                age:'18',
                gender:null,
                email:'',
                state:'6',
                hyundai_vehicle:'',
                password:'',
                password_confirmation:'',
                code:'',
                invite:"",
                invite2:'',
                invite3:'',
                terms:null,

            },
        },
        loggedInUser: null
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  validations: {
       user: {
            email: {required, email},
            password:{required, minLength: minLength(8)}
        },
         terms: {
            sameAs: sameAs( () => true )
        },
      registerUser: {
        app_user: {
          name: { required },
          age: { required },
          gender: { required },
          state: { required },
          email: { required, email },
          hyundai_vehicle: { required },
          password: { required, minLength: minLength(8) },
          password_confirmation: { required, sameAs: sameAs('password') },
          code: { required },

          invite: { email },
          invite2: { email },
          invite3: { email },
          terms: {
            sameAs: sameAs( () => true )
        },
        }
      }
  },
  mounted() {
    const vm = this;
    this.identify()
    this.checkIfLogged()
      .then(response => {
        vm.loggedInUser = response.data.app_user
        vm.$parent.loggedInUser = vm.loggedInUser
        window.localStorage.setItem('app_user', JSON.stringify(response.data.app_user))
        vm.isLoggedIn = true
        vm.$parent.isLoggedIn = true;
      })
      .catch(err =>{
        // TODO: show error maybe
        vm.isLoggedIn = false
        vm.loggedInUser = null;
        vm.$parent.isLoggedIn = false;
        vm.$parent.loggedInUser = null;
        window.localStorage.clear()
    });
    let token = window.localStorage.getItem('TOKEN');
    let uid = window.localStorage.getItem('UID');
    let client = window.localStorage.getItem('CLIENT');

    let app_user = window.localStorage.getItem('app_user');
    if(app_user) {
        let parsed = JSON.parse(app_user);
        this.loggedInUser = parsed;
        this.$parent.loggedInUser = parsed;
    }
     if(token && uid && client !== ''){
         this.isLoggedIn = true
         this.$parent.isLoggedIn = true;
     }

  },
  computed: {
    state() {
      return Boolean(this.terms)
    }
  },

  methods: {

    identify(){
        if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
        {
            this.browser = 'Opera';
        }
        else if(navigator.userAgent.indexOf("Chrome") != -1 )
        {
            this.browser = 'Chrome';
        }
        else if(navigator.userAgent.indexOf("Safari") != -1)
        {
            this.browser = 'Safari';
        }
        else if(navigator.userAgent.indexOf("Firefox") != -1 )
        {
            this.browser = 'Firefox';
        }
        else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
        {
            this.browser = 'IE';
        }
        else
        {
            this.browser = 'Unknow';
        }
    },
    handleSubmitNoRef() {
        if(this.status == ''){
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.registerUser.$invalid) {
                this.fields = 'Favor de llenar los campos en rojo'
                this.clearState()
                return;
            }

            this.register();
        }
    },
    withFriends() {
        this.buttonRef = true;
        this.handleButton()
    },
    withoutFriends(){
        this.buttonNoRef = true;
        this.handleButton()
    },
    handleButton() {
      if(this.buttonRef == true){
          this.buttonRef = false
          this.handleSubmitRef()
      } else if(this.buttonNoRef == true) {
          this.buttonNoRef = false
          this.handleSubmitNoRef()
      }

    },
    handleSubmitRef() {
        if(this.registerUser.app_user.invite !== ''){
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.registerUser.$invalid) {
            this.fields = 'Favor de llenar los campos en rojo'
            this.clearState()
            return;
        }

        this.register();
        } else {
            this.referFriends = 'Refiere al menos un amigo'
            this.clearState()
        }
    },
    handleSubmitLogin(e) {

        this.submitted2 = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.user.$invalid) {
            this.clearState()
            return;
        }

        this.login();
    },
    clearState() {
        setTimeout(() => {
            this.fields = '';
            this.referFriends = '';
            this.status = '';
            this.responseError = '';
            this.changePassword = '';
            // this.setState({ after3seconds: [] });
        }, 5000);
    },
    //we can call this functions on a click event
    handleResize() {
      this.window.width = window.innerWidth;
    },
    onResize() {
        var BG = document.getElementById('body');
        BG.style.height = BG.parentElement.clientHeight;
        var oldH = BG.parentElement.clientHeight;
        if(Math.abs(oldH - BG.parentElement.clientHeight) > 60){
        BG.style.height = BG.parentElement.clientHeight + 'px';
        oldH = BG.parentElement.clientHeight;
        }
    },
    logOut(){
        localStorage.clear()
        window.location.reload(true);
    },
    readTerms(){
        this.register()
    },
    resizeBackground() {
        bg.height(JQuery(window).height());
    },
    register(){
        const vm = this;
        axios({ method: "POST", "url": `${process.env.VUE_APP_BACKEND_URL}/auth/`, "data": this.registerUser, "headers": { "content-type": "application/json" } }).then(result => {
            vm.registerResponse = result.data;
            vm.token = result.headers['access-token'];
            vm.uid = result.headers['uid'];
            vm.client = result.headers['client'];
            window.localStorage.setItem('TOKEN', vm.token);
            window.localStorage.setItem('UID', vm.uid);
            window.localStorage.setItem('CLIENT', vm.client)

            vm.loggedInUser = result.data.app_user
            window.localStorage.setItem('app_user', JSON.stringify(result.data.app_user))
            console.log(result.data)

            vm.isLoggedIn = true
            vm.$parent.isLoggedIn = true;
            vm.$parent.loggedInUser = result.data.app_user;


            vm.$bvModal.hide('registro2');
            vm.$bvModal.show('mreglas');
        }
        ).catch(error => {
            vm.status = error.response.data.errors[0].title;
            })
        .finally(() => {
            if(vm.status == 'code'){
                vm.status = 'Error al completar el registro, por favor revisa que el código ingresado  no haya sido usado'
                vm.clearState()
            } else if(vm.status == 'email') {
                vm.status = 'Error al completar el registro, por favor revisa que el correo eléctronico ingresado  no haya sido usado'
                vm.clearState()
            }
        })
    },
    login() {
        const vm = this;
        axios({ method: "POST", "url": `${process.env.VUE_APP_BACKEND_URL}/auth/sign_in`, "data": this.user, "headers": { "content-type": "application/json" } }).then((result) => {
            vm.response = result.data;
            vm.token = result.headers['access-token'];
            vm.uid = result.headers['uid'];
            vm.client = result.headers['client'];
            window.localStorage.setItem('TOKEN', vm.token);
            window.localStorage.setItem('UID', vm.uid);
            window.localStorage.setItem('CLIENT', vm.client)

            vm.loggedInUser = result.data.app_user;
            window.localStorage.setItem('app_user', JSON.stringify(result.data.app_user))
            console.log(result.data)

            vm.isLoggedIn = true;
            vm.$parent.isLoggedIn = true;
            vm.$parent.loggedInUser = result.data.app_user;

            vm.$bvModal.hide('modal-1');
            vm.$bvModal.show('mreglas');
        }).catch(err => {
            this.error = err.result.data
        })
        .finally(() => {
            if(this.response == ''){
               this.responseError = 'Correo o contraseña inválidos'
            } else {
            }
        })
    },
    forgotPassword(){
        let email = this.user.email
        const vm = this;
        if(email !== ''){
            axios({ method: "POST", "url": `${process.env.VUE_APP_BACKEND_URL}/auth/password`, "data": this.user, "headers": { "content-type": "application/json" } }).then((result) => {
                vm.response = result.data;
            }).catch(err => {
                vm.error = err.result.data
            })
            .finally(() => {
                if(vm.response !== ''){
                vm.changePassword = 'Un correo ha sido enviado a'+' '+ vm.user.email + ' ' + 'favor de seguir indicaciones para cambiar contraseña';
                // vm.clearState()
                } else {
                vm.changePassword = 'Correo no encontrado';
                // vm.clearState()
                }
            })
        } else {
            vm.changePassword = 'Introduzca correo'
            vm.clearState()
        }
    },
    noGamesAlert: function(event) {
      let games = this.loggedInUser.max_games
      this.$notify({
        title: 'Has utilizado todos tus intentos',
        // text: `Por el momento solo se le permite ${games} juego(s), ya ha utilizado todos sus intentos`,
        type: 'error'
      })
    }
  }
}

</script>
