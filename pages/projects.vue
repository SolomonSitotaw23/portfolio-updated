<script setup>
import { projects } from 'assets/datas/projects.js';

const projectButtons = ref([
  {
    title: 'Bridges',
    divClass:
      'row-span-1 py-30 col-span-2 box active:bg-primary_custom hover:bg-primary_border hover:transform hover:scale-110 group h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/bridges_logo.svg',
  },
  {
    title: 'hahu jobs',
    divClass:
      'row-span-1 col-span-1 box hover:bg-[#009688] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/hahu.png',
  },
  {
    title: 'awaqi centers',
    divClass:
      'row-span-1 col-span-1 lg:col-start-2 box hover:bg-[#F69321] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/Awaqi.svg',
  },
  {
    title: 'kena',
    divClass:
      'row-span-1 col-span-2 lg:col-start-3 box activerow-span-1 lg:col-span-1 col-span-2 box hover:bg-[#F93A53] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/kena-company-logo.png',
  },
  {
    title: 'mesmer',
    divClass:
      'row-span-1 col-span-2 lg:col-start-2 box hover:bg-[#EE7F4F] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/MESMER_Logo.png',
  },
  {
    title: 'Comfort Wheels',
    divClass:
      'row-span-1 col-span-2  box hover:bg-[#47ABCC] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/comfort_wheels.png',
  },

  {
    title: 'The Afrotimes',
    divClass:
      'row-span-1 col-span-1 lg:col-start-3 box hover:bg-[#F47524] group hover:transform hover:scale-110 h-[163px]',
    imageClass: 'filter  grayscale  transition-all duration-200 h-20',
    imageSrc: 'image/Afrotimes.svg',
  },
  {
    title: 'Hahu jobs Muya',
    divClass:
      'row-span-1 col-span-1 lg:col-start-1 box hover:bg-[#08B9A9] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'ilter brightness-0 grayscale group-hover:invert transition-all duration-200  h-20',
    imageSrc: 'image/muya.svg',
  },
  {
    title: 'We are Phlia',
    divClass:
      'row-span-1 col-span-1 lg:col-start-2 box hover:bg-[#FF966E] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'ilter  grayscale group-hover:invert transition-all duration-200  h-20',
    imageSrc: 'image/phlia.svg',
  },
  {
    title: 'Hey Mobile',
    divClass:
      'row-span-1 col-span-1 lg:col-start-3 box hover:bg-[#009FDB] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'ilter brightness-0  grayscale group-hover:invert transition-all duration-200  h-14',
    imageSrc: 'image/hey.svg',
  },
]);

const isModalOpened = ref(false);
const openModal = () => {
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
};

const content = ref({
  head: 'Client Collaborations & Impact',
  title: 'PROJECTS',
  description:
    "Explore my projects that demonstrate my expertise in front-end and back-end development. I've successfully collaborated with clients like Mastercard Foundation and First Consult on large-scale national and international projects, impacting over 1 million users. Each project showcases my skills in Vue, React, Golang, and Node.js, reflecting my commitment to quality and detail.",
});

const selectedProject = ref({});

const handleClick = (value) => {
  selectedProject.value = value;
  openModal();
};

const anime = useNuxtApp().$anime;

onMounted(() => {
  console.log('projects mounted');
  anime({
    targets: '.right_side',
    width: '100%',
    duration: 1000,
    easing: 'linear',
  });

  //overlay layer animation
  anime({
    targets: '.overlay',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    width: ['100%', '0%'],
    duration: 2000,
    autoplay: true,
  });
  anime({
    targets: '.number_of_projects',
    opacity: [0, 1],
    duration: 2000,
    easing: 'cubicBezier(.5, .05, .1, .3)',
  });
  anime({
    targets: '.group__project',
    opacity: [0, 1],
    translateY: [100, 0],
    delay: anime.stagger(200),
    duration: 2000,
    easing: 'easeInElastic(1,.8)',
  });

  anime({
    targets: '.left_side',
    opacity: [0, 1],
    translateY: [100, 0],
    delay: anime.stagger(200),
    duration: 1000,
    easing: 'easeInElastic(1,.8)',
  });
});
</script>
<template>
  <section class="section relative">
    <!-- backbutton wrappers -->
    <div class="back-button-wrappers">
      <!-- mobile Back -->
      <BackMobile />
      <BackLg class="z-10" />
      <Left :content="content" class="left_side"> clients </Left>
    </div>

    <!-- right side -->
    <div class="lg:w-1/2 bg-white_ flex-col gap-6 max-h-screen relative">
      <div
        class="overlay visible absolute w-full h-full z-[1] left-0 bg-primary_custom border-y-8 border-primary_border"
      ></div>
      <div
        class="h-full max-h-screen px-8 lg:px-40 lg:border-8 border-white_border border-l-0 overflow-scroll lg:py-20 py-10 grid gird-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 scrollbar-custom"
        v-if="projectButtons"
      >
        <div
          v-for="(projectButton, index) in projectButtons"
          :key="index"
          @click="handleClick(projects[index])"
          :class="
            projectButton.divClass +
            ' flex flex-col gap-2 transform transition-all duration-200'
          "
        >
          <NuxtImg
            :src="projectButton.imageSrc"
            :class="projectButton.imageClass"
          />
          <span
            class="text-sm uppercase hidden group-hover:flex transform transition-all duration-200 text-white_"
            >{{ projectButton.title }}</span
          >
        </div>
      </div>
    </div>

    <div
      class="w-40 h-40 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-white_border bg-white_ hidden lg:flex items-center justify-center px-2 number_of_projects"
    >
      <div class="flex flex-col items-center">
        <span
          class="text-6xl font-bold font-baunk flex items-center justify-center"
        >
          {{ projects.length }}+
        </span>
        <span class="text-base uppercase font-baunk"> Projects </span>
      </div>
    </div>

    <Modal :isOpen="isModalOpened" @close="closeModal()">
      <ProjectModal :project="selectedProject" />
    </Modal>
  </section>
</template>
