<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Button />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Button: defineAsyncComponent(() => import('../components/Button.vue'))
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>