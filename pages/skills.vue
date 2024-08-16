<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const currentSlide = ref(0);

const slideTo = (val) => {
  console.log(val);
  currentSlide.value = val;
};

const myCarousel = ref(null);

console.log(myCarousel.data);

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
    title: 'Frameworks',
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
</script>
<template>
  <section
    class="min-h-dvh min-w-full flex flex-col xl:flex-row bg-primary_custom"
  >
    <div
      class="xl:w-1/2 text-white_ font-space-grotesk bg-primary_custom xl:border-8 border-r-0 border-primary_border xl:py-24 2xl:px-40 xl:px-16 px-8 flex flex-col gap-4"
    >
      <!-- Back button mobile -->
      <NuxtLink
        to="/"
        class="bg-white_ text-center w-28 px-[12px] py-[7.5px] relative font-sans text-black font-semibold group mt-8 xl:hidden"
      >
        <div
          class="bg-primary_custom text-white_ flex h-[26px] w-7 items-center justify-center absolute left-1 top-[4px] group-hover:w-[103px] z-10 duration-500 text-sm"
        >
          <Icon name="ph:arrow-left" class="text-xs" />
        </div>
        <p class="translate-x-2 text-sm">Go Back</p>
      </NuxtLink>
      <!-- Back button mobile -->
      <NuxtLink
        class="contact_button text-primary_custom absolute self-start items-start w-fit hidden xl:flex"
        to="/"
      >
        <Icon
          name="humbleicons:arrow-go-back"
          class="text-primary-custom text-3xl"
        />
      </NuxtLink>
      <div class="flex flex-col gap-4 justify-center h-full py-12">
        <span class="text-base">Fullstack developer </span>
        <h1 class="md:text-[40px] text-[22px] font-bold">
          AS A FULLSTACK DEVELOPER
        </h1>
        <p class="md:text-lg text-sm">
          Showcasing my expertise in both front-end and back-end development, I
          specialize in technologies like Vue, React, Golang, and Node.js. With
          a keen eye for detail, I strive to create seamless and efficient user
          experiences.
        </p>
        <!-- Skills Gained -->

        <span class="uppercase font-bold underline pb-2">
          some tools I use</span
        >
        <div class="slider w-10/12">
          <div class="slide-track2">
            <Icon
              name="vscode-icons:file-type-tailwind"
              class="mslide text-base"
            />
            <Icon name="logos:nats-icon" class="mslide text-base" />
            <Icon
              name="vscode-icons:file-type-docker2"
              class="mslide text-base"
            />
            <Icon name="logos:nginx" class="mslide text-base" />
            <Icon name="logos:git-icon" class="mslide text-base" />

            <Icon name="devicon:linux" class="mslide text-base" />
            <Icon name="simple-icons:zedindustries" class="mslide text-base" />
            <Icon name="logos:sendgrid-iconn" class="mslide text-base" />

            <Icon name="skill-icons:aws-light" class="mslide text-base" />

            <Icon name="fa6-brands:cc-stripe" class="mslide text-base" />

            <Icon name="logos:pinia" class="mslide text-base" />
            <Icon name="skill-icons:redux" class="mslide text-base" />
            <Icon name="logos:gin" class="mslide text-base" />

            <Icon name="skill-icons:graphql-light" class="mslide text-base" />
          </div>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div
      class="xl:w-1/2 lg:min-h-full overflow-clip flex flex-col lg:px-8 lg:py-6 items-center justify-center bg-white_ lg:border-8 border-white_border border-l-0"
    >
      <Splide
        :options="{
          rewind: true,

          pauseOnFocus: true,
          keyboard: true,
          autoplay: true,
        }"
        aria-label=""
      >
        <SplideSlide
          v-for="(skill, index) in skills"
          :key="index"
          class="cursor-pointer flex flex-col items-center justify-center max-w-screen"
        >
          <span
            class="hidden md:flex font-bold font-space-grotesk lg:text-4xl"
            >{{ skill.title }}</span
          >
          <div class="lg:py-24 py-8 carousel__item">
            <div class="md:mx-auto max-w-7xl md:px-6 lg:px-8">
              <div
                class="grid grid-cols-2 gap-4 lg:bg-white_ lg:gap-1 overflow-hidden sm:rounded-2xl md:grid-cols-3"
              >
                <div
                  v-for="item in skill.items"
                  :key="item.title"
                  class="bg-[#ECEAEA] lg:shadow-[1px_1px_0px_0px_#C6C4C6] p-6 sm:p-10 flex items-center justify-center flex-col gap-2"
                >
                  <Icon
                    class="lg:text-5xl text-3xl w-full object-contain"
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
        </SplideSlide>
      </Splide>

      <!-- Add the progress bar element -->
    </div>
  </section>
</template>

<style>
.splide__arrows {
  @apply hidden md:flex;
}
</style>
