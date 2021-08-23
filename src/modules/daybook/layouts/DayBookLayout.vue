<template>
  <Navbar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>



<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
  created() {
    this.loadEntries();
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
};
</script>