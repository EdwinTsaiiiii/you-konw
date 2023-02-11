<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt"; // vue3没有on和off，采用mitt插件实现跨组件通信
type ValidateFunc = () => boolean;
// 定义一个 events 类型，这个定义是让事件和对应的 callback 一一对应
type Events = {'form-item-created': ValidateFunc}
// 实例化 mitt 的时候，作为泛型传递进去
export const emitter = mitt<Events>();
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit("form-submit", result);
    };
    const callback = (func?:ValidateFunc) => {
      if (func) funcArr.push(func);
    };
		// 注：mitt 定义文件升级所致，此处和原来的定义有略微出入
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>
<style scoped></style>
