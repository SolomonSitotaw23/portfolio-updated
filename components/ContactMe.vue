<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";

const item = reactive({});

const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);

const validateEmail = (value) => {
    // if the field is empty
    if (!value) {
        return "This field is required";
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return "This field must be a valid email";
    }
    // All is good
    return true;
};

const validateName = (value) => {
    if (!value) {
        return "This field is required";
    }

    return true;
};

const validateMessage = (value) => {
    if (!value) {
        return "Please write a message";
    }

    return true;
};

const onSubmit = async (values) => {
    console.log("values", values);

    isLoading.value = true;

    const formSpree = await useFetch("/api/submit", {
        method: "post",
        body: {
            name: values.name,
            email: values.email,
            message: values.message,
        },
    });
    if (formSpree?.data?.value?.response?.ok) {
        console.log("formspree", formSpree?.data?.value?.response?.ok);
        setTimeout(() => {
            isLoading.value = false;
            isSuccess.value = true;
        }, 1000);
    } else {
        setTimeout(() => {
            isLoading.value = false;
            isError.value = true;
            console.log("error", isError.value);
        }, 1000);
    }
};
</script>

<template>
    <div
        class="bg-white_ text-primary_custom lg:w-fit md:p-20 flex gap-16 flex-col justify-center px-8 h-screen md:h-fit w-[99vw]"
    >
        <div class="flex flex-col gap-20">
            <div class="flex gap-3 flex-col">
                <div class="h-1 w-6 bg-primary_custom"></div>
                <span
                    class="lg:text-4xl text-lg uppercase font-space-grotesk font-bold"
                    >Say hello</span
                >
            </div>
            <Form @submit="onSubmit">
                <div class="font-space-grotesk flex flex-col gap-9">
                    <!-- Name -->
                    <div class="wave-group w-full flex flex-col gap-2">
                        <Field
                            class="input lg:w-[630px] w-full"
                            name="name"
                            type="text"
                            :rules="validateName"
                        />
                        <ErrorMessage
                            name="name"
                            class="text-xs text-red-600 transition-all duration-300"
                        />
                        <label class="label">
                            <span style="--index: 0" class="label-char"
                                >Your Name</span
                            >
                        </label>
                    </div>
                    <!-- Email -->
                    <div class="wave-group w-full flex flex-col gap-2">
                        <Field
                            class="input lg:w-[630px] w-full"
                            name="email"
                            type="email"
                            :rules="validateEmail"
                        />
                        <ErrorMessage
                            name="email"
                            class="text-xs text-red-600 transition-all duration-300"
                        />
                        <label class="label">
                            <span style="--index: 0" class="label-char"
                                >Your Email</span
                            >
                        </label>
                    </div>

                    <div class="wave-group w-full flex flex-col gap-2">
                        <Field
                            as="textarea"
                            class="input lg:w-[630px] w-full min-h-52"
                            name="message"
                            type="text"
                            :rules="validateMessage"
                        />
                        <ErrorMessage
                            name="message"
                            class="text-xs text-red-600 transition-all duration-300"
                        />
                        <label class="label">
                            <span style="--index: 0" class="label-char"
                                >Your Message</span
                            >
                        </label>
                    </div>
                </div>
                <div class="mt-12 w-full flex items-center justify-center">
                    <button
                        :class="`bg-white  h-14 flex items-center justify-center transition-all duration-200 hover:shadow-md ${
                            isLoading || isSuccess || isError
                                ? 'w-14 h-14 rounded-full '
                                : 'w-40'
                        } `"
                    >
                        <Icon
                            name="eos-icons:loading"
                            class="text-primary_custom text-lg transition-all duration-200"
                            v-if="isLoading"
                        />

                        <Icon
                            name="mdi:error"
                            class="h-full w-full text-red-500 transition-all duration-200 animate-wobble"
                            v-else-if="isError"
                        />

                        <Icon
                            name="ep:success-filled"
                            class="h-full w-full text-green-500 transition-all duration-200 animate-zoom-in"
                            v-else-if="isSuccess"
                        />

                        <span
                            v-else
                            class="text-primary_custom font-space-grotesk transition-all duration-700"
                        >
                            Send</span
                        >
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>
