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
    <section
        class="font-space-grotesk sm:vignette flex md:border-8 border-primary_border flex-col min-h-[100dvh] h-[100dvh] bg-primary_custom overflow-hidden relative min-w-screen justify-between"
    >
        <Header />
        <div class="flex-grow flex flex-row items-stretch relative">
            <!-- left sidebar -->
            <div
                class="w-16 hidden md:flex flex-col flex-grow items-center justify-center text-white z-10"
            >
                <ul class="flex gap-8 font-space-grotesk transform -rotate-90">
                    <NuxtLink to="/" active-class="active" class="menu__link">
                        <li class="">Home</li>
                    </NuxtLink>

                    <NuxtLink
                        to="/skills"
                        active-class="active"
                        class="menu__link"
                    >
                        <li>Skills</li>
                    </NuxtLink>

                    <NuxtLink
                        to="/about"
                        active-class="active"
                        class="menu__link"
                    >
                        <li>About</li>
                    </NuxtLink>

                    <NuxtLink
                        to="/projects"
                        active-class="active"
                        class="menu__link"
                    >
                        <li>Projects</li>
                    </NuxtLink>
                </ul>
            </div>
            <!-- center -->
            <div class="flex flex-col items-center justify-center w-full">
                <div
                    class="md:rounded-full h-[60dvh] md:h-[500px] w-[500px] bg-[#002DB3] drop-shadow-glow self-center items-center flex justify-center md:absolute"
                >
                    <div class="flex flex-col relative items-center">
                        <span
                            class="text-white_ lg:text-3xl text-md font-baunk md:self-start"
                            >Hi all I'm
                        </span>
                        <span
                            class="2xl:text-[13rem] xl:text-[10rem] md:text-[7rem] text-[3rem] font-baunk text-white_"
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
                <div class="w-1/3 h-full flex items-center justify-center">
                    <NuxtImg
                        src="image/me.png"
                        class="2xl:w-1/3 md:w-1/2 xl:w-[40%] md:block absolute -bottom-24"
                        alt=""
                    />
                    <div
                        class="md:w-1/3 w-full -bottom-24 absolute lg:flex lg:h-2/4 h-1/3 bg-gradient-to-t from-primary_custom z-30"
                    ></div>
                </div>
            </div>
            <!-- right content -->
            <div
                class="w-20 text-white_ md:flex flex-col flex-grow items-center justify-center hidden"
            >
                <div class="flex gap-4 flex-col items-center">
                    <div class="social_link group">
                        <Icon
                            name="dashicons:linkedin"
                            class="social_link_icon group-hover:text-white_"
                        />
                    </div>
                    <div class="social_link group">
                        <Icon
                            name="uil:github"
                            class="social_link_icon group-hover:text-white_"
                        />
                    </div>
                    <div class="social_link group">
                        <Icon
                            name="icon-park-solid:gitlab"
                            class="social_link_icon group-hover:text-white_"
                        />
                    </div>

                    <div class="social_link group">
                        <Icon
                            name="fa6-brands:x-twitter"
                            class="social_link_icon group-hover:text-white_"
                        />
                    </div>
                    <div class="social_link group">
                        <Icon
                            name="ant-design:codepen-outlined"
                            class="social_link_icon group-hover:text-white_"
                        />
                    </div>
                </div>
            </div>
            <!--  -->
            <div>
                <button
                    class="contact_button absolute hidden md:bottom-5 md:right-20 md:flex items-center justify-center z-50"
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

                <div class="w- h-full flex items-center justify-center">
                    <!--  -->
                    <Modal :isOpen="isModalOpened" @close="closeModal()">
                        <div>
                            <div
                                class="p-20 bg-white_ text-primary_custom min-h-[calc(100dvh-220px)] md:w-fit flex gap-16 flex-col justify-center"
                            >
                                <div class="flex gap-3 flex-col">
                                    <div
                                        class="h-1 w-6 bg-primary_custom"
                                    ></div>
                                    <span
                                        class="text-4xl uppercase font-space-grotesk font-bold"
                                        >Say hello</span
                                    >
                                </div>
                                <!-- inputs -->
                                <div
                                    class="font-space-grotesk flex flex-col gap-9"
                                >
                                    <!-- Name -->
                                    <div class="wave-group">
                                        <input
                                            class="input w-[630px]"
                                            type="text"
                                            required=""
                                        />
                                        <span class="bar"></span>
                                        <label class="label">
                                            <span
                                                style="--index: 0"
                                                class="label-char"
                                                >Your Name</span
                                            >
                                        </label>
                                    </div>
                                    <!-- Email -->
                                    <div class="wave-group">
                                        <input
                                            class="input w-[630px]"
                                            type="text"
                                            required=""
                                        />
                                        <span class="bar"></span>
                                        <label class="label">
                                            <span
                                                style="--index: 0"
                                                class="label-char"
                                                >Email</span
                                            >
                                        </label>
                                    </div>
                                    <!-- Message -->
                                    <div class="wave-group">
                                        <textarea
                                            class="input w-[630px] min-h-52 bg-red-400"
                                            type="text"
                                            required=""
                                        />
                                        <span class="bar -top-[7px]"></span>
                                        <label class="label">
                                            <span
                                                style="--index: 0"
                                                class="label-char"
                                                >Message</span
                                            >
                                        </label>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button class="btn">
                                        <span></span>
                                        <p
                                            data-start="Message Send"
                                            data-text="Send"
                                            data-title="Send"
                                        ></p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <!--  -->
                </div>
            </div>
        </div>

        <Footer />
    </section>
</template>
