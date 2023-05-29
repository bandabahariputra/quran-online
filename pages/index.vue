<script setup lang="ts">
interface PrayerSchedule {
  jadwal: {
    subuh: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
  };
}

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const { data: prayerSchedules } = await useFetch<{
  status: string;
  data: PrayerSchedule;
}>(`https://api.myquran.com/v1/sholat/jadwal/1301/${year}/${month + 1}/${day}`);

const fullMonth = computed(() => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[month];
});

const newPrayerSchedules = computed(() => {
  if (prayerSchedules.value) {
    const schedule = prayerSchedules.value.data.jadwal;

    return [
      {
        name: 'Fajr',
        time: schedule.subuh,
        icon: 'ph-moon-stars',
      },
      {
        name: 'Dzuhr',
        time: schedule.dzuhur,
        icon: 'ph-sun',
      },
      {
        name: 'Asr',
        time: schedule.ashar,
        icon: 'ph-cloud-sun',
      },
      {
        name: 'Maghrib',
        time: schedule.maghrib,
        icon: 'ph-sun-horizon',
      },
      {
        name: 'Isha',
        time: schedule.isya,
        icon: 'ph-moon',
      },
    ];
  }
});
</script>

<template>
  <!-- greeting -->
  <div class="p-4">
    <p class="text-sm text-qo-2">Assalamualaikum</p>
    <p class="text-xl font-bold">Ahmad</p>
  </div>
  <!-- location -->
  <div class="px-4">
    <div
      class="rounded-xl bg-gradient-to-r from-[#11A0EA] to-[#E66BF4] p-4 text-white"
    >
      <p class="text-xl font-bold">{{ fullMonth }} {{ day }}, {{ year }}</p>
      <p class="text-sm">Jakarta, Indonesia</p>
    </div>
  </div>
  <!-- prayer schedule -->
  <div v-if="newPrayerSchedules" class="p-4">
    <div class="flex items-center">
      <div
        v-for="item in newPrayerSchedules"
        :key="item.name"
        class="flex w-full flex-col items-center gap-1"
      >
        <p class="font-semibold">{{ item.name }}</p>
        <div class="grid h-8 w-8 place-items-center">
          <i class="ph-fill text-2xl" :class="item.icon" />
        </div>
        <p class="font-semibold">{{ item.time }}</p>
      </div>
    </div>
  </div>
  <!-- last read -->
  <div class="p-4">
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
