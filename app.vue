<script setup lang="ts">
const route = useRoute();
const showMenu = ref(false);

onMounted(() => {
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && showMenu.value) {
      showMenu.value = false;
    }
  });
});

watch(route, () => {
  showMenu.value = false;
});

watch(showMenu, () => {
  const body = document.querySelector('body') as HTMLBodyElement;

  if (showMenu.value) {
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'auto';
  }
});
</script>

<template>
  <div class="min-h-screen w-full bg-qo-0 text-qo-1">
    <div class="mx-auto h-full w-full md:max-w-2xl">
      <div class="sticky top-0 z-50 bg-qo-0 px-6 py-2">
        <div class="relative">
          <div
            v-if="showMenu"
            class="fixed left-0 top-0 h-screen w-full bg-black/5"
            @click="showMenu = !showMenu"
          />
          <i
            class="ph-bold ph-list cursor-pointer text-3xl"
            @click="showMenu = !showMenu"
          />
          <Transition name="menu">
            <div v-if="showMenu" class="absolute left-0 top-full">
              <ul class="w-48 overflow-hidden rounded-xl bg-white shadow-sm">
                <li>
                  <NuxtLink to="/" class="inline-block h-full w-full px-4 py-2"
                    >Home</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/quran"
                    class="inline-block h-full w-full px-4 py-2"
                    >Quran</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease-in-out;
}
.menu-enter-from,
.menu-leave-to {
  transform-origin: left top;
  transform: scale(0);
  opacity: 0;
}
</style>
