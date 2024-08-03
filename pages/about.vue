<script setup>
import { ref } from "vue";
import { abouts } from "assets/datas/about.js";
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
            class="lg:border-8 border-white_border border-l-0 lg:w-1/2 lg:py-20 py-20 px-4 max-h-screen overflow-hidden sm:scrollbar-custom"
        >
            <div
                class="lg:px-20 h-[90vh] overflow-scroll w-full flex flex-col gap-6 sm:scrollbar-custom"
            >
                <div v-for="about in abouts" class="">
                    <div
                        class="w-full relative flex items-start justify-start flex-col md:gap-16 gap-12"
                    >
                        <h1
                            class="lg:text-5xl sticky top-0 bg-white_ w-full z-50 text-3xl font-space-grotesk font-bold uppercase tracking-wide pt-10"
                        >
                            {{ about.title }}
                        </h1>
                        <div
                            class="flow-root font-space-grotesk lg:ml-10 h-full l w-full scrollbar-custom lg:px-8"
                        >
                            <ul role="list" class="-mb-8">
                                <li
                                    v-for="(ab, aboutIdx) in about.data"
                                    :key="ab.id"
                                >
                                    <div class="relative pb-8">
                                        <span
                                            v-if="aboutIdx !== ab.length - 1"
                                            class="absolute left-5 top-5 h-full w-0.5 bg-primary_border"
                                            aria-hidden="true"
                                        />
                                        <div
                                            class="relative flex items-start space-x-3"
                                        >
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
                                                            :href="
                                                                ab.company.href
                                                            "
                                                            class="font-medium text-2xl md:text-3xl text-gray-900"
                                                            >{{
                                                                ab.company.name
                                                            }}</a
                                                        >
                                                    </div>
                                                    <span
                                                        class="font-light lg:text-xl text-lg text-primary_custom"
                                                    >
                                                        LeadBackend developer
                                                    </span>
                                                    <p
                                                        class="mt-0.5 text-sm text-gray-500"
                                                    >
                                                        {{ ab.date }}
                                                    </p>
                                                    <p
                                                        class="text-sm mr-4 mt-3"
                                                    >
                                                        {{
                                                            ab.company?.overview
                                                        }}
                                                    </p>
                                                </div>
                                                <div
                                                    class="mt-2 text-sm text-gray-700 flex flex-col gap-3"
                                                >
                                                    <div
                                                        v-if="
                                                            ab.responsiblities
                                                        "
                                                    >
                                                        <span class="text-lg"
                                                            >Key
                                                            Responsiblities</span
                                                        >
                                                        <ul
                                                            v-for="(
                                                                resposiblity,
                                                                indx
                                                            ) in ab.responsiblities"
                                                            :key="index"
                                                            class="ml-4 flex gap-2 items-center"
                                                        >
                                                            <div
                                                                class="flex items-baseline gap-2"
                                                            >
                                                                <span
                                                                    class="w-2 h-2 bg-primary_custom/50"
                                                                ></span>
                                                                <li class="">
                                                                    {{
                                                                        resposiblity
                                                                    }}
                                                                </li>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <!-- Accomplishments -->

                                                    <div
                                                        v-if="
                                                            ab.accomplishments
                                                        "
                                                    >
                                                        <span class="text-lg"
                                                            >Accomplishments</span
                                                        >
                                                        <ul
                                                            v-for="(
                                                                accomplishment,
                                                                indx
                                                            ) in ab.accomplishments"
                                                            :key="index"
                                                            class="ml-4 flex gap-2 items-center"
                                                        >
                                                            <div
                                                                class="flex items-baseline gap-2"
                                                            >
                                                                <span
                                                                    class="w-2 h-2 bg-primary_custom/50"
                                                                ></span>
                                                                <li class="">
                                                                    {{
                                                                        accomplishment
                                                                    }}
                                                                </li>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <div
                                                        v-if="ab.skills.length"
                                                    >
                                                        <span class="text-lg"
                                                            >Skills Gained</span
                                                        >
                                                        <!-- Skills Gained -->
                                                        <Skills
                                                            :skills="ab.skills"
                                                        />
                                                    </div>

                                                    <!-- <p>
                                                    {{ ab.skills }}
                                                </p> -->
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
    </section>
</template>
