<template>
    <button id="scroll-down" @click="scrollToNextSection" title="Next Section" type="button"
        :class="['fixed z-[8888] h-12 w-12 right-4 bottom-[44%] rounded-full shadow-lg border-[1px] p-1 animate-bounce justify-center items-center lan-glass-effect 4xl:right-1/2 4xl:-mr-[760px]', $attrs.class]">
        <span class="w-full h-full text-primary dark:text-primaryDark">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 24 24">
                <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path>
            </svg>
        </span>
    </button>
</template>

<script setup lang="ts">
function scrollToNextSection() {
    const sections = document.querySelectorAll('section');
    // const windowHeight = window.innerHeight;
    let scrolled = false;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top > 8 && !scrolled) {
            section.scrollIntoView({ behavior: 'smooth' });
            scrolled = true;
        }
    });
    if (!scrolled) {
        window.scrollTo({ top: -8, behavior: 'smooth' });
    }
}
const isAtBottom = () => {
    // Calculate the current scroll position and the total height of the document
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    // Check if the scroll position is at the bottom of the page
    return (scrollTop + windowHeight) >= documentHeight;
}

const onScroll = () => {
    const scrollDown = document.querySelector("#scroll-down");
    if (isAtBottom()) {
        if (scrollDown) {
            scrollDown.classList.remove("flex");
            scrollDown.classList.add("hidden");
        }
    } else {
        if (scrollDown) {
            scrollDown.classList.remove("hidden");
            scrollDown.classList.add("flex");
        }
    }
};
window.addEventListener("scroll", onScroll);
</script>
