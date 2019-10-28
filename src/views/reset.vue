<template>
  <div class="reset-main">
      <div class="container mt-5">
           <div class="row">
                <div class="col-12">
                    <h1 class="mt-5" style="color:transparent">space</h1>
                </div>
            </div>
            <div class="jumbotron" style="margin-top:200px; margin-bottom:200px">
                <form @submit.prevent="handleSubmitReset">
                    <h1 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Cambiar contraseña{{this.status}}</h1>
                    <div class="form-group">
                    <label for="password"></label>
                        <input placeholder="Nueva Contraseña" type="password" v-model="passwords.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted2 && $v.passwords.password.$error }" />
                        <div v-if="submitted2 && !$v.passwords.password.required" class="invalid-feedback">
                            Ingrese una nueva contraseña
                        </div>
                        <div v-if="submitted2 && !$v.passwords.password.minLength" class="invalid-feedback">
                            La contraseña debe tener al menos 8 caracteres
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passwordConfirmation"></label>
                        <input placeholder="Confirmar Nueva Contraseña" type="password" v-model="passwords.password_confirmation" id="passwordConfirmation" name="passwordConfirmation" class="form-control" :class="{ 'is-invalid': submitted2 && $v.passwords.password_confirmation.$error }" />
                        <div v-if="submitted2 && !$v.passwords.password_confirmation.required" class="invalid-feedback">
                            Ingrese confirmación de nueva contraseña
                        </div>
                        <div v-else-if="submitted2 && !$v.passwords.password_confirmation.sameAs" class="invalid-feedback">
                            La contraseña no coincide
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col-12">
                    <h1 class="" style="font-weight:bold ; font-weight:bold; color:#003469">Cambiar contraseña{{this.status}}</h1>
                </div>
            </div>
      </div>
  </div>
</template>
<script>

import axios from "axios";
import { required, email, minLength, sameAs, minValue, maxValue } from "vuelidate/lib/validators";
export default {

    data(){
        return {
          passwords:{
                password:'',
                password_confirmation:'',
          },
            resetResponse:'',
            token:'',
            client:'',
            uid:'',
            token1:'',
            client1:'',
            uid1:'',
            status:'',
            q:[],
            submitted2:false,

        }
    },
    validations: {
       passwords: {
            password: { required, minLength: minLength(8) },
            password_confirmation: { required, sameAs: sameAs('password') },
       }
    },
    mounted() {
        let urlParams = new URLSearchParams(window.location.search);
        this.token1 = urlParams.get('access-token');
        this.client1 = urlParams.get('client');
        this.uid1 = urlParams.get('uid');
    },
    methods: {
        handleSubmitReset(e) {

            this.submitted2 = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.passwords.$invalid) {
                // this.clearState()
                return;
            }

            this.resetPassword();
        },
        resetPassword(){
            var vm = this;
            axios({ method: "PUT", "url": `${process.env.VUE_APP_BACKEND_URL}/auth/password`,
                "data": {
                password: vm.passwords.password,
                password_confirmation: vm.passwords.password_confirmation
            },
            "headers": {
                'access-token': vm.token1,
                'uid': vm.uid1,
                'client': vm.client1,
                }
            }).then(result => {
                vm.resetResponse = result;
                // vm.token = result.headers['access-token'];
                // vm.uid = result.headers['uid'];
                // vm.client = result.headers['client'];
                // window.localStorage.setItem('TOKEN', vm.token);
                // window.localStorage.setItem('UID', vm.uid);
                // window.localStorage.setItem('CLIENT', vm.client)
                // alert(result)
            }
            ).catch(error => {
                vm.status = error.result;
                })
            .finally(() => {
                if(vm.resetResponse == ''){
                    vm.status = 'Server Error'
                }
                else {
                    window.location.replace("http://front-hyundai.s3-website-us-west-2.amazonaws.com");
                    // window.location.reload(true);
                }
            })
        },
    }
}
</script>
