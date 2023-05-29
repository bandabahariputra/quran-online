<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook('page:start', () => {
  loading.value = true;
});

nuxtApp.hook('page:finish', () => {
  loading.value = false;
});

watch(loading, () => {
  const body = document.querySelector('body') as HTMLBodyElement;

  if (loading.value) {
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'auto';
  }
});
</script>

<template>
  <div v-if="loading">
    <div
      class="fixed left-0 top-0 z-[9999] grid h-screen w-full select-none place-items-center bg-black/50"
    >
      <img
        src="~/assets/images/quran.png"
        alt="quran"
        class="w-1/3 animate-bounce md:w-56"
      />
    </div>
  </div>
</template>
