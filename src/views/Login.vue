<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">Login You Konw</h5>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label" for="email-input">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          type="text"
          placeholder="请输入邮箱地址"
          id="email-input"
          ref="inputRef"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label" for="password-input">密码</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          type="password"
          placeholder="请输入密码"
          id="password-input"
        ></validate-input>
      </div>
      <template v-slot:submit> </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ValidateInput from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
import { emailRules, passwordRules } from "../plugins/validate";

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const emailVal = ref("edwin123@qq.com");
    const passwordVal = ref("123qwe");
    const onFormSubmit = (result: boolean) => {
      if (result) {
        router.push("/");
        store.commit("login");
      }
    };
    return {
      emailRules,
      emailVal,
      passwordRules,
      passwordVal,
      onFormSubmit,
    };
  },
});
</script>
<style scoped></style>
