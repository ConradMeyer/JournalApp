<template>
  <div class="entry-list-container">
    <div class="p-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>
    <div class="entry-scrollarea">
      <div v-for="item in 10" :key="item">
        <Entry />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #264653;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
    overflow: scroll;
}
</style>