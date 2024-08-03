<script setup>
import { projects, projectBData } from 'assets/datas/projects.js';

const projectButtons = ref([
  {
    title: 'Bridges',
    divClass:
      'row-span-1 col-span-2 box active:bg-primary_custom hover:bg-primary_border hover:transform hover:scale-110 group h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/bridges_logo.svg',
  },
  {
    title: 'hahu',
    divClass:
      'row-span-1 col-span-1 box hover:bg-[#009688] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/hahu.png',
  },
  {
    title: 'awaqi',
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
    title: 'mesmer',
    divClass:
      'row-span-1 col-span-2  box hover:bg-[#EE7F4F] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/comfort_wheels.png',
  },

  {
    title: 'awaqi',
    divClass:
      'row-span-1 col-span-1 lg:col-start-3 box hover:bg-[#F69321] group hover:transform hover:scale-110 h-[163px]',
    imageClass:
      'filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14',
    imageSrc: 'image/Awaqi.svg',
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

console.log(projectButtons);
</script>
<template>
  <section class="section">
    <!-- backbutton wrappers -->
    <div class="back-button-wrappers">
      <!-- mobile Back -->
      <BackMobile />
      <BackLg />
      <Left :content="content"> clients </Left>
    </div>

    <!-- right side -->
    <div class="lg:w-1/2 bg-white_ flex-col gap-6 max-h-screen">
      <div
        class="h-full max-h-screen px-8 lg:px-40 lg:border-8 border-white_border border-l-0 overflow-scroll lg:py-20 py-10 grid gird-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
        v-if="projectButtons"
      >
        <!-- Bridges -->
        <div
          v-for="(projectButton, index) in projectButtons"
          :key="index"
          @click="handleClick(projects[index])"
          :class="projectButton.divClass"
        >
          <NuxtImg
            :src="projectButton.imageSrc"
            :class="projectButton.imageClass"
          />
        </div>

        <!-- space holder -->
      </div>
    </div>

    <div
      class="w-40 h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-white_border bg-white_ hidden lg:flex items-center justify-center px-2"
    >
      <div class="flex flex-col items-center">
        <span
          class="text-7xl font-bold font-baunk flex items-center justify-center"
        >
          11+
        </span>
        <span class="text-base uppercase font-baunk"> projects </span>
      </div>
    </div>

    <Modal :isOpen="isModalOpened" @close="closeModal()">
      <ProjectModal :project="selectedProject" />
    </Modal>
  </section>
</template>
