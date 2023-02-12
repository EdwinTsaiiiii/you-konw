<template>
  <div class="container">
    <gobal-header :user="user"></gobal-header>
    <router-view></router-view>
    <gobal-footer></gobal-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import GobalHeader from "./components/GobalHeader.vue";
import GobalFooter from "./components/GobalFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    GobalHeader,
		GobalFooter
  },
  setup() {
    const store = useStore();
    const currentUser = store.state.user;
    return {
      user: currentUser,
    };
  },
});
</script>

<style scoped></style>
