<template>
  <div>
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <div class="form-label"></div>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        >
        </validate-input>
      </div>
      <div class="mb-3">
        <div class="form-label"></div>
        <validate-input
          :rules="contentRules"
          v-model="contentVal"
          placeholder="请输入文章内容"
          type="text"
          tag="textarea"
          rows="10"
        >
        </validate-input>
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store";
import { PostProps } from "../testData";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";
import { titleRules, contentRules } from "../plugins/validate";

export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup(props) {
    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const titleVal = ref("");
    const contentVal = ref("");
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { columnId } = store.state.user;
        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createdAt: new Date().toLocaleString(),
          };
          store.commit("createPost", newPost);
          router.push({ name: "column", params: { id: columnId } });
        }
      }
    };
    return {
      titleVal,
      titleRules,
      contentVal,
      contentRules,
      onFormSubmit,
    };
  },
});
</script>
<style scoped></style>
