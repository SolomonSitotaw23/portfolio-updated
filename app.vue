<script setup></script>
<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <div
            class="fixed px-3 py-2 text-sm font-bold text-white bg-gray-900 rounded bottom-4 left-4 z-50"
        >
            <span class="4xs:hidden">DEFAULT</span>
            <span class="hidden 4xs:inline-block 3xs:hidden">4XS</span>
            <span class="hidden 3xs:inline-block 2xs:hidden">3XS</span>
            <span class="hidden 2xs:inline-block xs:hidden">XXS</span>
            <span class="hidden xs:inline-block sm:hidden">XS</span>
            <span class="hidden sm:inline-block md:hidden">SM</span>
            <span class="hidden md:inline-block lg:hidden">MD</span>
            <span class="hidden lg:inline-block xl:hidden">LG</span>
            <span class="hidden xl:inline-block 2xl:hidden">XL</span>
            <span class="hidden 2xl:inline-block 3xl:hidden">2XL</span>
            <span class="hidden 3xl:inline-block 4xl:hidden">3XL</span>
            <span class="hidden 4xl:inline-block">4XL</span>
        </div>
    </div>
</template>
