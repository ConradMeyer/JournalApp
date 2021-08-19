<template>
  <div class="home">
    <h1 class="mx-5">Hola Mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary mx-5">Go To Daybook</button>
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
