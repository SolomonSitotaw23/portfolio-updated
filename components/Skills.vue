<script setup>
const props = defineProps({
    skills: Array,
});
</script>
<template>
    <!-- Skills Gained -->
    <div
        class="flex gap-4 flex-wrap text-sm lg:text-sm border border-primary_border/50 w-fit"
    >
        <span
            v-for="skill in skills"
            class="bg-white_ border-l border-b border-white_border lg:px-2 lg:py-1 px-[12px] py-[7.5px] uppercase"
            >{{ skill }}</span
        >
    </div>
</template>
