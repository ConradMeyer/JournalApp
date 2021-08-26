<template>
  <div class="home">
    <div class="container">
      <div>
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>

      <!-- <h1>Bienvenido a mi diario.</h1> -->

      <button @click="goToDaybook" class="btn btn-success">ENTRAR</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: cadetblue;
  height: 100vh;
  padding-top: 100px;
  .container {
    text-align: center;
    button {
      box-shadow: 5px 10px 20px rgba($color: #000000, $alpha: 0.5);
      width: 30%;
      font-weight: bold;
    }
  }
}
</style>

