<script setup lang="ts">
interface Translation {
  en: string;
  id: string;
}

interface Name {
  short: string;
  translation: Translation;
  transliteration: Translation;
}

interface SurahItem {
  number: number;
  name: Name;
}

const keyword = ref('');
const filter = ref(['SURAH']);
const selectedFilter = ref('SURAH');

const { data: surahs } = await useFetch<{
  code: number;
  status: string;
  message: string;
  data: SurahItem[];
}>('https://api.quran.gading.dev/surah');

const quickAccessSurahs = computed(() => {
  if (surahs.value?.data) {
    const newSurahs = [...surahs.value?.data];
    const quickAccess = newSurahs
      .sort(() => 0.5 - Math.random())
      .map((item) => ({
        number: item.number,
        name: item.name,
      }))
      .splice(0, 10);

    return [...quickAccess];
  }
});

const filteredSurahs = computed(() => {
  if (surahs.value?.data && keyword.value) {
    const newSurahs = [...surahs.value?.data];
    const filtered = newSurahs.filter((item) =>
      item.name.transliteration.id.toLowerCase().includes(keyword.value)
    );

    return [...filtered];
  } else {
    return surahs.value?.data;
  }
});
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
        v-model="keyword"
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
  <div v-if="quickAccessSurahs" class="py-4">
    <div class="mb-2 px-6">
      <p class="text-sm text-qo-2">QUICK ACCESS</p>
    </div>
    <div class="hide-scroll flex items-center gap-2 overflow-x-auto px-6">
      <NuxtLink
        v-for="item in quickAccessSurahs"
        :key="item.number"
        :to="`/surah/${item.number}`"
        class="inline-block cursor-pointer whitespace-nowrap rounded-full border-[1.75px] border-qo-2 px-2.5 py-0.5 text-sm font-semibold transition-all duration-300 hover:bg-qo-2 hover:text-white"
      >
        {{ item.name.transliteration.id }}
      </NuxtLink>
    </div>
  </div>
  <!-- list surah -->
  <div v-if="filteredSurahs" class="px-6 py-4">
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
    <div v-if="keyword">
      <p>
        Keyword: <span class="font-semibold">&ldquo;{{ keyword }}&rdquo;</span>
      </p>
    </div>
    <div class="divide-y divide-qo-4">
      <NuxtLink
        v-for="item in filteredSurahs"
        :key="item.number"
        :to="`/surah/${item.number}`"
        class="flex items-center justify-between gap-4 py-3"
      >
        <div class="flex items-center gap-4">
          <div class="relative grid h-10 w-10 place-items-center">
            <p class="text-xs font-medium">{{ item.number }}</p>
            <i
              class="ph ph-brackets-curly absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-qo-1/90"
            />
          </div>
          <div>
            <p class="font-semibold">{{ item.name.transliteration.id }}</p>
            <p class="text-sm text-qo-2">{{ item.name.translation.id }}</p>
          </div>
        </div>
        <div>
          <p class="font-quran text-xl">{{ item.name.short }}</p>
        </div>
      </NuxtLink>
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
