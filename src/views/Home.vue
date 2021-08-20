<template>
  <div class="home">
    <button @click="goToDaybook" class="btn btn-primary">Go To Daybook</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    display: flex;
    background-color: burlywood;
    button {
      margin: 250px auto;
      box-shadow: 5px 15px 15px rgba($color: #000000, $alpha: 0.5);
      transition: all 0.5s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>
