<template>
    <div class="game-main">
      <canvas id="canvas" class='ani_hack' width="1280" height="640"> </canvas>
      <div data-orientation="landscape" class="orientation-msg-container"><p class="orientation-msg-text">Por favor gira tu dispositivo.</p></div>
      <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
    </div>
</template>

<script>
  import authMixin from '../mixins/authentication';
  import axios from "axios";
  // import '../assets/js/jquery-3.2.1.min.js';
  // import '../assets/js/easeljs-NEXT.min.js';
  // import '../assets/js/tweenjs.min.js';
  // import '../assets/js/howler.min.js';
  // import '../assets/js/Three.js';
  // import '../assets/js/main.min.js';

  export default {
    mixins: [authMixin],
    data() {
      return {
        token: null,
        uid: null,
        client: null,
      }
    },
    created() {
      // hack
      if(s_oMain){
        window.location.reload()
      }
      const vm = this;
      this.checkIfLogged()
          .then(response => {
            vm.token = window.localStorage.getItem('TOKEN')
            vm.uid = window.localStorage.getItem('UID')
            vm.client = window.localStorage.getItem('CLIENT')
            var games = response.data.app_user.max_games - response.data.app_user.games.length
            if(games <= 0){
              vm.$notify({
                title: 'Ya ha utilizados todos sus intentos',
                text: `Por el momento solo se le permite ${response.data.app_user.max_games} juegos, ya ha utilizado todos sus intentos`,
                type: 'error'
              })
              vm.$router.push({ path: '/'})
            }
          })
          .catch(err =>{
            // TODO: show error maybe
            this.$router.push({ path: '/'})
          });
    },
    mounted() {
      // hack
      if(s_oMain){
        window.location.reload()
      }
      var oMain = new CMain({
        area_goal: [{id: 0, probability: 100}, {id: 1, probability: 80}, {id: 2, probability: 60},
            {id: 3, probability: 80}, {id: 4, probability: 100}, {id: 5, probability: 75},
            {id: 6, probability: 60}, {id: 7, probability: 50}, {id: 8, probability: 60},
            {id: 9, probability: 75}, {id: 10, probability: 80}, {id: 11, probability: 65},
            {id: 12, probability: 70}, {id: 13, probability: 65}, {id: 14, probability: 80}], //PROBABILITY AREA GOALS START TO LEFT UP TO RIGHT DOWN
        //0 1 2 3 4
        //5 6 7 8 9
        //10 11 12 13 14


        score_goal:10,
        score_goal_missed:-5,
        score_ball_saved: 5, //ADD SCORE WHEN THE GLOVES SAVE BALL
        score_goal_opponent: -5, // ADD SCORE WHEN THE OPPONENT GOAL
        check_orientation:true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        fullscreen: true //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
      });
      if (isIOS()) {
          setTimeout(function () {
              sizeHandler();
          }, 200);
      } else {
          sizeHandler();
      }

      $(oMain).on("start_session", function (evt) {
        axios({
          method: "POST",
          "url": `${process.env.VUE_APP_BACKEND_URL}/games`,
          "data": { "game": {
            score: null
          }},
          "headers": {
            "content-type": "application/json",
            "uid": vm.uid || window.localStorage.getItem('UID'),
            "access-token": vm.token || window.localStorage.getItem('TOKEN'),
            "client": vm.client || window.localStorage.getItem('CLIENT')
          }
        })
        .then((result) => {
          // SUCCESS!!
          // vm.$notify({
          //   title: 'Juego comenzo',
          //   text: 'Su puntuacion se ha enviado exitosamente',
          //   type: 'success'
          // })
        }).catch((err) => {
          // ERROR :(
          // vm.$notify({
          //   title: 'Juego no valido',
          //   text: 'Hubo un error al enviar su puntuacion, ha utilizado todos sus intentos',
          //   type: 'error'
          // })
        });
      });

      const vm = this;
      $(oMain).on("end_session", function (evt, params) {
        axios({
          method: "POST",
          "url": `${process.env.VUE_APP_BACKEND_URL}/games`,
          "data": { "game": {
            score: params.score,
            time: params.time
          }},
          "headers": {
            "content-type": "application/json",
            "uid": vm.uid || window.localStorage.getItem('UID'),
            "access-token": vm.token || window.localStorage.getItem('TOKEN'),
            "client": vm.client || window.localStorage.getItem('CLIENT')
          }
        })
        .then((result) => {
          // SUCCESS!!
          vm.$notify({
            title: 'Juego terminado',
            text: 'Su puntuacion se ha enviado exitosamente',
            type: 'success'
          })
          setTimeout(function () {
              vm.$router.push({ path: '/'})
          }, 5000);
        }).catch((err) => {
          // ERROR :(
          vm.$notify({
            title: 'Juego no valido',
            text: 'Hubo un error al enviar su puntuacion, ha utilizado todos sus intentos',
            type: 'error'
          })
          setTimeout(function () {
              vm.$router.push({ path: '/'})
          }, 5000);
        });
      });
    },
    destroyed(){
      Howler.mute(true);
      s_bAudioActive = false;
    }
  }
</script>
