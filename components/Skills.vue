<script setup>
const props = defineProps({
    skills: Array,
});
</script>
<template>
    <!-- Skills Gained -->
    <div class="flex gap-4 flex-wrap text-[10px] lg:text-base">
        <span
            v-for="skill in skills"
            class="bg-primary_border lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
            >{{ skill }}</span
        >
    </div>
</template>
