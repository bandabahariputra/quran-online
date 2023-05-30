<script setup lang="ts">
defineProps({
  show: Boolean,
});

const emit = defineEmits(['submit']);

const name = ref('');

const handleSubmit = () => {
  emit('submit', name.value);
};

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="show"
      class="fixed left-0 top-0 z-[9999] h-screen w-full bg-black/40 px-6"
    >
      <div class="mx-auto mt-16 max-w-sm rounded-xl bg-white p-4">
        <p class="mb-2 font-bold">Change name:</p>
        <form class="text-right" @submit.prevent="handleSubmit">
          <input
            v-model="name"
            type="text"
            placeholder="E.g. Octa"
            class="mb-4 w-full rounded-full border border-qo-4 bg-qo-4 px-5 py-3 text-base outline-none transition-all duration-300 focus:border-qo-2"
          />
          <button
            class="rounded-lg bg-qo-2 px-4 py-1 text-white transition-all duration-300 hover:bg-qo-1"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
