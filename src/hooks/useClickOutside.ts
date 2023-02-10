import { ref, onMounted, onUnmounted, Ref } from "vue";

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      isClickOutSide.value = elementRef.value.contains(e.target as HTMLElement)
        ? false
        : true;
    }
  };
	onMounted(() => {
		document.addEventListener("click", handler);
	});
	onUnmounted(() => {
		document.removeEventListener("click", handler);
	});
	return isClickOutSide;
};
export default useClickOutSide;