<template>
  <div class="container">
    <GobalHeader :user="user"></GobalHeader>
    <ColumnList :list="list"></ColumnList>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label" for="email-input">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          type="text"
          placeholder="请输入邮箱地址"
          id="email-input"
          ref="inputRef"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label class="form-label" for="password-input">密码</label>
        <ValidateInput
          :rules="passwordRules"
          v-model="passwordVal"
          type="password"
          placeholder="请输入密码"
          id="password-input"
        ></ValidateInput>
      </div>
      <template v-slot:submit> </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GobalHeader, { UserProps } from "./components/GobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "",
    // "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test4专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];
const currentUser: UserProps = {
  isLogin: true,
  name: "edwin",
};
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GobalHeader,
    ValidateInput,
    ValidateForm,
  },
  setup() {
    // 拿到输入框/子组件的实例
    const inputRef = ref<any>();
    const emailVal = ref("edwin123@qq.com");
    const emailRules: RulesProp = [
      { type: "required", message: "邮箱不能为空" },
      { type: "email", message: "邮箱不合法" },
    ];
    const passwordVal = ref("123qwe");
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];
    const onFormSubmit = (result: boolean) => {
      // 可以通过ref调用子组件的函数，获取子组件其他操作也行
      console.log(inputRef.value.validateInput());
      console.log("123", result);
    };
    return {
      list: testData,
      user: currentUser,
      emailRules,
      emailVal,
      passwordRules,
      passwordVal,
      onFormSubmit,
      inputRef,
    };
  },
});
</script>

<style scoped></style>
