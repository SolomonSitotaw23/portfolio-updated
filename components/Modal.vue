<script setup>
import { ref } from "vue";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";

const props = defineProps({
    isOpen: Boolean,
});
const close = () => {
    console.log("hrllo");
};
defineEmits(["open"]);
</script>

<template>
    <TransitionRoot as="template" :show="props.isOpen" class="z-50">
        <Dialog class="relative z-10">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>
            <!-- floating button -->
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center lg:p-4 text-center sm:items-center sm:p-0"
                >
                    <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div class="relative bg-blue-600">
                            <div
                                class="hidden group absolute z-40 -top-5 -right-5 bg-[#bb4855] h-12 w-12 rounded-full text-white lg:flex items-center justify-center shadow-md cursor-pointer"
                                @click="close"
                            >
                                <Icon
                                    name="iconamoon:close-bold  group-hover:animate-blurred-fade-in"
                                    class="text-2xl"
                                />
                            </div>
                            <DialogPanel
                                class="lg:border-8 border-white relative transform lg:rounded-lg bg-white_ lg:max-h-[calc(100dvh-120px)] overflow-y-scroll text-left shadow-xl transition-all"
                            >
                                <!-- slot -->
                                <slot />
                            </DialogPanel>
                        </div>
                    </TransitionChild>
                </div>
            </div>
            <div
                class="fixed bottom-4 left-4 z-50 bg-[#bb4855] text-white_ h-12 w-12 flex items-center justify-center rounded-full shadow-md md:hidden"
            >
                <Icon
                    @click="close"
                    name="iconamoon:close-bold"
                    class="text-2xl"
                />
            </div>
        </Dialog>
    </TransitionRoot>
</template>
