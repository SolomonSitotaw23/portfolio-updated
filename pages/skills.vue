<script setup>
import { ref } from "vue";
const skills = ref([
    {
        title: "Programming Languages",

        items: [
            {
                title: "GO",
                icon: "devicon-plain:go",
            },
            {
                title: "C++",
                icon: "mdi:language-cpp",
            },
            {
                title: "Javascript",
                icon: "fa6-brands:square-js",
            },
            {
                title: "Java",
                icon: "fa-brands:java",
            },
        ],
    },
    {
        title: "Frameworks",
        items: [
            {
                title: "Nuxt",
                icon: "mdi:nuxt",
            },
            {
                title: "Vue",
                icon: "mdi:vuejs",
            },
            {
                title: "Gin",
                icon: "simple-icons:gin",
            },
            {
                title: "Hasura",
                icon: "simple-icons:hasura",
            },
            {
                title: "Express",
                icon: "skill-icons:expressjs-light",
            },
        ],
    },
    {
        title: "Databases",
        items: [
            {
                title: "PostgreSQL",
                icon: "akar-icons:postgresql-fill",
                color: "green",
            },
            {
                title: "MongoDB",
                icon: "simple-icons:mongodb",
            },
            {
                title: "MySQL",
                icon: "grommet-icons:mysql",
            },
        ],
    },
    {
        title: "Dev Ops",
        items: [
            {
                title: "Docker",
                icon: "simple-icons:docker",
            },
            {
                title: "Nginx",
                icon: "fontisto:nginx",
            },
            {
                title: "Git",
                icon: "icomoon-free:git",
            },
            {
                title: "Microservices",
                icon: "carbon:microservices-2",
            },
            {
                title: "Rest",
                icon: "dashicons:rest-api",
            },
            {
                title: "Postman",
                icon: "simple-icons:postman",
            },
            {
                title: "GraphQL",
                icon: "fontisto:graphql",
            },
            {
                title: "Apollo",
                icon: "simple-icons:apollographql",
            },
        ],
    },
]);

const currentSlide = ref(0);

const slideTo = (val) => {
    console.log(val);
    currentSlide.value = val;
};

const myCarousel = ref(null);

console.log(myCarousel.data);
</script>
<template>
    <section
        class="min-h-screen min-w-full flex flex-col lg:flex-row font-space-grotesk"
    >
        <div
            class="lg:w-1/2 py-20 text-white_ font-space-grotesk bg-primary_custom lg:border-8 border-r-0 border-primary_border lg:py-24 lg:px-40"
        >
            <NuxtLink
                class="contact_button text-primary_custom absolute mdflex self-start items-start w-fit hidden lg:flex"
                to="/"
            >
                <Icon
                    name="humbleicons:arrow-go-back"
                    class="text-primary-custom text-3xl"
                />
            </NuxtLink>
            <div
                class="flex flex-col gap-4 justify-center h-[20em] lg:h-full px-8"
            >
                <span class="text-base">Fullstack developer </span>
                <h1 class="md:text-[40px] text-[22px] font-bold">
                    AS A FULLSTACK DEVELOPER
                </h1>
                <p class="md:text-lg text-sm">
                    I'm Solomon, a multi-award winning product designer based in
                    Dembia. During my career I've had the privilege of creating
                    experiences for clients including the New York Times and
                    Google. I've also helped guide teams at Facebook and
                    startups like Highfive and WeTransfer.
                </p>
                <!-- Skills Gained -->
            </div>
            <div class="flex gap-3 pt-3 text-xs w-full flex-wrap px-8">
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >AWS</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Docker</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Node</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Vue</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Nuxt</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Node</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Vue</span
                >
                <span class="box !bg-primary_custom px-2 py-[2px] h-6 uppercase"
                    >Nuxt</span
                >
            </div>
        </div>

        <!-- right side -->
        <div
            class="lg:w-1/2 lg:min-h-full flex flex-col lg:py-6 items-center justify-center bg-white_ lg:border-8 border-white_border border-l-0"
        >
            <ul ref="carousel" class="flex gap-2 items-center lg:gap-7">
                <li
                    v-for="(slide, index) in skills"
                    :key="slide"
                    :class="{ 'slide--active': currentSlide === index }"
                    class="lg:slide text-xs whitespace-nowrap py-1 px-1"
                    @click="slideTo(index)"
                >
                    {{ slide.title }}
                </li>
            </ul>
            <Carousel
                id="gallery"
                :items-to-show="1"
                :wrap-around="false"
                :autoplay="4000"
                :pauseAutoplayOnHover="true"
                ref="myCarousel"
                v-model="currentSlide"
                class="flex flex-col h-full px-0 w-screen lg:w-full overflow-x-hidden justify-center items-center transform-all duration-200"
            >
                <Slide
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="cursor-pointer flex flex-col items-center justify-center max-w-screen p-4"
                >
                    <span
                        class="hidden md:flex font-bold font-space-grotesk lg:text-4xl"
                        >{{ skill.title }}</span
                    >
                    <div class="lg:py-24 py-8 carousel__item">
                        <div class="md:mx-auto max-w-7xl md:px-6 lg:px-8">
                            <div
                                class="-mx-6 grid grid-cols-2 gap-4 sm:bg-white_border lg:bg-white_ lg:gap-1 overflow-hidden sm:rounded-2xl md:grid-cols-3"
                            >
                                <div
                                    v-for="item in skill.items"
                                    :key="item.title"
                                    class="bg-[#ECEAEA] lg:shadow-[1px_1px_0px_0px_#C6C4C6] p-6 sm:p-10"
                                >
                                    <Icon
                                        class="lg:text-5xl text-3xl w-full object-contain"
                                        :name="item.icon"
                                        alt="Transistor"
                                    />
                                    <span
                                        class="font-space-grotesk font-bold"
                                        >{{ item.title }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation
                        class="hidden lg:flex bg-primary_border rounded-full text-white_ hover:text-primary_custom hover:bg-white_ transition-all duration-200"
                    />

                    <Pagination class="" />
                </template>
            </Carousel>
        </div>
    </section>
</template>
