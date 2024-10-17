<script setup></script>

<template>
  <div
    class="w-16 hidden md:flex flex-col flex-grow items-center justify-center text-white z-50 absolute h-full"
  >
    <ul class="flex gap-8 font-space-grotesk transform -rotate-90">
      <NuxtLink to="/about" active-class="active" class="menu__link">
        <li>About</li>
      </NuxtLink>
      <NuxtLink to="/skills" active-class="active" class="menu__link">
        <li>Skills</li>
      </NuxtLink>

      <NuxtLink to="/projects" active-class="active" class="menu__link">
        <li>Projects</li>
      </NuxtLink>
    </ul>
  </div>
</template>
