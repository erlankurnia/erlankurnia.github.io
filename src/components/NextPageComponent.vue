<template>
    <div v-if="path" :class="['w-full h-auto flex justify-center pb-16 items-center', $attrs.class]">
        <RouterLink :to="path" class="flex flex-col w-auto h-auto lan-router-link">
            {{ label ?? 'Next Page' }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 animate-bounce" fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{ path: string, label?: string, }>();
</script>
