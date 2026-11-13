<script setup lang="ts">
//#region On scrolling event to create sticky navbar
const onScroll = () => {
    const header = document.querySelector("#navbar-menu-mobile") as HTMLElement;
    const fixedNav = header?.offsetTop ?? 0;
    const backToTop = document.querySelector("#back-to-top") as HTMLElement;
    if (window.scrollY > fixedNav) {
        header.classList.add("lan-navbar-fixed");
        // header.classList.remove("absolute");
        if (backToTop) {
            backToTop.classList.remove("hidden");
            backToTop.classList.add("flex");
        }
    } else {
        header.classList.remove("lan-navbar-fixed");
        // header.classList.add("absolute");
        if (backToTop) {
            backToTop.classList.remove("flex");
            backToTop.classList.add("hidden");
        }
    }
};
window.addEventListener("scroll", onScroll);
//#endregion On scrolling event to create sticky navbar
</script>

<template>
    <header id="navbar-menu-mobile"
        class="fixed bottom-0 left-0 right-0 z-8888 flex items-center w-full h-auto bg-transparent select-none">
        <div id="nav-menu-area" class="h-auto p-4 w-full z-9999">
            <nav id="nav-menu"
                class="rounded-full shadow-xs bg-quaternary shadow-primary/50 dark:shadow-primaryDark/50 dark:bg-quaternaryDark">
                <ul class="flex flex-wrap w-full py-2 justify-evenly">
                    <li class="group">
                        <RouterLink v-if="$route.meta.url?.about" :to="$route.meta.url.about"
                            class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
                                'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'who_iam',
                            }" translate="no">WHO_I'M</RouterLink>
                    </li>
                    <li class="group">
                        <RouterLink to="/"
                            class="lan-nav-link block py-2 text-xl sm:text-2xl font-extrabold tracking-[.1em] text-primary dark:text-primaryDark"
                            :class="{
                                'text-primary dark:text-primaryDark font-bold scale-125': $route.name == 'home',
                            }">
                            <p class="flex flex-row items-center w-auto h-full gap-2 align-middle" translate="no">
                                <img :src="'https://cdn.erlankurnia.laness.id/img/logo/light/128_nobg.webp'" alt="Logo Erlan" class="w-auto h-7 dark:hidden">
                                <img :src="'https://cdn.erlankurnia.laness.id/img/logo/dark/128_nobg.webp'" alt="Logo Erlan" class="w-auto h-7 hidden dark:block">
                            </p>
                        </RouterLink>
                    </li>
                    <li class="group">
                        <a v-if="$route.meta.url?.notes" :href="$route.meta.url.notes"
                            class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
                                'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
                            }" translate="no">Notes</a>
                        <!-- <RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
                            class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
                                'text-primary dark:text-primaryDark font-bold scale-110': $route.name == 'notes',
                            }" translate="no">Notes</RouterLink> -->
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
