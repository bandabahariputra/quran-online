<script setup lang="ts">
const filter = ref(['SURAH', 'JUZ', 'PAGE']);
const selectedFilter = ref('SURAH');
</script>

<template>
  <!-- greeting -->
  <div class="px-6 py-4">
    <p class="text-sm text-qo-2">Al-Quran</p>
    <p class="text-xl font-bold">Reading Surah</p>
  </div>
  <!-- search -->
  <div class="px-6">
    <div class="relative">
      <input
        type="text"
        placeholder="Search surah"
        class="w-full rounded-full border border-qo-4 bg-qo-4 px-5 py-3 text-base outline-none transition-all duration-300 focus:border-qo-2"
      />
      <i
        class="ph-bold ph-magnifying-glass absolute right-5 top-1/2 -translate-y-1/2 text-qo-2"
      />
    </div>
  </div>
  <!-- quick access -->
  <div class="py-4">
    <div class="mb-2 px-6">
      <p class="text-sm text-qo-2">QUICK ACCESS</p>
    </div>
    <div class="hide-scroll flex items-center gap-2 overflow-x-auto px-6">
      <span
        v-for="item in 20"
        :key="item"
        class="inline-block cursor-pointer whitespace-nowrap rounded-full border-[1.75px] border-qo-2 px-2.5 py-0.5 text-sm font-semibold transition-all duration-300 hover:bg-qo-2 hover:text-white"
      >
        Surah 1
      </span>
    </div>
  </div>
  <!-- list surah -->
  <div class="px-6 py-4">
    <div class="mb-2 flex items-end">
      <div
        v-for="item in filter"
        :key="item"
        class="w-full cursor-pointer border-b-2 py-1 text-center transition-all duration-300"
        :class="{
          'border-qo-2': item === selectedFilter,
          'border-qo-4': item !== selectedFilter,
        }"
        @click="selectedFilter = item"
      >
        <p class="text-qo-2">{{ item }}</p>
      </div>
    </div>
    <div class="divide-y divide-qo-4">
      <div v-for="item in 10" :key="item" class="flex items-center gap-4 py-3">
        <div class="relative grid h-10 w-10 place-items-center">
          <p class="text-xs">{{ item }}</p>
          <i
            class="ph ph-brackets-curly absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-qo-1/90"
          />
        </div>
        <div>
          <p class="font-semibold">Al-Fatihah</p>
          <p class="text-sm text-qo-2">The Opening</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>
