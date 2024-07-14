<script setup>
import { ref } from "vue";

const educations = [
    {
        id: 1,
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
    <section
        class="min-h-dvh min-w-full flex flex-col md:flex-row font-space-grotesk"
    >
        <div
            class="md:w-1/2 text-white_ bg-primary_custom lg:border-8 lg:border-r-0 border-primary_border px-8 p-20 md:py-24 md:px-40"
        >
            <NuxtLink
                class="contact_button text-primary_custom absolute hidden md:flex self-start items-start w-fit"
                to="/"
            >
                <Icon
                    name="humbleicons:arrow-go-back"
                    class="text-primary-custom text-3xl"
                />
            </NuxtLink>
            <div
                class="flex flex-col gap-4 justify-center h-full md:items-start items-center"
            >
                <span class="md:text-base text-sm w-1/2"
                    >Fullstack developer
                </span>
                <h1 class="lg:text-[40px] text-2xl font-bold">
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
        </div>

        <!-- right side -->
        <!-- class="w-1/2 py-24 px-40 bg-white_ border-8 border-white_border border-l-0 flex flex-row items-center justify-center overflow-x-scroll" -->
        <div
            class="md:w-1/2 md:min-h-full min-h-dvh flex items-center justify-center md:px-20 bg-white_ lg:border-8 py-20 border-white_border border-l-0 md:py-20 px-8"
        >
            <div
                class="h-full md:overflow-y-scroll relative flex items-center justify-center flex-col md:gap-16 gap-4"
            >
                <h1
                    class="lg:text-5xl text-3xl font-space-grotesk font-bold uppercase tracking-wide"
                >
                    Educations & trainings
                </h1>
                <div class="flow-root font-space-grotesk">
                    <ul role="list" class="-mb-8">
                        <li
                            v-for="(education, educationIdx) in educations"
                            :key="education.id"
                        >
                            <div class="relative pb-8">
                                <span
                                    v-if="
                                        educationIdx !== educations.length - 1
                                    "
                                    class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-primary_border"
                                    aria-hidden="true"
                                />
                                <div
                                    class="relative flex items-start space-x-3"
                                >
                                    <template
                                        v-if="education.type === 'comment'"
                                    >
                                        <div class="relative">
                                            <div
                                                class="bg-primary_border rounded-full h-10 w-10 flex items-center justify-center"
                                            >
                                                <Icon
                                                    :name="education.icon"
                                                    class="flex items-center justify-center rounded-full text-white_ text-3xl ring-8 ring-white"
                                                />
                                            </div>
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <div>
                                                <div class="text-sm">
                                                    <a
                                                        :href="
                                                            education.person
                                                                .href
                                                        "
                                                        class="font-medium text-2xl md:text-3xl text-gray-900"
                                                        >{{
                                                            education.person
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
                                                <p>{{ education.comment }}</p>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
