<script setup>
import { ref } from 'vue';
import { abouts } from 'assets/datas/about.js';

const anime = useNuxtApp().$anime;

onMounted(() => {
  console.log('projects mounted');
  anime({
    targets: '.right_side',
    width: '100%',
    duration: 4000,
    easing: 'easeOutElastic(1,.8)',
  });

  //overlay layer animation
  anime({
    targets: '.overlay',
    easing: 'cubicBezier(.5, .05, .1, .3)',
    width: ['100%', '0%'],
    duration: 3000,
    autoplay: true,
  });
  anime({
    targets: '.number_of_projects',
    opacity: [0, 1],
    duration: 1000,
    easing: 'cubicBezier(.5, .05, .1, .3)',
  });
  anime({
    targets: '.group_abouts',
    opacity: [0, 1],
    translateY: [100, 0],
    delay: 1000,
    duration: 2000,
    easing: 'easeInElastic(1,.8)',
  });

  anime({
    targets: '.left_side',
    opacity: [0, 1],
    translateY: [100, 0],
    delay: anime.stagger(200),
    duration: 2000,
    easing: 'easeInElastic(1,.8)',
  });
});
</script>
<template>
  <section class="section">
    <div
      class="xl:w-1/2 text-white_ font-space-grotesk bg-primary_custom lg:border-y-8 lg:border-l-8 border-primary_border lg:py-24 lg:px-20 px-8 flex flex-col gap-4"
    >
      <!-- Back button mobile -->
      <BackMobile />
      <!-- Back button mobile -->
      <BackLg />
      <div class="flex flex-col gap-4 justify-center h-full py-12">
        <span class="md:text-base text-sm w-1/2">Fullstack developer </span>
        <h1 class="lg:text-[40px] text-2xl font-bold">
          Hi, I'm Solomon Sitotaw'
        </h1>
        <p class="md:text-lg text-sm">
          With over 3 years of experience in fullstack development, I specialize
          in using Vue.js and React for front-end development, alongside Go and
          Node.js for backend services. I have a strong understanding of
          microservice architecture and have successfully collaborated with
          clients from the USA, Ethiopia, and Japan. My exceptional
          communication and collaboration skills enable me to work effectively
          within teams and deliver high-quality solutions. I am always eager to
          learn and adopt new technologies to enhance my skill set and
          contribute to project success.
        </p>
        <!-- Skills Gained -->
        <div class="h-1 w-16 bg-white_ rounded-xl mt-6"></div>
      </div>
    </div>

    <!-- right side -->
    <div class="xl:w-1/2 bg-white_ flex-col gap-6 max-h-screen relative">
      <div
        class="lg:overlay hidden lg:absolute lg:w-full lg:h-full z-[52] left-0 bg-primary_custom border-y-8 border-primary_border"
      ></div>

      <div
        class="lg:border-8 min-w-full bg-white_ border-white_border border-l-0 lg:w-1/2 lg:py-20 px-4 max-h-screen overflow-hidden sm:scrollbar-custom"
      >
        <div
          class="lg:px-20 lg:h-[80vh] h-dvh overflow-scroll w-full flex flex-col gap-6 sm:scrollbar-custom scroll-smooth"
        >
          <div
            v-for="(about, index) in abouts"
            :key="index"
            class="lg:group_abouts"
          >
            <div
              class="w-full relative flex items-start justify-start flex-col md:gap-16 gap-12"
            >
              <h1
                class="lg:text-5xl sticky top-0 bg-white_ w-full z-50 text-3xl font-space-grotesk font-bold uppercase tracking-wide pt-10 py-5"
              >
                {{ about.title }}
              </h1>
              <div
                class="flow-root font-space-grotesk lg:ml-10 h-full l w-full scrollbar-custom lg:px-8"
              >
                <ul role="list" class="-mb-8">
                  <li v-for="(ab, aboutIdx) in about.data" :key="ab.id">
                    <div class="relative pb-8">
                      <span
                        v-if="aboutIdx !== ab.length - 1"
                        class="absolute left-5 top-5 h-full w-0.5 bg-primary_border"
                        aria-hidden="true"
                      />
                      <div class="relative flex items-start space-x-3">
                        <div class="relative">
                          <div
                            class="bg-primary_border rounded-full h-10 w-10 flex items-center justify-center"
                          >
                            <Icon
                              :name="ab.icon"
                              class="flex items-center justify-center rounded-full text-white_ text-3xl ring-8 ring-white"
                            />
                          </div>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div>
                            <div class="text-sm">
                              <a
                                :href="ab.company.href"
                                class="font-medium text-2xl md:text-3xl text-gray-900"
                                >{{ ab.company.name }}</a
                              >
                            </div>
                            <span
                              class="font-light lg:text-xl text-lg text-primary_custom"
                            >
                              {{ ab.company.role }}
                            </span>
                            <p class="mt-0.5 text-sm text-gray-500">
                              {{ ab.date }}
                            </p>
                            <p class="text-sm mr-4 mt-3">
                              {{ ab.company?.overview }}
                            </p>
                          </div>
                          <div
                            class="mt-2 text-sm text-gray-700 flex flex-col gap-3"
                          >
                            <div v-if="ab.responsiblities">
                              <span class="text-lg">Key Responsiblities</span>
                              <ul
                                v-for="(
                                  resposiblity, index
                                ) in ab.responsiblities"
                                :key="index"
                                class="ml-4 flex gap-2 items-center"
                              >
                                <div class="flex items-baseline gap-2">
                                  <span
                                    class="w-2 h-2 bg-primary_custom/50"
                                  ></span>
                                  <li class="">
                                    {{ resposiblity }}
                                  </li>
                                </div>
                              </ul>
                            </div>
                            <!-- Accomplishments -->

                            <div v-if="ab.accomplishments">
                              <span class="text-lg">Accomplishments</span>
                              <ul
                                v-for="(
                                  accomplishment, index
                                ) in ab.accomplishments"
                                :key="index"
                                class="ml-4 flex gap-2 items-center"
                              >
                                <div class="flex items-baseline gap-2">
                                  <span
                                    class="w-2 h-2 bg-primary_custom/50"
                                  ></span>
                                  <li class="">
                                    {{ accomplishment }}
                                  </li>
                                </div>
                              </ul>
                            </div>
                            <div v-if="ab.skills.length">
                              <span class="text-lg">Skills Gained</span>
                              <!-- Skills Gained -->
                              <Skills :skills="ab.skills" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
