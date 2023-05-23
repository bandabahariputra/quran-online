<script setup lang="ts">
const prayerSchedules = ref([
  {
    name: 'fajr',
    time: '04:40',
    icon: 'ph-moon-stars',
  },
  {
    name: 'fajr',
    time: '04:40',
    icon: 'ph-sun',
  },
  {
    name: 'fajr',
    time: '04:40',
    icon: 'ph-cloud-sun',
  },
  {
    name: 'fajr',
    time: '04:40',
    icon: 'ph-sun-horizon',
  },
  {
    name: 'fajr',
    time: '04:40',
    icon: 'ph-moon',
  },
]);
</script>

<template>
  <!-- greeting -->
  <div class="px-6 py-4">
    <p class="text-sm text-qo-2">Assalamualaikum</p>
    <p class="text-xl font-bold">Ahmad</p>
  </div>
  <!-- location -->
  <div class="px-6">
    <div
      class="rounded-xl bg-gradient-to-r from-[#11A0EA] to-[#E66BF4] p-4 text-white"
    >
      <p class="text-xl font-bold">9 Ramadhan 1444 H</p>
      <p class="text-sm">Jakarta, Indonesia</p>
    </div>
  </div>
  <!-- prayer schedule -->
  <div class="px-6 py-4">
    <div class="flex items-center">
      <div
        v-for="item in prayerSchedules"
        :key="item.name"
        class="flex w-full flex-col items-center gap-1"
      >
        <p class="font-semibold">fajr</p>
        <div class="grid h-8 w-8 place-items-center">
          <i class="ph-fill text-2xl" :class="item.icon" />
        </div>
        <p class="font-semibold">04:40</p>
      </div>
    </div>
  </div>
  <!-- last read -->
  <div class="px-6 py-4">
    <div class="mb-2">
      <p class="text-lg font-bold">Last read</p>
    </div>
    <div>
      <div class="rounded-xl bg-white p-4">
        <div
          class="inline-block rounded-full bg-qo-3/20 px-3 py-1 text-xs text-qo-3"
        >
          <p class="font-semibold">22 MEI</p>
        </div>
        <div class="mt-2">
          <p class="mb-1 font-semibold">Quran Juz 1</p>
          <p class="text-sm text-qo-2">Al-Fatihah 1 - Al-Baqarah 141</p>
        </div>
      </div>
    </div>
  </div>
</template>
