<template>
    <button id="scroll-down" @click="scrollToNextSection"
        class="fixed z-[8888] h-12 w-12 right-4 bottom-1/2 top-1/2 rounded-full shadow-lg border-[1px] animate-bounce justify-center items-center">
        <span class="w-full h-full text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24">
                <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path>
            </svg>
        </span>
    </button>
</template>

<script>
export default {
    name: "ScrollDownComponent",
    setup() { },
    methods: {
        scrollToNextSection() {
            const sections = document.querySelectorAll('section');
            // const windowHeight = window.innerHeight;
            let scrolled = false;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top > 0 && !scrolled) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    scrolled = true;
                }
            });
            if (!scrolled) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        },
    }
}
</script>
