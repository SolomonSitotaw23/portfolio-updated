<script setup>
const features = ref([
    {
        title: " User Login System",
        description:
            "Secure login for partners, management, and administrators to report and manage impacts.",
    },
    {
        title: "Impact Reporting Tool:",
        description:
            "A user-friendly interface for partners to report their respective impacts on job creation and MSME support.",
    },
    {
        title: "Management Dashboard:",
        description:
            "An admin panel for the MEL Management team to oversee and approve reported impacts.",
    },
    {
        title: "Responsive Design:",
        description:
            "Optimized for both desktop and mobile devices to ensure accessibility for all users.",
    },
]);

const challenges = ref([
    {
        title: "Scalability",
        description:
            "Ensuring the application can handle a growing number of users and data as the program expands.",
    },
    {
        title: "Data Security",
        description:
            "Implementing secure authentication and data protection measures to safeguard sensitive information.",
    },
    {
        title: "Integration",
        description:
            "Seamlessly integrating various components (frontend, backend, database, and AWS services) to create a cohesive application.",
    },
]);
</script>

<template>
    <div
        class="font-space-grotesk pt-20 bg-white_ lg:min-w-[calc(100dvw-300px)] flex flex-col justify-center items-center px-8 bg-green-400"
    >
        <div
            class="lg:max-w-[640px] w-full pb-20 h-full text-primary_custom flex justify-center"
        >
            <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <span class="text-xs mb-1 font-bold"
                        >Sponsord by mastercard foundation
                    </span>
                    <span class="lg:text-[40px] text-[22px] font-bold uppercase"
                        >WEB APP FOR The Bridges Programme</span
                    >
                </div>
                <p class="lg:text-lg text-sm">
                    BRIDGES is a comprehensive five-year program (2019-2024)
                    aimed at fostering job creation and supporting micro, small,
                    and medium enterprises (MSMEs) in Ethiopia. The initiative
                    seeks to address the increasing labour force by creating
                    productive employment opportunities for the youth and
                    enhancing the operational capabilities of MSMEs.
                </p>
                <!-- technologies: -->
                <div class="flex gap-3 pt-3 text-[10px] font-bold">
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >AWS</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Docker</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Go</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Vue</span
                    >
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-3">
            <div class="aspect-video overflow-hidden lg:w-[60dvw]">
                <NuxtImg
                    src="image/project_hero/hahu_jobs_primary.png"
                    class="w-full h-full"
                />
            </div>
            <span
                class="uppercase text-[10px] font-bold text-primary_border tracking-[0.5em] font-space-grotesk"
                >Sample Images</span
            >
        </div>

        <div
            class="lg:max-w-[640px] w-full py-20 h-full text-primary_custom flex flex-col gap-4 justify-center"
        >
            <div class="w-full flex flex-col gap-4 pb-20">
                <span class="lg:text-[40px] text-[22px] font-bold"
                    >Features</span
                >

                <ul class="flex flex-col gap-4">
                    <li
                        v-for="feature in features"
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
            <div class="flex flex-col gap-4 animate-slide-in-bottom">
                <div class="w-7 h-1 mb-5 bg-primary_border"></div>
                <div class="flex flex-col">
                    <span class="text-xs mb-1 font-bold">outcomes </span>
                    <span class="lg:text-[40px] text-[22px] font-bold"
                        >Learning outcomes</span
                    >
                </div>
                <p class="lg:text-lg text-sm">
                    Gained expertise in using Vue.js for building dynamic and
                    responsive user interfaces. Enhanced skills in Go for
                    developing robust backend services. Developed proficiency in
                    deploying applications on AWS and managing cloud resources
                    effectively. Learned to use Docker for containerization,
                    improving deployment efficiency and consistency.
                </p>
            </div>
            <div class="w-full flex flex-col gap-4 pb-20">
                <span class="lg:text-[40px] text-[22px] font-bold"
                    >Challenges Faced</span
                >

                <ul class="flex flex-col gap-4">
                    <li
                        v-for="challenge in challenges"
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
                to="https://nuxtjs.org"
                class="cta_btn p-1 w-14 h-14 flex items-center justify-center hover:bg-primary_custom hover:after:bg-primary_custom group"
            >
                <Icon
                    name="radix-icons:external-link"
                    class="text-xl group-hover:text-white_"
                />
            </NuxtLink>
        </div>
    </div>
</template>
