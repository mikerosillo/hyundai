import axios from "axios";

export default {
  methods: {
    checkIfLogged(){
        var vm = this;
        return new Promise((resolve, reject) => {
          let token = window.localStorage.getItem('TOKEN');
          let uid = window.localStorage.getItem('UID');
          let client = window.localStorage.getItem('CLIENT');
          if(token){
            axios.get(
              `${process.env.VUE_APP_BACKEND_URL}/auth/validate_token`,
              {
                headers: {
                  'access-token': token,
                  'client': client,
                  'uid': uid
                }
              }
            )
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              reject(error.response.data);
            });
          } else {
            reject();
          }
        });

    }
  }
}
