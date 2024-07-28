<script setup>
import { ref } from "vue";

const educations = [
    {
        id: 1,
        title: "Education And Training",
        type: "comment",
        person: { name: "Bahirdar University", href: "#" },
        icon: "mdi:graduation-cap",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
        date: "01/09/2015 – 30/06/2019 – +251 11 888 0606, Addis Ababa, Ethiopia",
    },
    {
        id: 5,
        type: "comment",
        person: { name: "Fullstack development Training", href: "#" },
        icon: "material-symbols:developer-mode-tv-outline",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
        date: "01/09/2015 – 30/06/2019 – +251 11 888 0606, Addis Ababa, Ethiopia",
    },

    {
        id: 4,
        type: "comment",
        person: { name: "Fasiledes Highschool", href: "#" },
        icon: "teenyicons:school-solid",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
        date: "01/09/2011 – 30/06/2015 – Mehal Meda, Ethiopia",
    },
];
</script>
<template>
    <section class="section !bg-white_ animate-fade-in">
        <div
            class="lg:w-1/2 text-white_ font-space-grotesk bg-primary_custom lg:border-8 border-r-0 border-primary_border lg:py-24 lg:px-20 px-8 flex flex-col gap-4"
        >
            <!-- Back button mobile -->
            <NuxtLink
                to="/"
                class="bg-white_ text-center w-28 px-[12px] py-[7.5px] relative font-sans text-black font-semibold group mt-8 lg:hidden"
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
                class="contact_button text-primary_custom absolute hidden lg:flex self-start items-start w-fit"
                to="/"
            >
                <Icon
                    name="humbleicons:arrow-go-back"
                    class="text-primary-custom text-3xl"
                />
            </NuxtLink>
            <div class="flex flex-col gap-4 justify-center h-full py-12">
                <span class="md:text-base text-sm w-1/2"
                    >Fullstack developer
                </span>
                <h1 class="lg:text-[40px] text-2xl font-bold">
                    Hi, I'm Solomon Sitotaw'
                </h1>
                <p class="md:text-lg text-sm">
                    a dedicated full-stack developer specializing in building
                    robust applications using Go for back-end development and
                    JavaScript frameworks like React and Vue for front-end
                    experiences. I enjoy crafting efficient, scalable solutions
                    that enhance user engagement and streamline functionality.
                    With a strong focus on performance and clean code, I thrive
                    on tackling complex challenges and continuously improving my
                    skills in this ever-evolving tech landscape. Let’s
                    collaborate to bring innovative ideas to life!
                </p>
                <!-- Skills Gained -->
            </div>
        </div>

        <!-- right side -->
        <div
            class="lg:w-1/2 sm:min-h-screen flex items-center justify-center bg-white_ lg:border-8 border-white_border border-l-0"
        >
            <Splide
                :options="{
                    gap: '5rem',
                    wheel: true,
                    flickMaxPages: 1,
                    flickPower: 300,
                    wheelMinThreshold: 100,
                }"
                class="w-full md:px-20 md:py-20 px-8 bg-gradient-to-b from-white_ via-transparent to-white_ min-h-screen py-6 flex items-center"
            >
                <SplideSlide v-for="n in 10" :key="n">
                    <div
                        class="h-full relative flex items-center justify-center flex-col md:gap-16 gap-12"
                    >
                        <h1
                            class="lg:text-5xl text-3xl font-space-grotesk font-bold uppercase tracking-wide"
                        >
                            Educations & trainings
                        </h1>
                        <div class="flow-root font-space-grotesk">
                            <ul role="list" class="-mb-8">
                                <li
                                    v-for="(
                                        education, educationIdx
                                    ) in educations"
                                    :key="education.id"
                                >
                                    <div class="relative pb-8">
                                        <span
                                            v-if="
                                                educationIdx !==
                                                educations.length - 1
                                            "
                                            class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-primary_border"
                                            aria-hidden="true"
                                        />
                                        <div
                                            class="relative flex items-start space-x-3"
                                        >
                                            <template
                                                v-if="
                                                    education.type === 'comment'
                                                "
                                            >
                                                <div class="relative">
                                                    <div
                                                        class="bg-primary_border rounded-full h-10 w-10 flex items-center justify-center"
                                                    >
                                                        <Icon
                                                            :name="
                                                                education.icon
                                                            "
                                                            class="flex items-center justify-center rounded-full text-white_ text-3xl ring-8 ring-white"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <div>
                                                        <div class="text-sm">
                                                            <a
                                                                :href="
                                                                    education
                                                                        .person
                                                                        .href
                                                                "
                                                                class="font-medium text-2xl md:text-3xl text-gray-900"
                                                                >{{
                                                                    education
                                                                        .person
                                                                        .name
                                                                }}</a
                                                            >
                                                        </div>
                                                        <p
                                                            class="mt-0.5 text-sm text-gray-500"
                                                        >
                                                            {{ education.date }}
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="mt-2 text-sm text-gray-700"
                                                    >
                                                        <p>
                                                            {{
                                                                education.comment
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>
