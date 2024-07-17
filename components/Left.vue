<script setup>
const props = defineProps({
    content: Object,
});
</script>

<template>
    <div class="left-wrapper">
        <span class="lg:text-base text-xs">{{ content.head }} </span>
        <h1 class="lg:text-[40px] text-[22px] font-bold">
            {{ content.title }}
        </h1>
        <p class="lg:text-lg text-sm">
            {{ content.description }}
        </p>

        <slot></slot>
    </div>
</template>
