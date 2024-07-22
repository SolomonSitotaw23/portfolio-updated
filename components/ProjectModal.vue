<template>
    <div
        class="font-space-grotesk pt-20 bg-white_ lg:min-w-[calc(100dvw-300px)] flex flex-col justify-center items-center px-8 bg-green-400"
    >
        <div
            class="lg:max-w-[640px] w-full pb-20 h-full text-primary_custom flex justify-center"
        >
            <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <span class="text-xs mb-1 font-bold"
                        >Sponsord by mastercard foundation
                    </span>
                    <span class="lg:text-[40px] text-[22px] font-bold uppercase"
                        >WEB APP FOR The Bridges Programme</span
                    >
                </div>
                <p class="lg:text-lg text-sm">
                    BRIDGES is a five-year programme (2019-2024) working to
                    support and create jobs and micro, small and medium
                    enterprises by unlocking the job-creation potential of
                    industrial parks and other big enterprises in Ethiopia
                </p>
                <!-- technologies: -->
                <div class="flex gap-3 pt-3 text-[10px] font-bold">
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >AWS</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Docker</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Node</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Vue</span
                    >
                    <span
                        class="box lg:px-3 lg:py-2 px-[12px] py-[7.5px] uppercase"
                        >Nuxt</span
                    >
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center gap-3">
            <div class="aspect-video overflow-hidden lg:w-[60dvw]">
                <NuxtImg
                    src="image/project_hero/hahu_jobs_primary.png"
                    class="w-full h-full"
                />
            </div>
            <span
                class="uppercase text-[10px] font-bold text-primary_border tracking-[0.5em] font-space-grotesk"
                >Sample Images</span
            >
        </div>

        <div
            class="lg:max-w-[640px] w-full py-20 h-full text-primary_custom flex justify-center"
        >
            <div class="flex flex-col gap-4">
                <div class="w-7 h-1 mb-5 bg-primary_border"></div>
                <div class="flex flex-col">
                    <span class="text-xs mb-1 font-bold">BOUTIQUE </span>
                    <span class="lg:text-[40px] text-[22px] font-bold"
                        >WEB APP FOR HANDPICKED HOMES & SMALL HOTELS</span
                    >
                </div>
                <p class="lg:text-lg text-sm">
                    In 2021 I embarked on a bold voyage with my co-founder Marc
                    Blazer to reimagine the way short-term rentals are sold. We
                    focused on building meaningful relationships with our hosts,
                    serving an aspirational collection of properties and
                    providing best-in-class customer service to our guests.
                </p>
            </div>
        </div>
    </div>
</template>
