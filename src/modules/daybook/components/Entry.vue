<template>
  <div
    class="entry-container pointer px-2 py-4"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold"> 15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore
      officiis odio magni suscipit, minus rem. Possimus iure, ut at quia qui
      quos doloremque eos iusto. Unde nam voluptate sapiente.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #264653;
  transition: 0.2s all ease-in;

  &:hover {
    background: lighten($color: grey, $amount: 45);
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>