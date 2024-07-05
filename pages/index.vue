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
    class="flex flex-col min-h-screen bg-primary_custom overflow-hidden relative min-w-screen justify-between"
  >
    <Header />
    <div class="flex-grow flex flex-row items-stretch relative">
      <!-- left sidebar -->
      <div
        class="w-16 flex flex-col flex-grow items-center justify-center text-white"
      >
        <ul class="flex gap-8 font-space-grotesk transform -rotate-90">
          <li class="hover:underline">Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <!-- center -->
      <div class="flex flex-col items-center justify-center w-full">
        <div
          class="rounded-full h-[500px] w-[500px] bg-[#002DB3] drop-shadow-glow self-center items-center flex justify-center absolute"
        >
          <div class="flex flex-col">
            <span class="text-white_ text-3xl font-baunk">Hi all I'm </span>
            <span class="text-[13rem] font-baunk text-white_"> Solomon </span>
            <span class="text-white_ text-3xl font-baunk self-end"
              >Fullstack developer</span
            >
          </div>
        </div>
        <div class="w-1/3 h-full z-30">
          <img
            src="../assets/images/me.png"
            class="w-1/3 absolute -bottom-24 z-20"
            alt=""
          />
          <div
            class="w-1/3 -bottom-24 absolute h-2/4 bg-gradient-to-t from-primary_custom z-30"
          ></div>
        </div>
      </div>
      <!-- right content -->
      <div
        class="w-20 text-white_ flex flex-col flex-grow items-center justify-center"
      >
        <div class="flex gap-4 flex-col items-center">
          <Icon name="uil:github" class="text-white_ text-3xl" />
          <Icon name="icon-park-solid:gitlab" class="text-white_ text-3xl" />
          <Icon name="fa6-brands:x-twitter" class="text-white_ text-3xl" />
          <Icon
            name="ant-design:codepen-outlined"
            class="text-white_ text-3xl"
          />
          <Icon name="basil:linkedin-outline" class="text-white_ text-3xl" />
        </div>
      </div>

      <div>
        <button
          class="contact_button absolute bottom-5 right-20 flex items-center justify-center"
          @click="openModal()"
        >
          <Icon
            name="f7:chat-bubble-2-fill"
            class="text-primary-custom text-3xl"
          />
        </button>

        <div class="w- h-full flex items-center justify-center">
          <!--  -->
          <Modal :isOpen="isModalOpened" @close="closeModal()">
            <div>
              <div
                class="p-20 bg-white_ text-primary_custom min-h-[calc(100dvh-220px)] w-fit flex gap-16 flex-col justify-center"
              >
                <div class="flex gap-3 flex-col">
                  <div class="h-1 w-6 bg-primary_custom"></div>
                  <span class="text-4xl uppercase font-space-grotesk font-bold"
                    >Say hello</span
                  >
                </div>
                <!-- inputs -->
                <div class="font-space-grotesk flex flex-col gap-9">
                  <!-- Name -->
                  <div class="wave-group">
                    <input class="input w-[630px]" type="text" required="" />
                    <span class="bar"></span>
                    <label class="label">
                      <span style="--index: 0" class="label-char"
                        >Your Name</span
                      >
                    </label>
                  </div>
                  <!-- Email -->
                  <div class="wave-group">
                    <input class="input w-[630px]" type="text" required="" />
                    <span class="bar"></span>
                    <label class="label">
                      <span style="--index: 0" class="label-char">Email</span>
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
                      <span style="--index: 0" class="label-char">Message</span>
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
