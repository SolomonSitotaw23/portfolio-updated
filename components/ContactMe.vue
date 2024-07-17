<template>
  <div>
    <div
      class="bg-white_ text-primary_custom lg:min-h-[calc(100dvh-220px)] lg:w-fit md:p-20 w-screen flex gap-16 flex-col justify-center h-screen px-8"
    >
      <div class="flex gap-3 flex-col">
        <div class="h-1 w-6 bg-primary_custom"></div>
        <span class="lg:text-4xl text-lg uppercase font-space-grotesk font-bold"
          >Say hello</span
        >
      </div>
      <!-- inputs -->
      <div class="font-space-grotesk flex flex-col gap-9">
        <!-- Name -->
        <div class="wave-group w-full">
          <input class="input lg:w-[630px] w-full" type="text" required="" />
          <!-- <span class="hidden lg:flex bar"></span> -->
          <label class="label">
            <span style="--index: 0" class="label-char">Your Name</span>
          </label>
        </div>
        <!-- Email -->
        <div class="wave-group">
          <input class="input lg:w-[630px] w-full" type="text" required="" />
          <!-- <span class="bar"></span> -->
          <label class="label">
            <span style="--index: 0" class="label-char">Email</span>
          </label>
        </div>
        <!-- Message -->
        <div class="wave-group">
          <textarea
            class="input lg:w-[630px] w-full min-h-52 bg-red-400"
            type="text"
            required=""
          />
          <!-- <span class="hidden lg:flex bar -top-[7px]"></span> -->
          <label class="label">
            <span style="--index: 0" class="label-char">Message</span>
          </label>
        </div>
      </div>
      <div class="buttons">
        <button class="btn">
          <span></span>
          <p data-start="Message Send" data-text="Send" data-title="Send"></p>
        </button>
      </div>
    </div>
  </div>
</template>
