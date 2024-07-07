<script setup>
const isModalOpened = ref(false);
const openModal = () => {
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
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
        <span class="text-base">SCIENCE & CREATIVITY </span>
        <h1 class="text-[40px] font-bold">
          PRODUCT DESIGNER FRONT-END DEVELOPER TEAM LEADER
        </h1>
        <p class="text-lg">
          I'm Solomon, a multi-award winning product designer based in Dembia.
          During my career I've had the privilege of creating experiences for
          clients including the New York Times and Google. I've also helped
          guide teams at Facebook and startups like Highfive and WeTransfer.
        </p>
        <!-- Skills Gained -->
        <div class="flex gap-4 flex-wrap">
          <span class="bg-primary_border px-3 py-2 uppercase">Go</span>
          <span class="bg-primary_border px-3 py-2 uppercase">JavaScript</span>
          <span class="bg-primary_border px-3 py-2 uppercase">Nats</span>
          <span class="bg-primary_border px-3 py-2 uppercase"
            >MIcroservices</span
          >
          <span class="bg-primary_border px-3 py-2 uppercase">AWS</span>
          <span class="bg-primary_border px-3 py-2 uppercase">Docker</span>
          <span class="bg-primary_border px-3 py-2 uppercase">Node</span>
          <span class="bg-primary_border px-3 py-2 uppercase">Vue</span>
          <span class="bg-primary_border px-3 py-2 uppercase">Nuxt</span>

          <span class="bg-primary_border px-3 py-2 uppercase">Tailwind</span>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div
      class="w-1/2 py-24 px-40 bg-white_ border-8 border-white_border border-l-0 flex items-center justify-end"
    >
      <div class="w-full h-full py-20 grid grid-cols-3 grid-rows-3 gap-12">
        <div
          @click="openModal()"
          class="row-span-1 col-span-2 box hover:bg-primary_border hover:transform hover:scale-110 group"
        >
          <img
            src="/public/image/bridges_logo.svg"
            class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
          />
        </div>
        <div
          class="row-span-1 col-span-1 box hover:bg-[#009688] group hover:transform hover:scale-110"
        >
          <img
            src="/public/image/hahu.png"
            class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
          />
        </div>
        <!-- space holder -->
        <div class="row-span-1 col-span-1 bg-transparent"></div>
        <!--  -->
        <div
          class="row-span-1 col-span-1 box hover:bg-[#F69321] group hover:transform hover:scale-110"
        >
          <img
            src="/public/image/Awaqi.svg"
            class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
          />
        </div>
        <div
          class="row-span-1 col-span-1 box hover:bg-[#F93A53] group hover:transform hover:scale-110"
        >
          <img
            src="/public/image/kena-company-logo.png"
            class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
          />
        </div>
        <!-- space holder -->
        <div class="row-span-1 col-span-1 bg-transparent"></div>
        <!--  -->

        <div
          class="row-span-1 col-span-2 box hover:bg-[#EE7F4F] group hover:transform hover:scale-110"
        >
          <img
            src="/public/image/MESMER_Logo.png"
            class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
          />
        </div>
      </div>
    </div>

    <div
      class="w-40 h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-white_border bg-white_ flex items-center justify-center px-2"
    >
      <img
        src="/public/image/minab.webp"
        class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 max-h-10"
      />
    </div>

    <Modal :isOpen="isModalOpened" @close="closeModal()">
      <div
        class="font-space-grotesk bg-white_ min-w-[calc(100dvw-300px)] flex flex-col justify-center items-center"
      >
        <div
          class="max-w-[640px] pt-32 pb-20 h-full text-primary_custom flex justify-center"
        >
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <span>BOUTIQUE </span>
              <span class="text-[40px] font-bold"
                >WEB APP FOR HANDPICKED HOMES & SMALL HOTELS</span
              >
            </div>
            <p class="text-lg">
              In 2021 I embarked on a bold voyage with my co-founder Marc Blazer
              to reimagine the way short-term rentals are sold. We focused on
              building meaningful relationships with our hosts, serving an
              aspirational collection of properties and providing best-in-class
              customer service to our guests.
            </p>
            <!-- technologies: -->
            <div class="flex gap-3 pt-3">
              <span class="box px-3 py-2 uppercase">AWS</span>
              <span class="box px-3 py-2 uppercase">Docker</span>
              <span class="box px-3 py-2 uppercase">Node</span>
              <span class="box px-3 py-2 uppercase">Vue</span>
              <span class="box px-3 py-2 uppercase">Nuxt</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-3">
          <div class="aspect-video overflow-hidden w-[60dvw] bg-green-400">
            <img
              src="/public/image/project_hero/hahu_jobs_primary.png"
              class=" "
            />
          </div>
          <span
            class="uppercase font-bold text-primary_border tracking-[0.5em] font-space-grotesk"
            >Sample Images</span
          >
        </div>

        <div
          class="max-w-[640px] pt-32 pb-20 h-full text-primary_custom flex justify-center"
        >
          <div class="flex flex-col gap-4">
            <div class="w-7 h-1 mb-5 bg-primary_border"></div>
            <div class="flex flex-col">
              <span>BOUTIQUE </span>
              <span class="text-[40px] font-bold"
                >WEB APP FOR HANDPICKED HOMES & SMALL HOTELS</span
              >
            </div>
            <p class="text-lg">
              In 2021 I embarked on a bold voyage with my co-founder Marc Blazer
              to reimagine the way short-term rentals are sold. We focused on
              building meaningful relationships with our hosts, serving an
              aspirational collection of properties and providing best-in-class
              customer service to our guests.
            </p>
            <!-- technologies: -->
            <div class="flex gap-3 pt-3">
              <span class="box px-3 py-2 uppercase">AWS</span>
              <span class="box px-3 py-2 uppercase">Docker</span>
              <span class="box px-3 py-2 uppercase">Node</span>
              <span class="box px-3 py-2 uppercase">Vue</span>
              <span class="box px-3 py-2 uppercase">Nuxt</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>
