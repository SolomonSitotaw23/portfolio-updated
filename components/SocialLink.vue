<script setup>
defineProps({
  to: String,
  btnClass: String,
  icon: String,
  iconClass: String,
});
</script>

<template>
  <NuxtLink target="_blank" :to="to" :class="btnClass">
    <Icon :name="icon" :class="iconClass" />
  </NuxtLink>
</template>
