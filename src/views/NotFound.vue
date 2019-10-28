<template>
  <div  class="home-main">
      <div class="not-found">
          <a href="/">
            <img  src="../assets/images/sitio-hyundai-time_error-cortada.png" style="width:100%; height:auto; cursor:pointer; margin-top:30px" v-on:click="logOut()" />
          </a>
      </div>
  </div>
</template>
<script>

export default {
    data() {
        return {
            window: {
             width: 0,
            },
        }
        
    },
    methods:{
        logOut() {
        window.location.reload(true);
        },
    },
}
</script>
