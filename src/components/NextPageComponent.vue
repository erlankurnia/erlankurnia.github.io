<template>
    <div v-if="path" :class="['w-full h-auto flex justify-center pb-16 items-center', $attrs.class]">
        <RouterLink :to="path" class="h-auto w-auto flex flex-col lan-router-link">
            {{ label ?? 'Next Page' }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 animate-bounce" fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
        </RouterLink>
    </div>
</template>

<script setup>
const props = defineProps({ path: { type: String, required: true }, label: { type: String, required: false }, });
</script>
