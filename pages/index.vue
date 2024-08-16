<script setup>
const isModalOpened = ref(false);
const anime = useNuxtApp().$anime;

const openModal = () => {
  isModalOpened.value = true;
};

const closeModal = () => {
  isModalOpened.value = false;
};

const loading = ref(false);
onBeforeMount(() => {
  console.log('before mount');
});
onMounted(() => {
  // loading.value = false;
  console.log('mounted');

  anime({
    targets: '.name',
    scale: [0, 1],
    opacity: [0, 100],
    duration: 4000,
    easing: 'easeOutElastic(1,.8)',
    // loop: true,
  });
  anime({
    targets: '.circle',
    scale: [0, 1],
    duration: 2000,
    easing: 'easeOutElastic(1,.8)',

    // loop: true,
  });
});
const onAnimationComplete = () => {
  console.log('animation complete');
};
</script>
<template>
  <section
    class="font-space-grotesk sm:vignette md:border-8 border-primary_border flex-col min-h-[100dvh] h-[100dvh] bg-primary_custom overflow-hidden transition-all duration-200 relative min-w-screen flex justify-between"
  >
    <Header />
    <div
      class="flex-grow flex flex-row items-start md:items-center justify-start relative"
    >
      <!-- left sidebar -->
      <div
        class="w-16 hidden md:flex flex-col flex-grow items-center justify-center text-white z-10"
      >
        <ul class="flex gap-8 font-space-grotesk transform -rotate-90">
          <NuxtLink to="/about" active-class="active" class="menu__link">
            <li>About</li>
          </NuxtLink>
          <NuxtLink to="/skills" active-class="active" class="menu__link">
            <li>Skills</li>
          </NuxtLink>

          <NuxtLink to="/projects" active-class="active" class="menu__link">
            <li>Projects</li>
          </NuxtLink>
        </ul>
      </div>
      <!-- center -->
      <div class="flex flex-col items-center justify-center w-full">
        <div
          class="lg:rounded-full h-[60dvh] md:h-[500px] w-full lg:w-[500px] bg-[#002DB3] drop-shadow-glow self-center items-center md:justify-center flex flex-col py-16 lg:absolute circle"
        >
          <Download class="mb-10 md:hidden" />

          <div class="flex flex-col relative items-center">
            <span
              class="text-white_ lg:text-3xl text-md font-baunk md:self-start"
              >Hi all I'm
            </span>
            <span
              class="2xl:text-[13rem] xl:text-[10rem] md:text-[5rem] text-[3rem] font-baunk text-white_ name"
            >
              Solomon
            </span>
            <div
              class="text-white_ lg:text-[28px] font-baunk md:self-end !z-50"
            >
              <span>Fullstack developer</span>
            </div>
          </div>
        </div>
        <div class="w-1/3 flex items-center justify-center">
          <NuxtImg
            src="image/me.webp"
            class="2xl:w-1/3 md:w-1/2 xl:w-[40%] lg:w-[40%] md:block absolute -bottom-24 title"
            alt=""
          />
          <div
            class="md:w-1/3 w-full -bottom-24 absolute flex justify-end items-end xl:h-2/4 h-1/3 from-primary_custom bg-gradient-to-t z-30"
          >
            <!-- Chat button for mobile -->
            <div
              @click="openModal()"
              class="h-24 w-24 rounded-tl-full bg-white_ flex items-center justify-center md:hidden pl-4 pt-2 active:bg-[#002DB3] active:w-28 active:h-28 transform duration-300 group"
            >
              <Icon
                name="f7:chat-bubble-2-fill"
                class="text-primary-custom group-active:text-white_ text-3xl"
              />
            </div>
            <!-- Chat button for mobile end -->
          </div>
        </div>
      </div>
      <!-- right content -->
      <div
        class="w-20 text-white_ md:flex flex-col flex-grow items-center justify-center hidden"
      >
        <div class="flex gap-4 flex-col items-center">
          <NuxtLink
            to="https://www.linkedin.com/in/solomonsitotaw/"
            class="cta_btn p-1 w-14 h-14 flex items-center justify-center hover:bg-[#0A66C2] hover:after:bg-[#0A66C2] group"
          >
            <Icon
              name="dashicons:linkedin"
              class="text-xl group-hover:text-white_"
            />
          </NuxtLink>

          <NuxtLink
            to="https://github.com/SolomonSitotaw23"
            class="cta_btn p-1 w-14 h-14 flex items-center justify-center hover:bg-[#010409] hover:after:bg-[#010409] group"
          >
            <Icon name="uil:github" class="text-xl group-hover:text-white_" />
          </NuxtLink>

          <NuxtLink
            to="https://github.com/SolomonSitotaw23"
            class="cta_btn p-1 w-14 h-14 flex items-center justify-center hover:bg-[#1D9BF0] hover:after:bg-[#1D9BF0] group"
          >
            <Icon
              name="fa6-brands:x-twitter"
              class="text-xl group-hover:text-white_"
            />
          </NuxtLink>

          <NuxtLink
            to="https://mastodon.social/@solomon23"
            class="cta_btn p-1 w-14 h-14 flex items-center justify-center hover:bg-[#2B90D9] hover:after:bg-[#2B90D9] group"
          >
            <Icon
              name="mingcute:mastodon-fill"
              class="text-xl group-hover:text-white_"
            />
          </NuxtLink>
        </div>
      </div>
      <!--  -->
      <div>
        <button
          class="contact_button absolute hidden md:bottom-5 md:right-20 md:flex items-center justify-center z-50 hover:animate-swing"
          @click="openModal()"
        >
          <Icon
            name="f7:chat-bubble-2-fill"
            class="text-primary-custom text-3xl"
          />
        </button>
        <!-- Nav for mobile -->
        <div
          class="button-container absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 md:hidden font-space-grotesk"
        >
          <NuxtLink to="/skills" class="button flex flex-col">
            <Icon name="ph:user-gear-bold" class="text-xl" />
            <span class="text-xs">Skills</span>
          </NuxtLink>
          <NuxtLink to="/about" class="button flex flex-col">
            <Icon name="mdi:about-variant" class="text-xl" />
            <span class="text-xs">About</span>
          </NuxtLink>

          <NuxtLink to="/projects" class="button flex flex-col">
            <Icon name="tdesign:code" class="text-xl" />
            <span class="text-xs">Projects</span>
          </NuxtLink>
        </div>
        <!-- Nav for mobile -->

        <div class="w-full flex items-center justify-center">
          <!--  -->
          <Modal :isOpen="isModalOpened" @close="closeModal()">
            <ContactMe />
          </Modal>
          <!--  -->
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>
