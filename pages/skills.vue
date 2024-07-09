<script setup>
import { ref } from 'vue';
const skills = ref([
  {
    title: 'Programming Languages',

    items: [
      {
        title: 'GO',
        icon: 'devicon-plain:go',
      },
      {
        title: 'C++',
        icon: 'mdi:language-cpp',
      },
      {
        title: 'Javascript',
        icon: 'fa6-brands:square-js',
      },
      {
        title: 'Java',
        icon: 'fa-brands:java',
      },
    ],
  },
  {
    title: 'Web Frameworks',
    items: [
      {
        title: 'Nuxt',
        icon: 'mdi:nuxt',
      },
      {
        title: 'Vue',
        icon: 'mdi:vuejs',
      },
      {
        title: 'Gin',
        icon: 'simple-icons:gin',
      },
      {
        title: 'Hasura',
        icon: 'simple-icons:hasura',
      },
      {
        title: 'Express',
        icon: 'skill-icons:expressjs-light',
      },
    ],
  },
  {
    title: 'Databases',
    items: [
      {
        title: 'PostgreSQL',
        icon: 'akar-icons:postgresql-fill',
        color: 'green',
      },
      {
        title: 'MongoDB',
        icon: 'simple-icons:mongodb',
      },
      {
        title: 'MySQL',
        icon: 'grommet-icons:mysql',
      },
    ],
  },
  {
    title: 'Dev Ops',
    items: [
      {
        title: 'Docker',
        icon: 'simple-icons:docker',
      },
      {
        title: 'Nginx',
        icon: 'fontisto:nginx',
      },
      {
        title: 'Git',
        icon: 'icomoon-free:git',
      },
      {
        title: 'Microservices',
        icon: 'carbon:microservices-2',
      },
      {
        title: 'Rest',
        icon: 'dashicons:rest-api',
      },
      {
        title: 'Postman',
        icon: 'simple-icons:postman',
      },
      {
        title: 'GraphQL',
        icon: 'fontisto:graphql',
      },
      {
        title: 'Apollo',
        icon: 'simple-icons:apollographql',
      },
    ],
  },
]);

const currentSlide = ref(0);

const slideTo = (val) => {
  currentSlide.value = val;
};
</script>
<template>
  <section class="min-h-dvh min-w-full flex">
    <div
      class="w-1/2 text-white_ font-space-grotesk bg-primary_custom border-8 border-r-0 border-primary_border py-24 px-40"
    >
      <NuxtLink
        class="contact_button text-primary_custom absolute flex self-start items-start w-fit"
        to="/"
      >
        <Icon
          name="humbleicons:arrow-go-back"
          class="text-primary-custom text-3xl"
        />
      </NuxtLink>
      <div class="flex flex-col gap-4 justify-center h-full">
        <span class="text-base">Fullstack developer </span>
        <h1 class="text-[40px] font-bold">AS A FULLSTACK DEVELOPER</h1>
        <p class="text-lg">
          I'm Solomon, a multi-award winning product designer based in Dembia.
          During my career I've had the privilege of creating experiences for
          clients including the New York Times and Google. I've also helped
          guide teams at Facebook and startups like Highfive and WeTransfer.
        </p>
        <!-- Skills Gained -->
      </div>
    </div>

    <!-- right side -->
    <div
      class="w-1/2 min-h-full flex flex-col py-6 items-center justify-center bg-white_"
    >
      <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
        class="bg-green-300 crs"
      >
        <Slide v-for="(slide, index) in skills" :key="slide" class="crss">
          <span
            class="font-bold text-xs carousel__slide border p-2 flex items-center justify-center w-full border-primary_border"
            @click="slideTo(index)"
          >
            {{ slide.title }}
          </span>
        </Slide>
      </Carousel>
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
        class="flex flex-col h-full justify-center items-center"
      >
        <Slide
          v-for="(skill, index) in skills"
          :key="index"
          class="cursor-pointer min-h-full flex flex-col"
        >
          <span class="font-bold font-space-grotesk text-4xl">{{
            skill.title
          }}</span>
          <div class="bg-blue py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                class="-mx-6 grid grid-cols-2 gap-1 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
              >
                <div
                  v-for="item in skill.items"
                  :key="item.title"
                  class="bg-[#ECEAEA] shadow-[1px_1px_0px_0px_#C6C4C6] p-6 sm:p-10"
                >
                  <Icon
                    class="text-5xl w-full object-contain"
                    :name="item.icon"
                    alt="Transistor"
                  />
                  <span class="font-space-grotesk font-bold">{{
                    item.title
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation
            class="bg-primary_border rounded-full text-white_ hover:text-primary_custom hover:bg-white_ transition-all duration-200"
          />

          <Pagination class="" />
        </template>
      </Carousel>
    </div>
  </section>
</template>
