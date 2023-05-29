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

interface Verse {
  number: {
    inSurah: number;
  };
  text: {
    arab: string;
  };
}

interface PreBismillah {
  text: {
    arab: string;
  };
}

interface SurahItem {
  number: number;
  name: Name;
  preBismillah: PreBismillah;
  verses: Verse[];
}

const route = useRoute();
const router = useRouter();

const { data: surah } = await useFetch<{
  code: number;
  status: string;
  message: string;
  data: SurahItem;
}>('https://api.quran.gading.dev/surah/' + route.params.id);

if (!surah.value?.data) {
  console.log('ts');
  router.push('/quran');
}
</script>

<template>
  <div v-if="surah?.data" class="px-6 py-4">
    <div class="mb-8">
      <p class="text-center text-lg font-bold">
        {{ surah?.data.name.transliteration.id }}
      </p>
      <p class="text-center text-sm text-qo-2">
        {{ surah?.data.name.translation.id }}
      </p>
    </div>
    <div v-if="surah?.data.preBismillah" class="mb-4">
      <p class="text-center font-quran text-3xl">
        {{ surah?.data.preBismillah.text.arab }}
      </p>
    </div>
    <div
      dir="rtl"
      :class="[route.params.id === '1' ? 'text-center' : 'text-justify']"
    >
      <div
        v-for="item in surah?.data.verses"
        :key="item.number.inSurah"
        class="ml-2 inline font-quran text-2xl leading-relaxed"
      >
        {{ item.text.arab }}
        <div
          class="relative top-[5px] inline-block h-6 w-6 rounded-full border-2 border-dotted border-qo-1 bg-qo-2/20"
        >
          <span
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[10px] font-semibold text-qo-2"
            >{{ item.number.inSurah }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
