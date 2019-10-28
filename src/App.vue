<template>
  <div id="app">
    <notifications position="bottom left" />
    <div v-if="$route.meta.header != 0">
    <div id="nav">
      <div class="container" style="max-width:100%">
          <div v-if="window.width > 991">
            <div class="row" style="max-width:100%">
              <div class="col-5 d-flex justify-content-start">
                <div class="logo-header-top">
                  <img src="./assets/images/logo-hyundai-time.png" class="image-nav"  alt="header">
                </div>
              </div>
              <div class="col-1">
              </div>
              <div class="col-6 d-flex justify-content-end ">
                <!--<router-link to="/about"><b-button class="mt-3" style="color:#003469; background:#FFF">Agenda tu prueba de manejo</b-button></router-link> -->
                <!-- <div><b-button  @click="$bvModal.show('agencias')" variant="primary" class="mt-3" style="color:#003469; background:#FFF" >Agenda tu prueba de manejo</b-button></div> -->
                <Slide :isOpen="open2"
                    @openMenu="setOpenState()"
                    right
                    width="300"
                >
                <a @click="$bvModal.show('agenciasHamburger')"  class="" style="color:#003469; cursor:pointer; font-size:18px; text-align:left;text-decoration:underline"
                ><b>Agenda tu prueba de manejo</b></a>
                <section>
                  <a href="/" @click="setOpenState()" class="goToSectionHome" style="cursor:pointer; color:#003469;font-size:18px;
                  ">
                    Home
                  </a>
                </section>

                <section>
                  <a href="#dinamica" @click="setOpenState()" class="goToSectionDinamica" style="cursor:pointer; color:#003469;font-size:18px;
                  ">
                    Dinámica de Promoción
                  </a>
                </section>
                <section>
                  <a href="#instrucciones" @click="setOpenState()" class="goToSectionInstrucciones" style="cursor:pointer; color:#003469;font-size:18px;
                  ">
                    Instrucciones del Juego
                  </a>
                </section>
                <section>
                  <a href="#preguntas"  @click="setOpenState()" class="goToSectionPreguntas" style="cursor:pointer; color:#003469;font-size:18px;
                  ">
                    Preguntas Frecuentes
                  </a>
                </section>
                <div class="" v-if="this.isLoggedIn == false">
                  <a @click="$bvModal.show('modal-1')"  class="" style="cursor:pointer; color:#003469;font-size:18px;"
                  >Iniciar sesión</a>
                </div>
                <div v-else>
                  <a @click="logOut()"  class="" style="cursor:pointer; color:#003469;font-size:18px;"
                  >Cerrar sesión</a>
                </div>
                <div class="" v-if="this.isLoggedIn == false">
                  <b class="" style="color:#003469;font-size:15px"></b>
                </div>
                <div v-else>
                  <b class="" style="color:#003469;font-size:15px">Juegos Disponibles: {{this.games}}</b>
                </div>


                  <b-modal id="agenciasHamburger"  title="" size="lg" class="" style="overflow:hidden;font-weight:bold; border-color:transparent" centered  hide-footer>
                    <h2 class="" style="font-weight:bold; font-weight:bold; color:#003469">Busca tu Distribuidor</h2>
                    <p>¿Cuál es tu estado?</p>

                    <b-button v-b-toggle.aguascalientes variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Aguascalientes</div></b-button>
                    <b-collapse id="aguascalientes" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.haguascalientes size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Aguascalientes</div></b-button>
                          <b-collapse id="haguascalientes" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI AGUASCALIENTES</p>
                              <p class="direccion">Dirección: Blvd. Luis Donaldo Colosio Murrieta No. 354 A, Col. Puerto las Hadas, Aguascalientes, Aguascalientes.</p>
                              <p class="telefono">Teléfono: 449 478 5000</p>
                              <p>Url:
                              <a href="https://www.hyundaicampestre.com/" target="_blank"><b class="url">https://www.hyundaicampestre.com/ </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiCampestre" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiCampestre </b> </a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>

                    <b-button v-b-toggle.b-california variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Baja California</div></b-button>
                    <b-collapse id="b-california" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.cabos size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Los Cabos</div></b-button>
                        <b-collapse id="cabos" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI LOS CABOS</p>
                            <p class="direccion">Dirección: Carretera Transpeninsular Km 24 S/N Colonia Cerro Colorado San Jose Del Cabo B.C.</p>
                            <p class="telefono">Teléfono: 624 688 6796</p>
                            <p>Url:
                            <a href="https://www.hyundailoscabos.com/" target="_blank"><b class="url"> https://www.hyundailoscabos.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiLosCabos/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiLosCabos/</b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.mexicali size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2" ><div class="text-localidad d-flex ml-auto">Mexicali</div></b-button>
                        <b-collapse id="mexicali" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PREMIER MXL</p>
                            <p class="direccion">Dirección: Calz. Cetys No. 2388, Col. La Rivera, Mexicali, B.C.</p>
                            <p class="telefono">Teléfono: 686 104 2430</p>
                            <p>Url:
                            <a href="https://hyundaipremiermxl.com.mx/" target="_blank"><b class="url"> https://hyundaipremiermxl.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiMexicali/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiMexicali/</b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.tijuana size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tijuana</div></b-button>
                        <b-collapse id="tijuana" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PREMIER TJ</p>
                            <p class="direccion">Dirección: Vía Rápida Poniente No. 15161, Zona Urbana Río Tijuana, Tijuana, B.C.</p>
                            <p class="telefono">Teléfono: 664 969 2929</p>
                            <p>Url:
                            <a href="https://hyundaipremiertj.com.mx/" target="_blank"><b class="url"> https://hyundaipremiertj.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiTijuana/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiTijuana/</b></a>
                          </b-card>
                        </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.campeche variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Campeche</div></b-button>
                    <b-collapse id="campeche" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hcampeche size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Campeche</div></b-button>
                          <b-collapse id="hcampeche" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PENÍNSULA</p>
                              <p class="direccion">Dirección: Av. Maestros Campechanos No. 528-A y 528-B, Col. Miguel Hidalgo, Ampliación San Francisco de Campeche, Campeche. </p>
                              <p class="telefono">Teléfono: 981 813 23 00</p>
                              <p>Url:
                              <a href="http://hyundaicampeche.com.mx/" target="_blank"><b class="url">http://hyundaicampeche.com.mx/ </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiCampeche/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiCampeche/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.chiapas variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Chiapas</div></b-button>
                    <b-collapse id="chiapas" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.tgutierrez size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tuxtla Gutiérrez</div></b-button>
                          <b-collapse id="tgutierrez" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI MILLENIUM</p>
                              <p class="direccion">Dirección: Libramiento Sur Poniente No. 3335, Col. Mactumactza, Tuxtla Gutiérrez, Chiapas. </p>
                              <p class="telefono">Teléfono: 961 617 6500</p>
                              <p>Url:
                              <a href="http://www.hyundaichiapas.mx/" target="_blank"><b class="url"> http://www.hyundaichiapas.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiChiapas/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiChiapas/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.chihuahua variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Chihuahua</div></b-button>
                    <b-collapse id="chihuahua" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.cjuarez size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cd. Juárez</div></b-button>
                          <b-collapse id="cjuarez" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PENTA TRIUNFO</p>
                              <p class="direccion">Dirección: Av. Paseo Triunfo de la República No. 5855, Col. Partido Díaz, Ciudad Juárez, Chihuahua. </p>
                              <p class="telefono">Teléfono: 656 438 2000</p>
                              <a href="https://hyundaipenta.com/" target="_blank"><p class="url">Url: https://hyundaipenta.com/</p></a>
                              <a href="https://www.facebook.com/hyundaipenta/" target="_blank"><p class="fcb">Facebook: https://www.facebook.com/hyundaipenta/</p></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.hchihuahua size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Chihuahua</div></b-button>
                          <b-collapse id="hchihuahua" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI  PENTA JUVENTUD</p>
                              <p class="direccion">Dirección: Av. Periférico de la Juventud No. 3905, Fracc. Hacienda la Cantera, Chihuahua, Chihuahua. </p>
                              <p class="telefono">Teléfono: 614 307 2000</p>
                              <p>Url:
                              <a href="https://hyundaipenta.com/" target="_blank"><b class="url"> https://hyundaipenta.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaipenta/" target="_blank"><b class="fcb">Facebook: https://www.facebook.com/hyundaipenta/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.cdmxedo variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Ciudad de México y Edo. México</div></b-button>
                    <b-collapse id="cdmxedo" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.cdmx size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Ciudad de México</div></b-button>
                          <b-collapse id="cdmx" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI AEROPUERTO </p>
                              <p class="direccion">Dirección: Av. Fuerza Aérea Mexicana No. 520, Col. Federal, Ciudad de México. </p>
                              <p class="telefono">Teléfono: 55 8850 0000</p>
                              <p>Url:
                              <a href="http://www.hyundaiaeropuerto.com.mx/" target="_blank"><b class="url"> http://www.hyundaiaeropuerto.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiAeropuertoOficial/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAeropuertoOficial/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI INSURGENTES SUR</p>
                              <p class="direccion">Dirección: Insurgentes Sur No. 195, Col. Roma Norte, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 5511 4820</p>
                              <p>Url:
                              <a href="http://www.hyundaiherencia.com/hyundai-herencia/" target="_blank"><b class="url"> http://www.hyundaiherencia.com/hyundai-herencia/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiHerenciaInsurgentes/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiHerenciaInsurgentes/ </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI IZTAPALAPA</p>
                              <p class="direccion">Dirección: Puente de paja No.6 Col. Central de Abasto, Iztapalapa, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 7100 2100</p>
                              <p>Url:
                              <a href="http://www.hyundaiiztapalapa.com.mx/" target="_blank"><b class="url"> http://www.hyundaiiztapalapa.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiIztapalapa/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiIztapalapa/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PATRIOTISMO</p>
                              <p class="direccion">Dirección: Av. Patriotismo No. 87, Col. Escandón 1ra sección, Del. Miguel Hidalgo, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 2469 2222</p>
                              <p>Url:
                              <a href="http://www.hyundai-patriotismo.com.mx/" target="_blank"><b class="url"> http://www.hyundai-patriotismo.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaipatriotismoCDMX" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaipatriotismoCDMX   </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PEDREGAL</p>
                              <p class="direccion">Dirección: Anillo Periférico Sur No. 4258, Jardines del Pedregal de San Ángel, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 5927 5957</p>
                              <p>Url:
                              <a href="http://www.hyundaipedregal.mx/" target="_blank"><b class="url"> http://www.hyundaipedregal.mx/</b></a></p>
                              Facebook:
                              <a href=" https://www.facebook.com/Hyundai-Pedregal-308002766035166/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Pedregal-308002766035166/ </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI POLANCO</p>
                              <p class="direccion">Dirección: Campos Elíseos No. 257, Col. Polanco, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 5002 8800</p>
                              <p>Url:
                              <a href="http://www.hyundaipolanco.com.mx/" target="_blank"><b class="url"> http://www.hyundaipolanco.com.mx/ </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/agenciahyundaipolanco/" target="_blank"><b class="fcb"> https://www.facebook.com/agenciahyundaipolanco/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI SANTA FE</p>
                              <p class="direccion">Dirección: Vasco de Quiroga No. 2000, esquina Javier Barros Sierra, Col. Santa Fe, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 4123 6600</p>
                              <p>Url:
                              <a href="http://www.hyundaisantafe.com.mx/" target="_blank"><b class="url"> http://www.hyundaisantafe.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiSantaFeMx/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSantaFeMx/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI TEPEPAN</p>
                              <p class="direccion">Dirección: Periférico Sur No. 6465, Col. Valle Escondido, Tlalpan, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 5334 2800</p>
                              <p>Url:
                              <a href="http://hyundaitepepan.mx/" target="_blank"><b class="url"> http://hyundaitepepan.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiTepepanOFICIAL/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiTepepanOFICIAL/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI UNIVERSIDAD</p>
                              <p class="direccion">Dirección: Av. Universidad No. 1087, Col. Del Valle, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 1000 6300</p>
                              <p>Url:
                              <a href="http://www.hyundai-universidad.mx/" target="_blank"><b class="url"> http://www.hyundai-universidad.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiUni/?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiUni/?fref=ts</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI VALLEJO </p>
                              <p class="direccion">Dirección: Av. Montevideo No. 576, Col. Industrial Vallejo, Del. Azcapotzalco, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 4122 2000</p>
                              <p>Url:
                              <a href="http://www.hyundaivallejo.com.mx/" target="_blank"><b class="url"> http://www.hyundaivallejo.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiVallejo?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiVallejo?fref=ts </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ZAPATA </p>
                              <p class="direccion">Dirección: Calz. Ignacio Zaragoza No. 1715-B, Juan Escutia, Ciudad de México, Ciudad de México.</p>
                              <p class="telefono">Teléfono: 55 4125 1050</p>
                              <p>Url:
                              <a href="http://www.hyundaizaragoza.com.mx/" target="_blank"><b class="url"> http://www.hyundaizaragoza.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiZapata/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiZapata/ </b></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.edo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Edo. De México</div></b-button>
                          <b-collapse id="edo" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI COACALCO </p>
                              <p class="direccion">Dirección: Av. José Lopez Portillo No. 159, Col. San Lorenzo Tetlixtac, Coacalco, Edo. Méx.</p>
                              <p class="telefono">Teléfono: 55 8995 1010</p>
                              <p>Url:
                              <a href="http://www.hyundaicoacalco.com.mx" target="_blank"><b class="url"> http://www.hyundaicoacalco.com.mx</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/CoacalcoHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/CoacalcoHyundai/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI CUAUTITLÁN </p>
                              <p class="direccion">Dirección: Lateral Autopista México - Querétaro No. 14, Km 37.8, Col. Parque Industrial Cuamatla, Cuautitlán Izcalli, Edo. Méx. </p>
                              <p class="telefono">Teléfono: 55 4000 4400</p>
                              <p>Url:
                              <a href="http://www.hyundaicuautitlan.com.mx" target="_blank"><b class="url"> http://www.hyundaicuautitlan.com.mx</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundai-Cuautitl%C3%A1n-Izcalli-1493319520880081" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Cuautitl%C3%A1n-Izcalli-1493319520880081</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ECATEPEC </p>
                              <p class="direccion">Dirección: Av. Vía Morelos No. 843, Col. Santa Clara Coatitla, Ecatepec de Morelos, Edo. Méx. </p>
                              <p class="telefono">Teléfono: 55 4040 9600</p>
                              <p>Url:
                              <a href="http://www.hyundaiecatepec.com.mx" target="_blank"><b class="url">http://www.hyundaiecatepec.com.mx</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiEcatepec/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiEcatepec/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI INTERLOMAS</p>
                              <p class="direccion">Dirección: Av. Vía Magna, Mza. 3, Lote 16, Col. Bosques de la Herradura, Huixquilucan, Edo. Méx. </p>
                              <p class="telefono">Teléfono: 55 5290 9080</p>
                              <p>Url:
                              <a href="http://www.daltonhyundaiinterlomas.com.mx" target="_blank"><b class="url">http://www.daltonhyundaiinterlomas.com.mx</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/DaltonHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/DaltonHyundai/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI LOMAS VERDES</p>
                              <p class="direccion">Dirección: Blvd. Manuel Ávila Camacho No. 610, Col. San Bartolo Naucalpan Centro, Naucalpan, Edo. Méx.</p>
                              <p class="telefono">Teléfono: 55 2629 2629</p>
                              <p>Url:
                              <a href="http://www.hyundailomasverdes.mx/" target="_blank"><b class="url">http://www.hyundailomasverdes.mx/</b></a></p>
                              Facebook:
                            <a href="https://www.facebook.com/hyundailomasverdesoficial/" target="_blank">  <b class="fcb"> https://www.facebook.com/hyundailomasverdesoficial/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI SATÉLITE </p>
                              <p class="direccion">Dirección: Autopista México - Querétaro No. 2600, Col. Valle de los Pinos, Tlalnepantla de Baz, Edo.Méx.</p>
                              <p class="telefono">Teléfono: 55 5096 2300</p>
                              <p>Url:
                              <a href="http://www.hyundaisatelite.com.mx/" target="_blank"><b class="url"> http://www.hyundaisatelite.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiSateliteMX/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSateliteMX/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.coahuila variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Coahuila</div></b-button>
                    <b-collapse id="coahuila" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.torreon size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Torreón</div></b-button>
                        <b-collapse id="torreon" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI LAGUNA</p>
                            <p class="direccion">Dirección: Blvd. Independencia No. 999, Col. Granjas San Isidro, Torreón, Coahuila. </p>
                            <p class="telefono">Teléfono: 871 705 3800</p>
                            <p>Url:
                            <a href="http://www.hyundailaguna.com/" target="_blank"><b class="url"> http://www.hyundailaguna.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/LagunaHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/LagunaHyundai/</b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.saltillo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Saltillo</div></b-button>
                        <b-collapse id="saltillo" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI VALMUR SALTILLO</p>
                            <p class="direccion">Dirección: Blvd. Venustiano Carranza No. 6415, Col. Rancho de Peña, Saltillo, Coahuila. </p>
                            <p class="telefono">Teléfono: 844 261 0100</p>
                            <p>Url:
                            <a href="http://www.hyundaivalmursaltillo.com" target="_blank"><b class="url"> http://www.hyundaivalmursaltillo.com</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiSaltillo" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSaltillo</b></a>
                          </b-card>
                        </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.colima variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Colima</div></b-button>
                    <b-collapse id="colima" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hcolima size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Colima</div></b-button>
                          <b-collapse id="hcolima" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI TECNOLÓGICO</p>
                              <p class="direccion">Dirección: Av. Tecnológico No. 125, Col. Miguel Hidalgo, Colima, Colima. </p>
                              <p class="telefono">Teléfono: 312 159 1384</p>
                              <p>Url:
                              <a href="http://www.hyundaicolima.com/" target="_blank"><b class="url"> http://www.hyundaicolima.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaicolima/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaicolima/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.durango variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Durango</div></b-button>
                    <b-collapse id="durango" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hdurango size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Durango</div></b-button>
                          <b-collapse id="hdurango" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI VALMUR</p>
                              <p class="direccion">Dirección: Blvd. Francisco Villa No. 4025, Col. 20 de Noviembre, Durango, Durango. </p>
                              <p class="telefono">Teléfono: 618 150 2300</p>
                              <p>Url:
                              <a href="http://www.hyundaivalmur.com" target="_blank"><b class="url">http://www.hyundaivalmur.com </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiValmur/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiValmur/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.guanajuato variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Guanajuato</div></b-button>
                    <b-collapse id="guanajuato" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.celaya size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Celaya</div></b-button>
                        <b-collapse id="celaya" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI GALERÍAS CELAYA</p>
                            <p class="direccion">Dirección: Av. La Cano Oriente No. 101, Col.  Arboledas del Campestre, Celaya, Guanajuato.</p>
                            <p class="telefono">Teléfono: 461 662 7900</p>
                            <p>Url:
                            <a href="http://hyundaicelaya.com.mx/" target="_blank"><b class="url"> http://hyundaicelaya.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiCelayaGalerias/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiCelayaGalerias/</b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.irapuato size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Irapuato</div></b-button>
                        <b-collapse id="irapuato" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI VILLAS</p>
                            <p class="direccion">Dirección: Av. Quinta Real No. 999 esquina blvd. Villas de Irapuato, Col. San Miguelito, Irapuato, Guanajuato.</p>
                            <p class="telefono">Teléfono: 462 607 4100</p>
                            <p>Url:
                            <a href="http://www.hyundaiirapuato.com.mx/" target="_blank"><b class="url"> http://www.hyundaiirapuato.com.mx/   </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaiirapuato/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaiirapuato/ </b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.leon size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">León</div></b-button>
                          <b-collapse id="leon" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI BAJÍO</p>
                              <p class="direccion">Dirección: Blvd. Campestre No. 1348, Col. Cerro Gordo, León, Guanajuato. </p>
                              <p class="telefono">Teléfono: 477 214 3030</p>
                              <p>Url:
                              <a href="http://www.hyundaileon.com.mx/" target="_blank"><b class="url"> http://www.hyundaileon.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundaibajio" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundaibajio</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.guerrero variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Guerrero</div></b-button>
                    <b-collapse id="guerrero" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.acapulco size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Acapulco</div></b-button>
                          <b-collapse id="acapulco" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI DIAMANTE</p>
                              <p class="direccion">Dirección: Blvd. De las Naciones No. 52 C, Col. Granjas del Marqués, Acapulco de Juárez, Guerrero.</p>
                              <p class="telefono">Teléfono: 744 202 2000</p>
                              <p>Url:
                              <a href="http://www.hyundaidiamante.com.mx/" target="_blank"><b class="url"> http://www.hyundaidiamante.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundai-Diamante-983550081765389/?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Diamante-983550081765389/?fref=ts</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.hidalgo variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Hidalgo</div></b-button>
                    <b-collapse id="hidalgo" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.pachuca size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Pachuca</div></b-button>
                          <b-collapse id="pachuca" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI HAMKE PACHUCA</p>
                              <p class="direccion">Dirección: Av. Industrial La Paz No. 216, Fracc. Industrial La Paz, Pachuca, Hidalgo. </p>
                              <p class="telefono">Teléfono: 771 107 0929</p>
                              <p>Url:
                              <a href="http://www.hyundaipachuca.com.mx/" target="_blank"><b class="url"> http://www.hyundaipachuca.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaihamke/?ref=br_tf" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaihamke/?ref=br_tf</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.jalisco variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Jalisco</div></b-button>
                    <b-collapse id="jalisco" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.guadalajara size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Guadalajara</div></b-button>
                          <b-collapse id="guadalajara" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI DALTON COUNTRY </p>
                              <p class="direccion">Dirección: Av. Américas No. 1819, Col. Colomos Providencia, Guadalajara, Jalisco.</p>
                              <p class="telefono">Teléfono: 33 5000 6000</p>
                              <p>Url:
                              <a href="http://www.daltonhyundai.com.mx/" target="_blank"><b class="url"> http://www.daltonhyundai.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/DaltonHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/DaltonHyundai/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI GONZALEZ GALLO</p>
                              <p class="direccion">Dirección: Calz. Jesús González Gallo No. 1100, Atlas, Guadalajara, Jalisco. </p>
                              <p class="telefono">Teléfono: 33 2733 0500</p>
                              <p>Url:
                              <a href="https://hyundaiglezgallo.com/cotizalo.php" target="_blank"><b class="url">https://hyundaiglezgallo.com/cotizalo.php</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiSolanaGonzalezGalloGuadalajara" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSolanaGonzalezGalloGuadalajara </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PATRIA</p>
                              <p class="direccion">Dirección: Av. Patria No. 918, Col. Jardines Universidad, Zapopan, Jalisco. </p>
                              <p class="telefono">Teléfono: 33 3793 9393</p>
                              <p>Url:
                              <a href="http://hyundai-patria.mx/" target="_blank"><b class="url"> http://hyundai-patria.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiPatria/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiPatria/ </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PLASENCIA</p>
                              <p class="direccion">Dirección: Av. López Mateos Sur No. 2600, Col. Jardines del Sol, Zapopan, Jalisco.</p>
                              <p class="telefono">Teléfono: 33 3344 4477</p>
                              <p>Url:
                              <a href="http://www.hyundaiguadalajara.com/" target="_blank"><b class="url"> http://www.hyundaiguadalajara.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaiplasencia" target="_blank"><b class="fcb">https://www.facebook.com/hyundaiplasencia</b></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.pvallarta size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Puerto Vallarta</div></b-button>
                          <b-collapse id="pvallarta" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PUERTO VALLARTA</p>
                              <p class="direccion">Dirección: Blvrd Francisco Medina Ascencio No. 2580, Zona Hotelera Nte., Puerto Vallarta, Jalisco.</p>
                              <p class="telefono">Teléfono: 322 176 1700</p>
                              <p>Url:
                              <a href="http://www.hyundaipuertovallarta.com/" target="_blank"><b class="url"> http://www.hyundaipuertovallarta.com/ </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaivallarta/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaivallarta/ </b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>

                    <b-button v-b-toggle.michoacan variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Michoacán</div></b-button>
                    <b-collapse id="michoacan" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.morelia size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Morelia</div></b-button>
                        <b-collapse id="morelia" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI CAMELINAS</p>
                            <p class="direccion">Dirección: Blvd. Paseo de la República No. 3440, Col. Cinco de Diciembre, Morelia, Michoacán. </p>
                            <p class="telefono">Teléfono: 443 350 4300</p>
                            <p>Url:
                            <a href="http://www.hyundaicamelinas.com/" target="_blank"><b class="url">http://www.hyundaicamelinas.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiSolanaMoreliaCamelinas/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiSolanaMoreliaCamelinas/</b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.uruapan size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Uruapan</div></b-button>
                        <b-collapse id="uruapan" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI URUAPAN</p>
                            <p class="direccion">Dirección: Av. Paseo Lazaro Cardenas 1142 La Magdalena Uruapan, Michoacán. </p>
                            <p class="telefono">Teléfono: 452 519 1653</p>
                            <p>Url:
                            <a href="https://hyundaiuruapan.com/?fbclid=IwAR2o2jRKicGQRjucXSt-lAo3ZmY8XLgqukQ-r87BpZHJ4yTGhPtp_zyGI5k" target="_blank"><b class="url"> https://hyundaiuruapan.com/?fbclid=IwAR2o2jRKicGQRjucXSt-lAo3ZmY8XLgqukQ-r87BpZHJ4yTGhPtp_zyGI5k</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai-Solana-Uruapan-563543110803589/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Solana-Uruapan-563543110803589/</b></a>
                          </b-card>
                        </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.morelos variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Morelos</div></b-button>
                    <b-collapse id="morelos" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.cuernavaca size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cuernavaca</div></b-button>
                          <b-collapse id="cuernavaca" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI RÍO MAYO</p>
                              <p class="direccion">Dirección: Av. Río Mayo No. 1221, Col. Vista Hermosa, Cuernavaca, Morelos.</p>
                              <p class="telefono">Teléfono: 777 150 0000</p>
                              <p>Url:
                              <a href="http://www.hyundai-riomayo.mx/" target="_blank"><b class="url"> http://www.hyundai-riomayo.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundairiomayo" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundairiomayo</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.nayarit variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Nayarit</div></b-button>
                    <b-collapse id="nayarit" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.tepic size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tepic</div></b-button>
                          <b-collapse id="tepic" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI NAYARITA</p>
                              <p class="direccion">Dirección: Av Insurgentes No. 1121, Los Llanitos, Tepic, Nayarit.</p>
                              <p class="telefono">Teléfono: 311 690 9999</p>
                              <p>Url:
                              <a href="http://www.hyundaitepic.com/" target="_blank"><b class="url"> http://www.hyundaitepic.com/ </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundainayarita/" target="_blank"><b class="fcb">https://www.facebook.com/hyundainayarita/ </b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.nleon variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Nuevo León</div></b-button>
                    <b-collapse id="nleon" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.monterrey size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Monterrey</div></b-button>
                          <b-collapse id="monterrey" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI CONTRY</p>
                              <p class="direccion">Dirección: Av. Alfonso Reyes No. 3000, Col. Arroyo Seco, Monterrey, N.L.</p>
                              <p class="telefono">Teléfono: 81 1870 7000</p>
                              <p>Url:
                              <a href="http://www.hyundaicontry.com/" target="_blank"><b class="url"> http://www.hyundaicontry.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundaicontry" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundaicontry </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI CUMBRES</p>
                              <p class="direccion">Dirección: Av. Paseo de los Leones No. 9000, Col. Puerta de Hierro, Cumbres Monterrey, N.L.</p>
                              <p class="telefono">Teléfono: 81 2088 0000</p>
                              <p>Url:
                              <a href="http://hyundaicumbres.mx/" target="_blank"><b class="url">http://hyundaicumbres.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiCumbres" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiCumbres</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PENTA LAS TORRES</p>
                              <p class="direccion">Dirección: Lázaro Cárdenas No. 117 Pte., Col. Fraccionamiento La Diana, San Pedro Garza García, Monterrey, N.L. </p>
                              <p class="telefono">Teléfono: 81 1970 7979</p>
                              <p>Url:
                              <a href=" https://hyundaipenta.com/" target="_blank"><b class="url"> https://hyundaipenta.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundai-Penta-Torres-733470150024492/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Penta-Torres-733470150024492/ </b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PENTA SENDERO </p>
                              <p class="direccion">Dirección: Av. Sendero Divisorio No. 550, Residencial Casa Bella, , San Nicolas de los Garza, N.L. </p>
                              <p class="telefono">Teléfono: 81 2270 5020</p>
                              <p>Url:
                              <a href="https://hyundaipenta.com/" target="_blank"><b class="url">https://hyundaipenta.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaipenta/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaipenta/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI LINDAVISTA</p>
                              <p class="direccion">Dirección: Av. Prol. Madero No. 3570 Col. Francisco I. Madero . Mty. N.L. </p>
                              <p class="telefono">Teléfono:  81 2956 0000</p>
                              <p>Url:
                              <a href="http://hyundailindavista.mx/" target="_blank"><b class="url"> http://hyundailindavista.mx/</b></a></p>

                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.oaxaca variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Oaxaca</div></b-button>
                    <b-collapse id="oaxaca" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hoaxaca size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Oaxaca</div></b-button>
                          <b-collapse id="hoaxaca" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ANTEQUERA</p>
                              <p class="direccion">Dirección: Símbolos Patrios No. 728-A, Col. Eliseo Jiménez Ruiz, Sta. Cruz Xoxocotlán, Oaxaca, Oaxaca.</p>
                              <p class="telefono">Teléfono: 951 501 6410</p>
                              <p>Url:
                              <a href="http://www.hyundaioaxaca.com.mx/" target="_blank"><b class="url">http://www.hyundaioaxaca.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiAntequera/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAntequera/ </b></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.istmo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Salina Cruz</div></b-button>
                          <b-collapse id="istmo" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ISTMO</p>
                              <p class="direccion">Dirección: Carretera Transístmica Lote S/N Km. 10 Col. Granadillo, Salina Cruz, Oaxaca.</p>
                              <p class="telefono">Teléfono: 971 281 3560</p>
                              <p>Url:
                              <a href="http://www.hyundaiistmo.com.mx/" target="_blank"><b class="url">http://www.hyundaiistmo.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiIstmoSC/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiIstmoSC/ </b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.puebla variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Puebla</div></b-button>
                    <b-collapse id="puebla" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hpuebla size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Puebla</div></b-button>
                          <b-collapse id="hpuebla" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ANGELÓPOLIS</p>
                              <p class="direccion">Dirección: Vía Atlixcayotl No. 5310-B, Reserva Territorial Atlixcayotl, Puebla, Puebla.</p>
                              <p class="telefono">Teléfono: 222 303 3000</p>
                              <p>Url:
                              <a href="http://hyundaiangelopolis.mx/" target="_blank"><b class="url"> http://hyundaiangelopolis.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiAngelopolis/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAngelopolis/</b></a>
                            </b-card>
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI SERDÁN</p>
                              <p class="direccion">Dirección: Blvd. Hermanos Serdán No. 265, Col. Aquiles Serdán, Puebla, Puebla.</p>
                              <p class="telefono">Teléfono: 222 229 5400</p>
                              <p>Url:
                              <a href="http://hyundaiserdan.mx/" target="_blank"><b class="url">http://hyundaiserdan.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiSerdan" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSerdan</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.queretaro variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Querétaro</div></b-button>
                    <b-collapse id="queretaro" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hqueretaro size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Querétaro</div></b-button>
                          <b-collapse id="hqueretaro" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ARCOS QRO.</p>
                              <p class="direccion">Dirección: Blvd. Bernardo Quintana No. 4345, Col. Álamos 3ra Sección, Querétaro, Querétaro.</p>
                              <p class="telefono">Teléfono: 442 214 6100</p>
                              <p>Url:
                              <a href="http://hyundaiqueretaro.com/" target="_blank"><b class="url">http://hyundaiqueretaro.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaiqro?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaiqro?fref=ts</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.qroo variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Quintana Roo</div></b-button>
                    <b-collapse id="qroo" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.cancun size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cancún</div></b-button>
                          <b-collapse id="cancun" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI CARIBE</p>
                              <p class="direccion">Dirección: Av. Bonampak Lote 5, Mza. 2, Col. Supermanzana 8, entre Av. Contoy y Av. Contoy Oriente, Cancún, Quintana Roo.</p>
                              <p class="telefono">Teléfono: 998 283 0103</p>
                              <p>Url:
                              <a href="http://www.hyundaicaribecancun.com/" target="_blank"><b class="url">http://www.hyundaicaribecancun.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiCancun/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiCancun/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.slp variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">San Luis Potosí</div></b-button>
                    <b-collapse id="slp" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hslp size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">San Luis Potosí</div></b-button>
                          <b-collapse id="hslp" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI LOMAS SLP</p>
                              <p class="direccion">Dirección: Av. Vega del Arroyo No. 88, Col. Lomas del Tecnológico, San Luis Potosí.</p>
                              <p class="telefono">Teléfono: 444 211 2400</p>
                              <p>Url:
                              <a href="http://www.hyundaisanluis.com/" target="_blank"><b class="url">http://www.hyundaisanluis.com/ </b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundailomas/" target="_blank"><b class="fcb">https://www.facebook.com/hyundailomas/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.sinaloa variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Sinaloa</div></b-button>
                    <b-collapse id="sinaloa" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.culiacan size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Culiacán</div></b-button>
                          <b-collapse id="culiacan" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI PREMIER CULIACÁN</p>
                              <p class="direccion">Dirección: Blvd. Pedro Infante No. 2589, Col. Country Tres Ríos, Culiacán, Sinaloa.</p>
                              <p class="telefono">Teléfono: 667 846 3000</p>
                              <p>Url:
                              <a href="https://hyundaipremier.com.mx/" target="_blank"><b class="url">https://hyundaipremier.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundai.GrupoPremier/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai.GrupoPremier/</b></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.mazatlan size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Mazatlán</div></b-button>
                          <b-collapse id="mazatlan" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI GRAN PLAZA</p>
                              <p class="direccion">Dirección: Av. Reforma No. 314 Col. Flamingos, Mazatlán, Sinaloa.</p>
                              <p class="telefono">Teléfono: 669 989 4500</p>
                              <p>Url:
                              <a href="https://hyundaipremiermzt.com.mx/" target="_blank"><b class="url"> https://hyundaipremiermzt.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiMazatlan/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiMazatlan/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.sonora variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Sonora</div></b-button>
                    <b-collapse id="sonora" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.obregon size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cd. Obregón</div></b-button>
                          <b-collapse id="obregon" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI SOLANA CAJEME (CD. OBREGÓN)</p>
                              <p class="direccion">Dirección: Norman Borlaug No. 1414 Col Campestre. </p>
                              <p class="telefono">Teléfono: 644 128 7550</p>
                              <p>Url:
                              <a href="http://www.hyundaicajeme.com/mx/es/Main/index.html" target="_blank"><b class="url">http://www.hyundaicajeme.com/mx/es/Main/index.html</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Hyundai-Solana-Obreg%C3%B3n-755986281254100/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Solana-Obreg%C3%B3n-755986281254100/</b></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.hermosillo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Hermosillo</div></b-button>
                          <b-collapse id="hermosillo" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI SOLANA</p>
                              <p class="direccion">Dirección: Blvd. Luis Donaldo Colosio No. 621, Col. Santa Fe, Hermosillo, Sonora.</p>
                              <p class="telefono">Teléfono: 662 289 7300</p>
                              <p>Url:
                              <a href="http://www.solanahyundai.com/" target="_blank"><b class="url">http://www.solanahyundai.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiHermosillo/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiHermosillo/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.tabasco variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Tabasco</div></b-button>
                    <b-collapse id="tabasco" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.vhermosa size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Villahermosa</div></b-button>
                          <b-collapse id="vhermosa" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI TABASCO 2000</p>
                              <p class="direccion">Dirección: Prol. Ave. Paseo Usumacinta No. 1607, Col. Tabasco 2000, Villahermosa, Tabasco.</p>
                              <p class="telefono">Teléfono: 993 310 5252</p>
                              <p>Url:
                              <a href="http://hyundaitabasco.com.mx/" target="_blank"><b class="url"> http://hyundaitabasco.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaitabasco/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaitabasco/ </b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.tamaulipas variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Tamaulipas</div></b-button>
                    <b-collapse id="tamaulipas" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.tampico size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tampico</div></b-button>
                          <b-collapse id="tampico" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI AVENIDA</p>
                              <p class="direccion">Dirección: Av. Hidalgo No. 6200, Col. Aeropuerto, Tampico, Tamaulipas.</p>
                              <p class="telefono">Teléfono: 833 228 7838</p>
                              <p>Url:
                              <a href="http://hyundaitampico.com.mx/" target="_blank"><b class="url">http://hyundaitampico.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiAvenida" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAvenida</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.tlaxcala variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Tlaxcala</div></b-button>
                    <b-collapse id="tlaxcala" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.apizaco size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Apizaco</div></b-button>
                          <b-collapse id="apizaco" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI APIZACO</p>
                              <p class="direccion">Dirección: Carretera Mexico Veracruz km 114+190 No. 223 Col. Santa Úrsula Zimantepec, Tlaxcala. C.P. 90450</p>
                              <p class="telefono">Teléfono: 241 689 0400</p>
                              <p>Url:
                              <a href="http://hyundaiapizaco.mx/" target="_blank"><b class="url">http://hyundaiapizaco.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiApizaco/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiApizaco/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.toluca variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Toluca</div></b-button>
                    <b-collapse id="toluca" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.metepec size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Metepec</div></b-button>
                          <b-collapse id="metepec" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI METEPEC</p>
                              <p class="direccion">Dirección: Av. Benito Juárez No. 73, Col. San Francisco Coaxusco, Metepec, Edo. Méx.</p>
                              <p class="telefono">Teléfono: 722 223 2323</p>
                              <p>Url:
                              <a href="http://www.hyundai-metepec.com/" target="_blank"><b class="url"> http://www.hyundai-metepec.com/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/Metepec.Hyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/Metepec.Hyundai/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.veracruz variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Veracruz</div></b-button>
                    <b-collapse id="veracruz" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.coatzacoalcos size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Coatzacoalcos</div></b-button>
                        <b-collapse id="coatzacoalcos" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI COATZACOALCOS</p>
                            <p class="direccion">Dirección: Pintores Mexicanos No. 408-b, Fracc. Paraíso, Coatzacoalcos, Veracruz.</p>
                            <p class="telefono">Teléfono:  921 4781000</p>
                            <p>Url:
                            <a href="http://www.hyundaicoatzacoalcos.com.mx/" target="_blank"><b class="url">http://www.hyundaicoatzacoalcos.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaicoatzacoalcosoficial/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaicoatzacoalcosoficial/</b></a>
                          </b-card>
                        </b-collapse>
                        <b-button v-b-toggle.hveracruz size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Veracruz</div></b-button>
                          <b-collapse id="hveracruz" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI BOCA DEL RÍO</p>
                              <p class="direccion">Dirección: Paseo Ejército Mexicano Poniente No. 2109, Col. Francisco Villa, Veracruz, Veracruz.</p>
                              <p class="telefono">Teléfono: 229 276 1700</p>
                              <p>Url:
                              <a href="http://www.hyundaiveracruz.mx/" target="_blank"><b class="url">http://www.hyundaiveracruz.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundaibocadelrio/ " target="_blank"><b class="fcb">https://www.facebook.com/hyundaibocadelrio/ </b></a>
                            </b-card>
                          </b-collapse>
                        <b-button v-b-toggle.xalapa size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Xalapa</div></b-button>
                        <b-collapse id="xalapa" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI QUANTUM</p>
                            <p class="direccion">Dirección: Av. Arco Sur No. 111 Col. Reserva Territorial , Xalapa, Veracruz.</p>
                            <p class="telefono">Teléfono:  228 819 1900</p>
                            <p>Url:
                            <a href="http://www.hyundaixalapa.mx/" target="_blank"><b class="url"> http://www.hyundaixalapa.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai-Xalapa-159383304615716/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Xalapa-159383304615716/</b></a>
                          </b-card>
                        </b-collapse>
                      </b-card>
                    </b-collapse>

                    <b-button v-b-toggle.yucatan variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Yucatán</div></b-button>
                    <b-collapse id="yucatan" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.merida size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Mérida</div></b-button>
                          <b-collapse id="merida" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI FARRERA </p>
                              <p class="direccion">Dirección: Carretera Mérida - Progreso Km. 9.5, Tablaje Catastral No. 16677, Chuburna de Hidalgo, Mérida, Yucatán.</p>
                              <p class="telefono">Teléfono: 999 341 0900</p>
                              <p>Url:
                              <a href="http://www.hyundaimerida.mx/" target="_blank"><b class="url">http://www.hyundaimerida.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/hyundai.merida1/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundai.merida1/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>


                    <b-button v-b-toggle.zacatecas variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Zacatecas</div></b-button>
                    <b-collapse id="zacatecas" class="mt-2">
                      <b-card>
                        <b-button v-b-toggle.hzacatecas size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Zacatecas</div></b-button>
                          <b-collapse id="hzacatecas" class="mt-2">
                            <b-card>
                              <p class="distribuidor">Distribuidor: HYUNDAI ZACATECAS</p>
                              <p class="direccion">Dirección: Blvd. Héroes de Chapultepec No. 1708-A, Col, La Escondida, Zacatecas, Zacatecas.</p>
                              <p class="telefono">Teléfono: 492 491 3319</p>
                              <p>Url:
                              <a href="http://hyundaizacatecas.com.mx/" target="_blank"><b class="url"> http://hyundaizacatecas.com.mx/</b></a></p>
                              Facebook:
                              <a href="https://www.facebook.com/HyundaiRealZacatecas/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiRealZacatecas/</b></a>
                            </b-card>
                          </b-collapse>
                      </b-card>
                    </b-collapse>
                  </b-modal>
                </Slide>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="row">
              <div class="col-10 logo-header-top">
                <div class="logo-header-top">
                  <img src="./assets/images/logo-hyundai-time.png" class="img-fluid "  alt="header">
                </div>
              </div>
              <div class="col-2">
                <Slide :isOpen="open2"
                    @openMenu="setOpenState()"
                    right
                    width="290"
                >
                  <a @click="$bvModal.show('agencias')"  class="" style="cursor:pointer; color:#003469; font-size:18px; text-align:left; text-decoration:underline"
                  ><b>Agenda tu prueba de manejo</b></a>
                  <section>
                    <a href="/" @click="setOpenState()" class="goToSectionHome" style="cursor:pointer; color:#003469;font-size:18px;
                    ">
                      Home
                    </a>
                  </section>

                  <section>
                    <a href="#dinamica" @click="setOpenState()" class="goToSectionDinamica" style="cursor:pointer; color:#003469;font-size:18px;
                    ">
                      Dinámica de Promoción
                    </a>
                  </section>
                  <section>
                    <a href="#instrucciones" @click="setOpenState()" class="goToSectionInstrucciones" style="cursor:pointer; color:#003469;font-size:18px;
                    ">
                      Instrucciones del Juego
                    </a>
                  </section>
                  <section>
                    <a href="#preguntas" @click="setOpenState()" class="goToSectionPreguntas" style="cursor:pointer; color:#003469;font-size:18px;
                    ">
                      Preguntas Frecuentes
                    </a>
                  </section>
                  <div class="" v-if="this.isLoggedIn == false">
                    <a @click="$bvModal.show('modal-1')"  class="" style="cursor:pointer; color:#003469;font-size:18px;"
                    >Iniciar sesión</a>
                  </div>
                  <div v-else>
                    <a @click="logOut()"  class="" style="cursor:pointer; color:#003469;font-size:18px;"
                    >Cerrar sesión</a>
                  </div>
                  <div class="" v-if="this.isLoggedIn == false">
                    <b class="" style="color:#003469;font-size:15px"></b>
                  </div>
                  <div v-else>
                    <b class="" style="color:#003469;font-size:15px">Juegos Disponibles: {{this.games}}</b>
                  </div>
                </Slide>
              </div>
            </div>
              <div class="row">
              <div class="col-12 mt-2 ">




                <b-modal id="agencias"  title="" size="lg" class="" style="overflow:hidden;font-weight:bold; border-color:transparent" centered  hide-footer>
                  <h2 class="" style="font-weight:bold; font-weight:bold; color:#003469">Busca tu Distribuidor</h2>
                  <p>¿Cuál es tu estado?</p>

                  <b-button v-b-toggle.aguascalientes variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Aguascalientes</div></b-button>
                  <b-collapse id="aguascalientes" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.haguascalientes size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Aguascalientes</div></b-button>
                        <b-collapse id="haguascalientes" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI AGUASCALIENTES</p>
                            <p class="direccion">Dirección: Blvd. Luis Donaldo Colosio Murrieta No. 354 A, Col. Puerto las Hadas, Aguascalientes, Aguascalientes.</p>
                            <p class="telefono">Teléfono: 449 478 5000</p>
                            <p>Url:
                            <a href="https://www.hyundaicampestre.com/" target="_blank"><b class="url">https://www.hyundaicampestre.com/ </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiCampestre" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiCampestre </b> </a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>

                  <b-button v-b-toggle.b-california variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Baja California</div></b-button>
                  <b-collapse id="b-california" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.cabos size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Los Cabos</div></b-button>
                      <b-collapse id="cabos" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI LOS CABOS</p>
                          <p class="direccion">Dirección: Carretera Transpeninsular Km 24 S/N Colonia Cerro Colorado San Jose Del Cabo B.C.</p>
                          <p class="telefono">Teléfono: 624 688 6796</p>
                          <p>Url:
                          <a href="https://www.hyundailoscabos.com/" target="_blank"><b class="url"> https://www.hyundailoscabos.com/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/HyundaiLosCabos/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiLosCabos/</b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.mexicali size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2" ><div class="text-localidad d-flex ml-auto">Mexicali</div></b-button>
                      <b-collapse id="mexicali" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI PREMIER MXL</p>
                          <p class="direccion">Dirección: Calz. Cetys No. 2388, Col. La Rivera, Mexicali, B.C.</p>
                          <p class="telefono">Teléfono: 686 104 2430</p>
                          <p>Url:
                          <a href="https://hyundaipremiermxl.com.mx/" target="_blank"><b class="url"> https://hyundaipremiermxl.com.mx/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/HyundaiMexicali/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiMexicali/</b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.tijuana size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tijuana</div></b-button>
                      <b-collapse id="tijuana" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI PREMIER TJ</p>
                          <p class="direccion">Dirección: Vía Rápida Poniente No. 15161, Zona Urbana Río Tijuana, Tijuana, B.C.</p>
                          <p class="telefono">Teléfono: 664 969 2929</p>
                          <p>Url:
                          <a href="https://hyundaipremiertj.com.mx/" target="_blank"><b class="url"> https://hyundaipremiertj.com.mx/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/HyundaiTijuana/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiTijuana/</b></a>
                        </b-card>
                      </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.campeche variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Campeche</div></b-button>
                  <b-collapse id="campeche" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hcampeche size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Campeche</div></b-button>
                        <b-collapse id="hcampeche" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PENÍNSULA</p>
                            <p class="direccion">Dirección: Av. Maestros Campechanos No. 528-A y 528-B, Col. Miguel Hidalgo, Ampliación San Francisco de Campeche, Campeche. </p>
                            <p class="telefono">Teléfono: 981 813 23 00</p>
                            <p>Url:
                            <a href="http://hyundaicampeche.com.mx/" target="_blank"><b class="url">http://hyundaicampeche.com.mx/ </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiCampeche/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiCampeche/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.chiapas variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Chiapas</div></b-button>
                  <b-collapse id="chiapas" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.tgutierrez size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tuxtla Gutiérrez</div></b-button>
                        <b-collapse id="tgutierrez" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI MILLENIUM</p>
                            <p class="direccion">Dirección: Libramiento Sur Poniente No. 3335, Col. Mactumactza, Tuxtla Gutiérrez, Chiapas. </p>
                            <p class="telefono">Teléfono: 961 617 6500</p>
                            <p>Url:
                            <a href="http://www.hyundaichiapas.mx/" target="_blank"><b class="url"> http://www.hyundaichiapas.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiChiapas/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiChiapas/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.chihuahua variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Chihuahua</div></b-button>
                  <b-collapse id="chihuahua" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.cjuarez size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cd. Juárez</div></b-button>
                        <b-collapse id="cjuarez" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PENTA TRIUNFO</p>
                            <p class="direccion">Dirección: Av. Paseo Triunfo de la República No. 5855, Col. Partido Díaz, Ciudad Juárez, Chihuahua. </p>
                            <p class="telefono">Teléfono: 656 438 2000</p>
                            <a href="https://hyundaipenta.com/" target="_blank"><p class="url">Url: https://hyundaipenta.com/</p></a>
                            <a href="https://www.facebook.com/hyundaipenta/" target="_blank"><p class="fcb">Facebook: https://www.facebook.com/hyundaipenta/</p></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.hchihuahua size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Chihuahua</div></b-button>
                        <b-collapse id="hchihuahua" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI  PENTA JUVENTUD</p>
                            <p class="direccion">Dirección: Av. Periférico de la Juventud No. 3905, Fracc. Hacienda la Cantera, Chihuahua, Chihuahua. </p>
                            <p class="telefono">Teléfono: 614 307 2000</p>
                            <p>Url:
                            <a href="https://hyundaipenta.com/" target="_blank"><b class="url"> https://hyundaipenta.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaipenta/" target="_blank"><b class="fcb">Facebook: https://www.facebook.com/hyundaipenta/ </b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.cdmxedo variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Ciudad de México y Edo. México</div></b-button>
                  <b-collapse id="cdmxedo" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.cdmx size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Ciudad de México</div></b-button>
                        <b-collapse id="cdmx" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI AEROPUERTO </p>
                            <p class="direccion">Dirección: Av. Fuerza Aérea Mexicana No. 520, Col. Federal, Ciudad de México. </p>
                            <p class="telefono">Teléfono: 55 8850 0000</p>
                            <p>Url:
                            <a href="http://www.hyundaiaeropuerto.com.mx/" target="_blank"><b class="url"> http://www.hyundaiaeropuerto.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiAeropuertoOficial/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAeropuertoOficial/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI INSURGENTES SUR</p>
                            <p class="direccion">Dirección: Insurgentes Sur No. 195, Col. Roma Norte, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 5511 4820</p>
                            <p>Url:
                            <a href="http://www.hyundaiherencia.com/hyundai-herencia/" target="_blank"><b class="url"> http://www.hyundaiherencia.com/hyundai-herencia/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiHerenciaInsurgentes/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiHerenciaInsurgentes/ </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI IZTAPALAPA</p>
                            <p class="direccion">Dirección: Puente de paja No.6 Col. Central de Abasto, Iztapalapa, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 7100 2100</p>
                            <p>Url:
                            <a href="http://www.hyundaiiztapalapa.com.mx/" target="_blank"><b class="url"> http://www.hyundaiiztapalapa.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiIztapalapa/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiIztapalapa/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PATRIOTISMO</p>
                            <p class="direccion">Dirección: Av. Patriotismo No. 87, Col. Escandón 1ra sección, Del. Miguel Hidalgo, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 2469 2222</p>
                            <p>Url:
                            <a href="http://www.hyundai-patriotismo.com.mx/" target="_blank"><b class="url"> http://www.hyundai-patriotismo.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaipatriotismoCDMX" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaipatriotismoCDMX   </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PEDREGAL</p>
                            <p class="direccion">Dirección: Anillo Periférico Sur No. 4258, Jardines del Pedregal de San Ángel, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 5927 5957</p>
                            <p>Url:
                            <a href="http://www.hyundaipedregal.mx/" target="_blank"><b class="url"> http://www.hyundaipedregal.mx/</b></a></p>
                            Facebook:
                            <a href=" https://www.facebook.com/Hyundai-Pedregal-308002766035166/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Pedregal-308002766035166/ </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI POLANCO</p>
                            <p class="direccion">Dirección: Campos Elíseos No. 257, Col. Polanco, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 5002 8800</p>
                            <p>Url:
                            <a href="http://www.hyundaipolanco.com.mx/" target="_blank"><b class="url"> http://www.hyundaipolanco.com.mx/ </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/agenciahyundaipolanco/" target="_blank"><b class="fcb"> https://www.facebook.com/agenciahyundaipolanco/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI SANTA FE</p>
                            <p class="direccion">Dirección: Vasco de Quiroga No. 2000, esquina Javier Barros Sierra, Col. Santa Fe, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 4123 6600</p>
                            <p>Url:
                            <a href="http://www.hyundaisantafe.com.mx/" target="_blank"><b class="url"> http://www.hyundaisantafe.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiSantaFeMx/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSantaFeMx/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI TEPEPAN</p>
                            <p class="direccion">Dirección: Periférico Sur No. 6465, Col. Valle Escondido, Tlalpan, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 5334 2800</p>
                            <p>Url:
                            <a href="http://hyundaitepepan.mx/" target="_blank"><b class="url"> http://hyundaitepepan.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiTepepanOFICIAL/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiTepepanOFICIAL/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI UNIVERSIDAD</p>
                            <p class="direccion">Dirección: Av. Universidad No. 1087, Col. Del Valle, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 1000 6300</p>
                            <p>Url:
                            <a href="http://www.hyundai-universidad.mx/" target="_blank"><b class="url"> http://www.hyundai-universidad.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiUni/?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiUni/?fref=ts</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI VALLEJO </p>
                            <p class="direccion">Dirección: Av. Montevideo No. 576, Col. Industrial Vallejo, Del. Azcapotzalco, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 4122 2000</p>
                            <p>Url:
                            <a href="http://www.hyundaivallejo.com.mx/" target="_blank"><b class="url"> http://www.hyundaivallejo.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiVallejo?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiVallejo?fref=ts </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ZAPATA </p>
                            <p class="direccion">Dirección: Calz. Ignacio Zaragoza No. 1715-B, Juan Escutia, Ciudad de México, Ciudad de México.</p>
                            <p class="telefono">Teléfono: 55 4125 1050</p>
                            <p>Url:
                            <a href="http://www.hyundaizaragoza.com.mx/" target="_blank"><b class="url"> http://www.hyundaizaragoza.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiZapata/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiZapata/ </b></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.edo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Edo. De México</div></b-button>
                        <b-collapse id="edo" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI COACALCO </p>
                            <p class="direccion">Dirección: Av. José Lopez Portillo No. 159, Col. San Lorenzo Tetlixtac, Coacalco, Edo. Méx.</p>
                            <p class="telefono">Teléfono: 55 8995 1010</p>
                            <p>Url:
                            <a href="http://www.hyundaicoacalco.com.mx" target="_blank"><b class="url"> http://www.hyundaicoacalco.com.mx</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/CoacalcoHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/CoacalcoHyundai/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI CUAUTITLÁN </p>
                            <p class="direccion">Dirección: Lateral Autopista México - Querétaro No. 14, Km 37.8, Col. Parque Industrial Cuamatla, Cuautitlán Izcalli, Edo. Méx. </p>
                            <p class="telefono">Teléfono: 55 4000 4400</p>
                            <p>Url:
                            <a href="http://www.hyundaicuautitlan.com.mx" target="_blank"><b class="url"> http://www.hyundaicuautitlan.com.mx</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai-Cuautitl%C3%A1n-Izcalli-1493319520880081" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Cuautitl%C3%A1n-Izcalli-1493319520880081</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ECATEPEC </p>
                            <p class="direccion">Dirección: Av. Vía Morelos No. 843, Col. Santa Clara Coatitla, Ecatepec de Morelos, Edo. Méx. </p>
                            <p class="telefono">Teléfono: 55 4040 9600</p>
                            <p>Url:
                            <a href="http://www.hyundaiecatepec.com.mx" target="_blank"><b class="url">http://www.hyundaiecatepec.com.mx</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiEcatepec/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiEcatepec/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI INTERLOMAS</p>
                            <p class="direccion">Dirección: Av. Vía Magna, Mza. 3, Lote 16, Col. Bosques de la Herradura, Huixquilucan, Edo. Méx. </p>
                            <p class="telefono">Teléfono: 55 5290 9080</p>
                            <p>Url:
                            <a href="http://www.daltonhyundaiinterlomas.com.mx" target="_blank"><b class="url">http://www.daltonhyundaiinterlomas.com.mx</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/DaltonHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/DaltonHyundai/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI LOMAS VERDES</p>
                            <p class="direccion">Dirección: Blvd. Manuel Ávila Camacho No. 610, Col. San Bartolo Naucalpan Centro, Naucalpan, Edo. Méx.</p>
                            <p class="telefono">Teléfono: 55 2629 2629</p>
                            <p>Url:
                            <a href="http://www.hyundailomasverdes.mx/" target="_blank"><b class="url">http://www.hyundailomasverdes.mx/</b></a></p>
                            Facebook:
                          <a href="https://www.facebook.com/hyundailomasverdesoficial/  " target="_blank">  <b class="fcb"> https://www.facebook.com/hyundailomasverdesoficial/ </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI SATÉLITE </p>
                            <p class="direccion">Dirección: Autopista México - Querétaro No. 2600, Col. Valle de los Pinos, Tlalnepantla de Baz, Edo.Méx.</p>
                            <p class="telefono">Teléfono: 55 5096 2300</p>
                            <p>Url:
                            <a href="http://www.hyundaisatelite.com.mx/" target="_blank"><b class="url"> http://www.hyundaisatelite.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiSateliteMX/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSateliteMX/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.coahuila variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Coahuila</div></b-button>
                  <b-collapse id="coahuila" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.torreon size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Torreón</div></b-button>
                      <b-collapse id="torreon" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI LAGUNA</p>
                          <p class="direccion">Dirección: Blvd. Independencia No. 999, Col. Granjas San Isidro, Torreón, Coahuila. </p>
                          <p class="telefono">Teléfono: 871 705 3800</p>
                          <p>Url:
                          <a href="http://www.hyundailaguna.com/" target="_blank"><b class="url"> http://www.hyundailaguna.com/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/LagunaHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/LagunaHyundai/</b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.saltillo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Saltillo</div></b-button>
                      <b-collapse id="saltillo" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI VALMUR SALTILLO</p>
                          <p class="direccion">Dirección: Blvd. Venustiano Carranza No. 6415, Col. Rancho de Peña, Saltillo, Coahuila. </p>
                          <p class="telefono">Teléfono: 844 261 0100</p>
                          <p>Url:
                          <a href="http://www.hyundaivalmursaltillo.com" target="_blank"><b class="url"> http://www.hyundaivalmursaltillo.com</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/HyundaiSaltillo" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiSaltillo</b></a>
                        </b-card>
                      </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.colima variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Colima</div></b-button>
                  <b-collapse id="colima" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hcolima size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Colima</div></b-button>
                        <b-collapse id="hcolima" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI TECNOLÓGICO</p>
                            <p class="direccion">Dirección: Av. Tecnológico No. 125, Col. Miguel Hidalgo, Colima, Colima. </p>
                            <p class="telefono">Teléfono: 312 159 1384</p>
                            <p>Url:
                            <a href="http://www.hyundaicolima.com/" target="_blank"><b class="url"> http://www.hyundaicolima.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaicolima/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaicolima/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.durango variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Durango</div></b-button>
                  <b-collapse id="durango" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hdurango size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Durango</div></b-button>
                        <b-collapse id="hdurango" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI VALMUR</p>
                            <p class="direccion">Dirección: Blvd. Francisco Villa No. 4025, Col. 20 de Noviembre, Durango, Durango. </p>
                            <p class="telefono">Teléfono: 618 150 2300</p>
                            <p>Url:
                            <a href="http://www.hyundaivalmur.com" target="_blank"><b class="url">http://www.hyundaivalmur.com </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiValmur/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiValmur/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.guanajuato variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Guanajuato</div></b-button>
                  <b-collapse id="guanajuato" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.celaya size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Celaya</div></b-button>
                      <b-collapse id="celaya" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI GALERÍAS CELAYA</p>
                          <p class="direccion">Dirección: Av. La Cano Oriente No. 101, Col.  Arboledas del Campestre, Celaya, Guanajuato.</p>
                          <p class="telefono">Teléfono: 461 662 7900</p>
                          <p>Url:
                          <a href="http://hyundaicelaya.com.mx/" target="_blank"><b class="url"> http://hyundaicelaya.com.mx/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/HyundaiCelayaGalerias/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiCelayaGalerias/</b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.irapuato size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Irapuato</div></b-button>
                      <b-collapse id="irapuato" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI VILLAS</p>
                          <p class="direccion">Dirección: Av. Quinta Real No. 999 esquina blvd. Villas de Irapuato, Col. San Miguelito, Irapuato, Guanajuato.</p>
                          <p class="telefono">Teléfono: 462 607 4100</p>
                          <p>Url:
                          <a href="http://www.hyundaiirapuato.com.mx/" target="_blank"><b class="url"> http://www.hyundaiirapuato.com.mx/   </b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/hyundaiirapuato/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaiirapuato/ </b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.leon size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">León</div></b-button>
                        <b-collapse id="leon" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI BAJÍO</p>
                            <p class="direccion">Dirección: Blvd. Campestre No. 1348, Col. Cerro Gordo, León, Guanajuato. </p>
                            <p class="telefono">Teléfono: 477 214 3030</p>
                            <p>Url:
                            <a href="http://www.hyundaileon.com.mx/" target="_blank"><b class="url"> http://www.hyundaileon.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundaibajio" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundaibajio</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.guerrero variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Guerrero</div></b-button>
                  <b-collapse id="guerrero" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.acapulco size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Acapulco</div></b-button>
                        <b-collapse id="acapulco" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI DIAMANTE</p>
                            <p class="direccion">Dirección: Blvd. De las Naciones No. 52 C, Col. Granjas del Marqués, Acapulco de Juárez, Guerrero.</p>
                            <p class="telefono">Teléfono: 744 202 2000</p>
                            <p>Url:
                            <a href="http://www.hyundaidiamante.com.mx/" target="_blank"><b class="url"> http://www.hyundaidiamante.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai-Diamante-983550081765389/?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Diamante-983550081765389/?fref=ts</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.hidalgo variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Hidalgo</div></b-button>
                  <b-collapse id="hidalgo" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.pachuca size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Pachuca</div></b-button>
                        <b-collapse id="pachuca" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI HAMKE PACHUCA</p>
                            <p class="direccion">Dirección: Av. Industrial La Paz No. 216, Fracc. Industrial La Paz, Pachuca, Hidalgo. </p>
                            <p class="telefono">Teléfono: 771 107 0929</p>
                            <p>Url:
                            <a href="http://www.hyundaipachuca.com.mx/" target="_blank"><b class="url"> http://www.hyundaipachuca.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaihamke/?ref=br_tf" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaihamke/?ref=br_tf</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.jalisco variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Jalisco</div></b-button>
                  <b-collapse id="jalisco" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.guadalajara size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Guadalajara</div></b-button>
                        <b-collapse id="guadalajara" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI DALTON COUNTRY </p>
                            <p class="direccion">Dirección: Av. Américas No. 1819, Col. Colomos Providencia, Guadalajara, Jalisco.</p>
                            <p class="telefono">Teléfono: 33 5000 6000</p>
                            <p>Url:
                            <a href="http://www.daltonhyundai.com.mx/" target="_blank"><b class="url"> http://www.daltonhyundai.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/DaltonHyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/DaltonHyundai/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI GONZALEZ GALLO</p>
                            <p class="direccion">Dirección: Calz. Jesús González Gallo No. 1100, Atlas, Guadalajara, Jalisco. </p>
                            <p class="telefono">Teléfono: 33 2733 0500</p>
                            <p>Url:
                            <a href="https://hyundaiglezgallo.com/cotizalo.php" target="_blank"><b class="url">https://hyundaiglezgallo.com/cotizalo.php</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiSolanaGonzalezGalloGuadalajara" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiSolanaGonzalezGalloGuadalajara </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PATRIA</p>
                            <p class="direccion">Dirección: Av. Patria No. 918, Col. Jardines Universidad, Zapopan, Jalisco. </p>
                            <p class="telefono">Teléfono: 33 3793 9393</p>
                            <p>Url:
                            <a href="http://hyundai-patria.mx/" target="_blank"><b class="url"> http://hyundai-patria.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiPatria/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiPatria/ </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PLASENCIA</p>
                            <p class="direccion">Dirección: Av. López Mateos Sur No. 2600, Col. Jardines del Sol, Zapopan, Jalisco.</p>
                            <p class="telefono">Teléfono: 33 3344 4477</p>
                            <p>Url:
                            <a href="http://www.hyundaiguadalajara.com/" target="_blank"><b class="url"> http://www.hyundaiguadalajara.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaiplasencia" target="_blank"><b class="fcb">https://www.facebook.com/hyundaiplasencia</b></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.pvallarta size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Puerto Vallarta</div></b-button>
                        <b-collapse id="pvallarta" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PUERTO VALLARTA</p>
                            <p class="direccion">Dirección: Blvrd Francisco Medina Ascencio No. 2580, Zona Hotelera Nte., Puerto Vallarta, Jalisco.</p>
                            <p class="telefono">Teléfono: 322 176 1700</p>
                            <p>Url:
                            <a href="http://www.hyundaipuertovallarta.com/" target="_blank"><b class="url"> http://www.hyundaipuertovallarta.com/ </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaivallarta/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaivallarta/ </b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>

                  <b-button v-b-toggle.michoacan variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Michoacán</div></b-button>
                  <b-collapse id="michoacan" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.morelia size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Morelia</div></b-button>
                      <b-collapse id="morelia" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI CAMELINAS</p>
                          <p class="direccion">Dirección: Blvd. Paseo de la República No. 3440, Col. Cinco de Diciembre, Morelia, Michoacán. </p>
                          <p class="telefono">Teléfono: 443 350 4300</p>
                          <p>Url:
                          <a href="http://www.hyundaicamelinas.com/" target="_blank"><b class="url">http://www.hyundaicamelinas.com/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/HyundaiSolanaMoreliaCamelinas/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiSolanaMoreliaCamelinas/</b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.uruapan size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Uruapan</div></b-button>
                      <b-collapse id="uruapan" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI URUAPAN</p>
                          <p class="direccion">Dirección: Av. Paseo Lazaro Cardenas 1142 La Magdalena Uruapan, Michoacán. </p>
                          <p class="telefono">Teléfono: 452 519 1653</p>
                          <p>Url:
                          <a href="https://hyundaiuruapan.com/?fbclid=IwAR2o2jRKicGQRjucXSt-lAo3ZmY8XLgqukQ-r87BpZHJ4yTGhPtp_zyGI5k" target="_blank"><b class="url"> https://hyundaiuruapan.com/?fbclid=IwAR2o2jRKicGQRjucXSt-lAo3ZmY8XLgqukQ-r87BpZHJ4yTGhPtp_zyGI5k</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/Hyundai-Solana-Uruapan-563543110803589/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Solana-Uruapan-563543110803589/</b></a>
                        </b-card>
                      </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.morelos variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Morelos</div></b-button>
                  <b-collapse id="morelos" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.cuernavaca size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cuernavaca</div></b-button>
                        <b-collapse id="cuernavaca" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI RÍO MAYO</p>
                            <p class="direccion">Dirección: Av. Río Mayo No. 1221, Col. Vista Hermosa, Cuernavaca, Morelos.</p>
                            <p class="telefono">Teléfono: 777 150 0000</p>
                            <p>Url:
                            <a href="http://www.hyundai-riomayo.mx/" target="_blank"><b class="url"> http://www.hyundai-riomayo.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundairiomayo" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundairiomayo</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.nayarit variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Nayarit</div></b-button>
                  <b-collapse id="nayarit" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.tepic size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tepic</div></b-button>
                        <b-collapse id="tepic" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI NAYARITA</p>
                            <p class="direccion">Dirección: Av Insurgentes No. 1121, Los Llanitos, Tepic, Nayarit.</p>
                            <p class="telefono">Teléfono: 311 690 9999</p>
                            <p>Url:
                            <a href="http://www.hyundaitepic.com/" target="_blank"><b class="url"> http://www.hyundaitepic.com/ </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundainayarita/" target="_blank"><b class="fcb">https://www.facebook.com/hyundainayarita/ </b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.nleon variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Nuevo León</div></b-button>
                  <b-collapse id="nleon" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.monterrey size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Monterrey</div></b-button>
                        <b-collapse id="monterrey" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI CONTRY</p>
                            <p class="direccion">Dirección: Av. Alfonso Reyes No. 3000, Col. Arroyo Seco, Monterrey, N.L.</p>
                            <p class="telefono">Teléfono: 81 1870 7000</p>
                            <p>Url:
                            <a href="http://www.hyundaicontry.com/" target="_blank"><b class="url"> http://www.hyundaicontry.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundaicontry" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundaicontry </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI CUMBRES</p>
                            <p class="direccion">Dirección: Av. Paseo de los Leones No. 9000, Col. Puerta de Hierro, Cumbres Monterrey, N.L.</p>
                            <p class="telefono">Teléfono: 81 2088 0000</p>
                            <p>Url:
                            <a href="http://hyundaicumbres.mx/" target="_blank"><b class="url">http://hyundaicumbres.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiCumbres" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiCumbres</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PENTA LAS TORRES</p>
                            <p class="direccion">Dirección: Lázaro Cárdenas No. 117 Pte., Col. Fraccionamiento La Diana, San Pedro Garza García, Monterrey, N.L. </p>
                            <p class="telefono">Teléfono: 81 1970 7979</p>
                            <p>Url:
                            <a href=" https://hyundaipenta.com/" target="_blank"><b class="url"> https://hyundaipenta.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai-Penta-Torres-733470150024492/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Penta-Torres-733470150024492/ </b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PENTA SENDERO </p>
                            <p class="direccion">Dirección: Av. Sendero Divisorio No. 550, Residencial Casa Bella, , San Nicolas de los Garza, N.L. </p>
                            <p class="telefono">Teléfono: 81 2270 5020</p>
                            <p>Url:
                            <a href="https://hyundaipenta.com/" target="_blank"><b class="url">https://hyundaipenta.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaipenta/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaipenta/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI LINDAVISTA</p>
                            <p class="direccion">Dirección: Av. Prol. Madero No. 3570 Col. Francisco I. Madero . Mty. N.L. </p>
                            <p class="telefono">Teléfono:  81 2956 0000</p>
                            <p>Url:
                            <a href="http://hyundailindavista.mx/" target="_blank"><b class="url"> http://hyundailindavista.mx/</b></a></p>

                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.oaxaca variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Oaxaca</div></b-button>
                  <b-collapse id="oaxaca" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hoaxaca size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Oaxaca</div></b-button>
                        <b-collapse id="hoaxaca" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ANTEQUERA</p>
                            <p class="direccion">Dirección: Símbolos Patrios No. 728-A, Col. Eliseo Jiménez Ruiz, Sta. Cruz Xoxocotlán, Oaxaca, Oaxaca.</p>
                            <p class="telefono">Teléfono: 951 501 6410</p>
                            <p>Url:
                            <a href="http://www.hyundaioaxaca.com.mx/" target="_blank"><b class="url">http://www.hyundaioaxaca.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiAntequera/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAntequera/</b></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.istmo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Salina Cruz</div></b-button>
                        <b-collapse id="istmo" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ISTMO</p>
                            <p class="direccion">Dirección: Carretera Transístmica Lote S/N Km. 10 Col. Granadillo, Salina Cruz, Oaxaca.</p>
                            <p class="telefono">Teléfono: 971 281 3560</p>
                            <p>Url:
                            <a href="http://www.hyundaiistmo.com.mx/" target="_blank"><b class="url">http://www.hyundaiistmo.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiIstmoSC/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiIstmoSC/ </b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.puebla variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Puebla</div></b-button>
                  <b-collapse id="puebla" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hpuebla size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Puebla</div></b-button>
                        <b-collapse id="hpuebla" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ANGELÓPOLIS</p>
                            <p class="direccion">Dirección: Vía Atlixcayotl No. 5310-B, Reserva Territorial Atlixcayotl, Puebla, Puebla.</p>
                            <p class="telefono">Teléfono: 222 303 3000</p>
                            <p>Url:
                            <a href="http://hyundaiangelopolis.mx/" target="_blank"><b class="url"> http://hyundaiangelopolis.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiAngelopolis/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAngelopolis/</b></a>
                          </b-card>
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI SERDÁN</p>
                            <p class="direccion">Dirección: Blvd. Hermanos Serdán No. 265, Col. Aquiles Serdán, Puebla, Puebla.</p>
                            <p class="telefono">Teléfono: 222 229 5400</p>
                            <p>Url:
                            <a href="http://hyundaiserdan.mx/" target="_blank"><b class="url">http://hyundaiserdan.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiSerdan" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiSerdan</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.queretaro variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Querétaro</div></b-button>
                  <b-collapse id="queretaro" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hqueretaro size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Querétaro</div></b-button>
                        <b-collapse id="hqueretaro" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ARCOS QRO.</p>
                            <p class="direccion">Dirección: Blvd. Bernardo Quintana No. 4345, Col. Álamos 3ra Sección, Querétaro, Querétaro.</p>
                            <p class="telefono">Teléfono: 442 214 6100</p>
                            <p>Url:
                            <a href="http://hyundaiqueretaro.com/" target="_blank"><b class="url">http://hyundaiqueretaro.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaiqro?fref=ts" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaiqro?fref=ts</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.qroo variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Quintana Roo</div></b-button>
                  <b-collapse id="qroo" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.cancun size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cancún</div></b-button>
                        <b-collapse id="cancun" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI CARIBE</p>
                            <p class="direccion">Dirección: Av. Bonampak Lote 5, Mza. 2, Col. Supermanzana 8, entre Av. Contoy y Av. Contoy Oriente, Cancún, Quintana Roo.</p>
                            <p class="telefono">Teléfono: 998 283 0103</p>
                            <p>Url:
                            <a href="http://www.hyundaicaribecancun.com/" target="_blank"><b class="url">http://www.hyundaicaribecancun.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiCancun/" target="_blank"><b class="fcb">https://www.facebook.com/HyundaiCancun/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.slp variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">San Luis Potosí</div></b-button>
                  <b-collapse id="slp" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hslp size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">San Luis Potosí</div></b-button>
                        <b-collapse id="hslp" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI LOMAS SLP</p>
                            <p class="direccion">Dirección: Av. Vega del Arroyo No. 88, Col. Lomas del Tecnológico, San Luis Potosí.</p>
                            <p class="telefono">Teléfono: 444 211 2400</p>
                            <p>Url:
                            <a href="http://www.hyundaisanluis.com/" target="_blank"><b class="url">http://www.hyundaisanluis.com/ </b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundailomas/" target="_blank"><b class="fcb">https://www.facebook.com/hyundailomas/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.sinaloa variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Sinaloa</div></b-button>
                  <b-collapse id="sinaloa" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.culiacan size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Culiacán</div></b-button>
                        <b-collapse id="culiacan" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI PREMIER CULIACÁN</p>
                            <p class="direccion">Dirección: Blvd. Pedro Infante No. 2589, Col. Country Tres Ríos, Culiacán, Sinaloa.</p>
                            <p class="telefono">Teléfono: 667 846 3000</p>
                            <p>Url:
                            <a href="https://hyundaipremier.com.mx/" target="_blank"><b class="url">https://hyundaipremier.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai.GrupoPremier/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai.GrupoPremier/</b></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.mazatlan size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Mazatlán</div></b-button>
                        <b-collapse id="mazatlan" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI GRAN PLAZA</p>
                            <p class="direccion">Dirección: Av. Reforma No. 314 Col. Flamingos, Mazatlán, Sinaloa.</p>
                            <p class="telefono">Teléfono: 669 989 4500</p>
                            <p>Url:
                            <a href="https://hyundaipremiermzt.com.mx/" target="_blank"><b class="url"> https://hyundaipremiermzt.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiMazatlan/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiMazatlan/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.sonora variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Sonora</div></b-button>
                  <b-collapse id="sonora" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.obregon size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Cd. Obregón</div></b-button>
                        <b-collapse id="obregon" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI SOLANA CAJEME (CD. OBREGÓN)</p>
                            <p class="direccion">Dirección: Norman Borlaug No. 1414 Col Campestre. </p>
                            <p class="telefono">Teléfono: 644 128 7550</p>
                            <p>Url:
                            <a href="http://www.hyundaicajeme.com/mx/es/Main/index.html" target="_blank"><b class="url">http://www.hyundaicajeme.com/mx/es/Main/index.html</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Hyundai-Solana-Obreg%C3%B3n-755986281254100/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Solana-Obreg%C3%B3n-755986281254100/</b></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.hermosillo size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Hermosillo</div></b-button>
                        <b-collapse id="hermosillo" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI SOLANA</p>
                            <p class="direccion">Dirección: Blvd. Luis Donaldo Colosio No. 621, Col. Santa Fe, Hermosillo, Sonora.</p>
                            <p class="telefono">Teléfono: 662 289 7300</p>
                            <p>Url:
                            <a href="http://www.solanahyundai.com/" target="_blank"><b class="url">http://www.solanahyundai.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiHermosillo/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiHermosillo/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.tabasco variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Tabasco</div></b-button>
                  <b-collapse id="tabasco" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.vhermosa size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Villahermosa</div></b-button>
                        <b-collapse id="vhermosa" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI TABASCO 2000</p>
                            <p class="direccion">Dirección: Prol. Ave. Paseo Usumacinta No. 1607, Col. Tabasco 2000, Villahermosa, Tabasco.</p>
                            <p class="telefono">Teléfono: 993 310 5252</p>
                            <p>Url:
                            <a href="http://hyundaitabasco.com.mx/" target="_blank"><b class="url"> http://hyundaitabasco.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaitabasco/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaitabasco/ </b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.tamaulipas variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Tamaulipas</div></b-button>
                  <b-collapse id="tamaulipas" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.tampico size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Tampico</div></b-button>
                        <b-collapse id="tampico" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI AVENIDA</p>
                            <p class="direccion">Dirección: Av. Hidalgo No. 6200, Col. Aeropuerto, Tampico, Tamaulipas.</p>
                            <p class="telefono">Teléfono: 833 228 7838</p>
                            <p>Url:
                            <a href="http://hyundaitampico.com.mx/" target="_blank"><b class="url">http://hyundaitampico.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiAvenida" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiAvenida</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.tlaxcala variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Tlaxcala</div></b-button>
                  <b-collapse id="tlaxcala" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.apizaco size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Apizaco</div></b-button>
                        <b-collapse id="apizaco" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI APIZACO</p>
                            <p class="direccion">Dirección: Carretera Mexico Veracruz km 114+190 No. 223 Col. Santa Úrsula Zimantepec, Tlaxcala. C.P. 90450</p>
                            <p class="telefono">Teléfono: 241 689 0400</p>
                            <p>Url:
                            <a href="http://hyundaiapizaco.mx/" target="_blank"><b class="url">http://hyundaiapizaco.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiApizaco/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiApizaco/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.toluca variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Toluca</div></b-button>
                  <b-collapse id="toluca" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.metepec size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Metepec</div></b-button>
                        <b-collapse id="metepec" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI METEPEC</p>
                            <p class="direccion">Dirección: Av. Benito Juárez No. 73, Col. San Francisco Coaxusco, Metepec, Edo. Méx.</p>
                            <p class="telefono">Teléfono: 722 223 2323</p>
                            <p>Url:
                            <a href="http://www.hyundai-metepec.com/" target="_blank"><b class="url"> http://www.hyundai-metepec.com/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/Metepec.Hyundai/" target="_blank"><b class="fcb"> https://www.facebook.com/Metepec.Hyundai/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.veracruz variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Veracruz</div></b-button>
                  <b-collapse id="veracruz" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.coatzacoalcos size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Coatzacoalcos</div></b-button>
                      <b-collapse id="coatzacoalcos" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI COATZACOALCOS</p>
                          <p class="direccion">Dirección: Pintores Mexicanos No. 408-b, Fracc. Paraíso, Coatzacoalcos, Veracruz.</p>
                          <p class="telefono">Teléfono:  921 4781000</p>
                          <p>Url:
                          <a href="http://www.hyundaicoatzacoalcos.com.mx/" target="_blank"><b class="url">http://www.hyundaicoatzacoalcos.com.mx/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/hyundaicoatzacoalcosoficial/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundaicoatzacoalcosoficial/</b></a>
                        </b-card>
                      </b-collapse>
                      <b-button v-b-toggle.hveracruz size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Veracruz</div></b-button>
                        <b-collapse id="hveracruz" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI BOCA DEL RÍO</p>
                            <p class="direccion">Dirección: Paseo Ejército Mexicano Poniente No. 2109, Col. Francisco Villa, Veracruz, Veracruz.</p>
                            <p class="telefono">Teléfono: 229 276 1700</p>
                            <p>Url:
                            <a href="http://www.hyundaiveracruz.mx/" target="_blank"><b class="url">http://www.hyundaiveracruz.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundaibocadelrio/ " target="_blank"><b class="fcb">https://www.facebook.com/hyundaibocadelrio/ </b></a>
                          </b-card>
                        </b-collapse>
                      <b-button v-b-toggle.xalapa size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Xalapa</div></b-button>
                      <b-collapse id="xalapa" class="mt-2">
                        <b-card>
                          <p class="distribuidor">Distribuidor: HYUNDAI QUANTUM</p>
                          <p class="direccion">Dirección: Av. Arco Sur No. 111 Col. Reserva Territorial , Xalapa, Veracruz.</p>
                          <p class="telefono">Teléfono:  228 819 1900</p>
                          <p>Url:
                          <a href="http://www.hyundaixalapa.mx/" target="_blank"><b class="url"> http://www.hyundaixalapa.mx/</b></a></p>
                          Facebook:
                          <a href="https://www.facebook.com/Hyundai-Xalapa-159383304615716/" target="_blank"><b class="fcb"> https://www.facebook.com/Hyundai-Xalapa-159383304615716/</b></a>
                        </b-card>
                      </b-collapse>
                    </b-card>
                  </b-collapse>

                  <b-button v-b-toggle.yucatan variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Yucatán</div></b-button>
                  <b-collapse id="yucatan" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.merida size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Mérida</div></b-button>
                        <b-collapse id="merida" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI FARRERA </p>
                            <p class="direccion">Dirección: Carretera Mérida - Progreso Km. 9.5, Tablaje Catastral No. 16677, Chuburna de Hidalgo, Mérida, Yucatán.</p>
                            <p class="telefono">Teléfono: 999 341 0900</p>
                            <p>Url:
                            <a href="http://www.hyundaimerida.mx/" target="_blank"><b class="url">http://www.hyundaimerida.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/hyundai.merida1/" target="_blank"><b class="fcb"> https://www.facebook.com/hyundai.merida1/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>


                  <b-button v-b-toggle.zacatecas variant="primary" class="col-12 estado" style="color:#003469; background-color:#ebeef2" aria-expanded="false"><div class="text-estado d-flex ml-auto">Zacatecas</div></b-button>
                  <b-collapse id="zacatecas" class="mt-2">
                    <b-card>
                      <b-button v-b-toggle.hzacatecas size="sm" class="col-12 localidad" style="color:#003469; background:#ebeef2"><div class="text-localidad d-flex ml-auto">Zacatecas</div></b-button>
                        <b-collapse id="hzacatecas" class="mt-2">
                          <b-card>
                            <p class="distribuidor">Distribuidor: HYUNDAI ZACATECAS</p>
                            <p class="direccion">Dirección: Blvd. Héroes de Chapultepec No. 1708-A, Col, La Escondida, Zacatecas, Zacatecas.</p>
                            <p class="telefono">Teléfono: 492 491 3319</p>
                            <p>Url:
                            <a href="http://hyundaizacatecas.com.mx/" target="_blank"><b class="url"> http://hyundaizacatecas.com.mx/</b></a></p>
                            Facebook:
                            <a href="https://www.facebook.com/HyundaiRealZacatecas/" target="_blank"><b class="fcb"> https://www.facebook.com/HyundaiRealZacatecas/</b></a>
                          </b-card>
                        </b-collapse>
                    </b-card>
                  </b-collapse>
                </b-modal>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
    <router-view/>
    <div v-if="$route.meta.header != 0">
      <footer>
          <div class="container py-4" style="max-width:98%">
            <div v-if="this.browser === 'IE'">
              <p class="promo mb-0" style="font-size:20px">*Promoción válida del 26 de Septiembre al 10 de Noviembre de 2019 y/o hasta agotar existencias.</p>
              <!-- <p class="promo" style="font-size:20px">Aplican restricciones.</p> -->
            </div>
            <div v-else>
              <div class="row footer-text">
                <div class="col-12 mb-1 promo-c">
                  <p class="promo mb-0" style="font-size:20px">*Promoción válida del 26 de Septiembre al 10 de Noviembre de 2019 y/o hasta agotar existencias.</p>
                  <!-- <p class="promo" style="font-size:20px">Aplican restricciones.</p> -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-5 flex-row align-items-center">
                <div class="row mt-3 mb-3">
                  <div class="col-12 col-md-7 d-flex justify-content-center url-site-footer">

                      <a href="https://hyundai.com.mx/" target="_blank"><h4 class="d-flex termss mb-0">hyundai.com.mx</h4></a>

                  </div>
                  <div class="col-5">
                  </div>
                </div>
                <div class="row mt-3 mb-4">
                  <div class="col-12 col-sm-6">
                    <img src="./assets/images/GARANTIA-footer.png" class="img-fluid" style="max-width: 70% !important;"  alt="Logo">
                  </div>
                  <div class="col-12 col-sm-6 mt-3 d-flex flex-row no-gutters">
                    <div class="col-4">
                      <a href="https://www.facebook.com/Hyundaimotormex/" target="_blank">
                        <img src="./assets/images/Face.png" class="img-fluid social" style=""  alt="Logo">
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="https://www.instagram.com/hyundaimotormex/?hl=es-la" target="_blank">
                        <img src="./assets/images/Insta.png" class="img-fluid social" style=""  alt="Logo">
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="https://twitter.com/hyundaimotormex?lang=en" target="_blank">
                        <img src="./assets/images/Twitter.png" class="img-fluid social" style=""  alt="Logo">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-7 logo-garantia">
                <img src="./assets/images/logo-hyundai-time_color.png" class="img-fluid" style="max-width:70% !important"  alt="Logo">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12 col-md-12 col-lg-6 d-flex flex-row justify-content-center">

                <div v-if="window.width > 580" class="d-flex justify-content-center">

                    <a href="./pdfs/BASES-LEGALES_TERMINOS Y CONDICIONES .pdf" target="_blank"  style="text-decoration:none; color: #000000;"><span class="mr-2">Términos y condiciones </span> </a>
                    <a href="./pdfs/AVISO-PRIVACIDAD.pdf" target="_blank"  style="text-decoration:none; color: #000000;"> <span class="mr-2">Aviso de privacidad</span></a>
                    <a href="./pdfs/LIBERACION.pdf" target="_blank"   style="text-decoration:none; color: #000000;"><span class=""> Aviso legal</span></a>
                </div>
                <div v-else class="">
                    <a href="./pdfs/BASES-LEGALES_TERMINOS Y CONDICIONES .pdf" target="_blank"  style="text-decoration:none; color: #000000;"><p class="terminos">Términos y condiciones </p> </a>
                    <a href="./pdfs/AVISO-PRIVACIDAD.pdf" target="_blank"  style="text-decoration:none; color: #000000;"> <p class="terminos">Aviso de privacidad</p></a>
                    <a href="./pdfs/LIBERACION.pdf" target="_blank"   style="text-decoration:none; color: #000000;"><p class="terminos"> Aviso legal</p></a>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-6">
                <p class=""> &copy; Copyright 2019 Hyundai Time. Todos los derechos reservados</p>
              </div>
            </div>
          </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import JQuery from 'jquery';
let $ = JQuery;



export default {
  components:{
     Slide,
  },
  data() {
    return {
      window: {
          width: 0,
        },
        isLoggedIn:false,
        loggedInUser: null,
        actionNav: true,
        open2: false,
        open1: false,
    }
  },
  computed: {
    games: function() {
      if(this.loggedInUser) {
        return this.loggedInUser.max_games - this.loggedInUser.games.length
      } else {
        return 0;
      };
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    let token = window.localStorage.getItem('TOKEN');
    let uid = window.localStorage.getItem('UID');
    let client = window.localStorage.getItem('CLIENT');
     if(token && uid && client !== ''){
         this.isLoggedIn = true
     }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    logOut(){
        localStorage.clear()
        window.location.reload(true);
    },
    jumpToInstructions(){
      window.location.hash = "jump_to_this_location";
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
    setOpenState() {
        this.open2 = false;
      },
  },
  mounted: function() {
    $(function() {
      $('.goToSectionDinamica  ').click (function() {
        $('html, body').animate({scrollTop: $('section.dinamica').offset().top }, 'slow');
        return true;
      });
    }),
    $(function() {
      $('.goToSectionHome  ').click (function() {
        $('html, body').animate({scrollTop: $('section.home').offset().top }, 'slow');

        return true;
      });
    }),
    $(function() {
      $('.goToSectionPreguntas  ').click (function() {
        $('html, body').animate({scrollTop: $('section.preguntas').offset().top }, 'slow');
        return true;
      });
    }),
    $(function() {
      $('.goToSectionInstrucciones  ').click (function() {
        $('html, body').animate({scrollTop: $('section.instrucciones').offset().top }, 'slow');
        return true;
      });
    });
  }

}
</script>

<style lang="scss">
#app {
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}
#nav {
  width: 100%;
  // padding-right: 16px;
  // padding-top: 20px;

  a {

    color: #FFFF;
    &.router-link-exact-active {
      color: #FFFF;
    }
  }
}
footer {
  background-color: #FFFF;

}
</style>
