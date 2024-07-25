<script setup>
const isModalOpened = ref(false);
const openModal = () => {
    isModalOpened.value = true;
};

const closeModal = () => {
    isModalOpened.value = false;
};

const skills = ref([
    "Go",
    "JavaScript",
    "Nats",
    "Microservices",
    "AWS",
    "Docker",
    "Node",
    "Vue",
    "Nuxt",
    "Tailwind",
]);

const content = ref({
    head: "Client Collaborations & Impact",
    title: "PROJECTS",
    description:
        "Explore my projects that demonstrate my expertise in front-end and back-end development. I've successfully collaborated with clients like Mastercard Foundation and First Consult on large-scale national and international projects, impacting over 1 million users. Each project showcases my skills in Vue, React, Golang, and Node.js, reflecting my commitment to quality and detail.",
});
</script>
<template>
    <section class="section">
        <!-- backbutton wrappers -->
        <div class="back-button-wrappers">
            <!-- mobile Back -->
            <BackMobile />
            <BackLg />
            <Left :content="content">
                <!-- Skills Gained -->
                <!-- <Skills :skills="skills" /> -->
                clients
            </Left>
        </div>

        <!-- right side -->
        <div class="right-wrapper">
            <div
                class="w-full h-full lg:py-20 grid gird-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6 lg:gap-12"
            >
                <!-- Bridges -->
                <div
                    @click="openModal()"
                    class="row-span-1 col-span-2 box active:bg-primary_custom hover:bg-primary_border hover:transform hover:scale-110 group h-[163px]"
                >
                    <NuxtImg
                        src="image/bridges_logo.svg"
                        class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
                    />
                </div>
                <div
                    class="row-span-1 col-span-1 box hover:bg-[#009688] group hover:transform hover:scale-110 h-[163px]"
                >
                    <NuxtImg
                        src="image/hahu.png"
                        class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
                    />
                </div>
                <!-- space holder -->
                <div
                    class="row-span-1 col-span-1 bg-transparent hidden lg:flex"
                ></div>
                <!--  -->
                <div
                    class="row-span-1 col-span-1 box hover:bg-[#F69321] group hover:transform hover:scale-110 h-[163px]"
                >
                    <NuxtImg
                        src="image/Awaqi.svg"
                        class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
                    />
                </div>
                <div
                    class="row-span-1 lg:col-span-1 col-span-2 box hover:bg-[#F93A53] group hover:transform hover:scale-110 h-[163px]"
                >
                    <NuxtImg
                        src="image/kena-company-logo.png"
                        class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
                    />
                </div>
                <!-- space holder -->
                <div
                    class="row-span-1 col-span-1 bg-transparent hidden lg:flex"
                ></div>
                <!--  -->

                <div
                    class="row-span-1 col-span-2 box hover:bg-[#EE7F4F] group hover:transform hover:scale-110 h-[163px]"
                >
                    <NuxtImg
                        src="image/MESMER_Logo.png"
                        class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 h-14"
                    />
                </div>
            </div>
        </div>

        <div
            class="w-40 h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-white_border bg-white_ hidden lg:flex items-center justify-center px-2"
        >
            <NuxtImg
                src="image/minab.webp"
                class="filter brightness-0 grayscale group-hover:invert transition-all duration-200 max-h-10"
            />
        </div>

        <Modal :isOpen="isModalOpened" @close="closeModal()">
            <ProjectModal />
        </Modal>
    </section>
</template>
