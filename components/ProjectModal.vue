<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="font-space-grotesk pt-20 bg-white_ lg:min-w-[calc(100dvw-300px)] flex flex-col justify-center items-center px-8"
  >
    <div
      class="lg:max-w-[640px] max-w-screen h-full text-primary_custom flex justify-center"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <div class="w-7 h-1 mb-5 bg-primary_border"></div>
          <span class="text-xs mb-1 font-bold">{{ project.subtitle }} </span>
          <span class="lg:text-[40px] text-[22px] font-bold uppercase">{{
            project.title
          }}</span>
        </div>
        <p class="lg:text-lg text-sm">{{ project.overview }}</p>
        <div v-if="project.myRole" class="flex flex-col">
          <span class="lg:text-[40px] text-[22px] font-bold">My Role</span>
          <span class="font-light">{{ project.myRole.title }}</span>
          <p class="pt-3">
            {{ project.myRole.description }}
          </p>
        </div>
        <!-- technologies: -->
        <div class="flex gap-3 pt-3 text-[10px] font-bold flex-wrap">
          <span
            v-for="tech in project.techs"
            :key="tech.title"
            class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
            >{{ tech.title }}</span
          >
        </div>

        <div
          v-if="project.numberOfUsers.length > 0"
          className="grid grid-cols-3 grid-rows-2 gap-4  pt-10"
        >
          <div
            v-for="(number, index) in project.numberOfUsers"
            :key="index"
            class="flex flex-col items-center col-span-1 lg:gap-3 gap-2"
          >
            <span class="lg:text-4xl text-2xl font-bold">{{
              number.number
            }}</span>
            <span class="whitespace-nowrap text-xs">{{ number.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Project Images -->
    <Splide
      v-if="project.images.length > 0"
      :options="{
        rewind: true,
        pauseOnFocus: false,
        keyboard: true,
        autoplay: true,
      }"
      aria-label=""
      class="flex flex-col items-center gap-3 lg:w-[60dvw]"
    >
      <SplideSlide
        v-for="image in project.images"
        :key="image.title"
        class="aspect-video overflow-hidden lg:m-4 bg-yellow-200 flex"
      >
        <NuxtImg :src="image.source" class="w-full h-full" />

        <span
          class="uppercase text-[10px] font-bold text-primary_border tracking-[0.5em] font-space-grotesk"
          >{{ image.title }}</span
        >
      </SplideSlide>
    </Splide>

    <div
      class="lg:max-w-[640px] w-full h-full text-primary_custom flex flex-col gap-4 justify-center"
    >
      <div class="w-full flex flex-col gap-4 pb-6">
        <span class="lg:text-[40px] text-[22px] font-bold">Features</span>

        <ul class="flex flex-col gap-4">
          <li
            v-for="feature in project.features"
            :key="feature.title"
            class="flex flex-col"
          >
            <span class="font-bold text-lg text-nowrap">
              {{ feature.title }}</span
            >
            <p class="ml-3 font-light">{{ feature.description }}</p>
          </li>
        </ul>
      </div>
      <div
        v-if="project.learning_outcomes"
        class="flex flex-col gap-4 animate-slide-in-bottom"
      >
        <div class="w-7 h-1 mb-5 bg-primary_border"></div>
        <div class="flex flex-col">
          <span class="text-xs mb-1 font-bold">outcomes </span>
          <span class="lg:text-[40px] text-[22px] font-bold"
            >Learning outcomes</span
          >
        </div>
        <div class="flex flex-col">
          <p
            v-for="(learningOutcome, index) in project.learning_outcomes"
            :key="index"
            class="lg:text-lg text-sm font-thin"
          >
            {{ learningOutcome }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col gap-4 pb-20">
        <span class="lg:text-[40px] text-[22px] font-bold"
          >Challenges Faced</span
        >

        <ul class="flex flex-col gap-4">
          <li
            v-for="challenge in project.challengesfaced"
            :key="challenge.title"
            class="flex flex-col"
          >
            <span class="font-bold text-lg text-nowrap">
              {{ challenge.title }}</span
            >
            <p class="ml-3 font-light">
              {{ challenge.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="pb-10">
      <NuxtLink
        :to="project.link"
        class="cta_btn rounded-md p-1 px-8 w-fit h-14 flex items-center justify-center hover:bg-primary_custom hover:after:bg-primary_custom group"
      >
        <span class="group-hover:text-white_ flex items-center gap-2">
          Link
          <Icon name="radix-icons:external-link" class="text-base" />
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
