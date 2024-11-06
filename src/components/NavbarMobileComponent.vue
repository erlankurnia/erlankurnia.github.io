<template>
    <header id="navbar-menu"
        class="fixed bottom-0 left-0 right-0 z-[8888] flex items-center w-full h-auto bg-transparent select-none">
        <div id="nav-menu-area" class="h-auto p-4 w-full z-[9999]">
            <nav id="nav-menu" class="rounded-full shadow-lg bg-quaternary">
                <ul class="flex flex-wrap w-full py-2 justify-evenly">
                    <li class="group">
                        <RouterLink v-if="$route.meta.url?.about" :to="$route.meta.url.about"
                            class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
                                'text-primary font-bold scale-110': $route.name == 'who_iam',
                            }">WHO_I'M</RouterLink>
                    </li>
                    <li class="group">
                        <RouterLink to="/"
                            class="lan-nav-link block py-2 text-xl sm:text-2xl font-extrabold tracking-[.1em] text-primary"
                            :class="{
                                'text-primary font-bold scale-125': $route.name == 'home',
                            }">
                            <p class="flex flex-row items-center w-auto h-full gap-2 align-middle">
                                <img :src="'/img/logo/Logo Only/Logo_only_logo.webp'" alt="Logo Erlan"
                                    class="w-auto h-7">
                                LAN
                            </p>
                        </RouterLink>
                    </li>
                    <li class="group">
                        <RouterLink v-if="$route.meta.url?.notes" :to="$route.meta.url.notes"
                            class="lan-nav-link max-w-max max-xs:mx-2 sm:mx-3" :class="{
                                'text-primary font-bold scale-110': $route.name == 'notes',
                            }">Notes</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { ref } from "vue";
export default {
    name: "HeaderMobileComponent",
    setup() {
        //#region On scrolling event to create sticky navbar
        const onScroll = () => {
            const header = document.querySelector("#navbar-menu");
            const fixedNav = header.offsetTop;
            const backToTop = document.querySelector("#back-to-top");
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

        //#region On click outside nav menu
        const isHamburgerOpen = ref(false);
        const preventHamburger = ref(false);
        const onOutsideMenu = (e) => {
            if (e.target.id != "hamburger" && e.target.id != "nav-menu-area" && e.target.id != "hamburger-area") {
                setTimeout(() => {
                    preventHamburger.value = false;
                    isHamburgerOpen.value = false;
                }, 100);
            }
        };
        window.addEventListener("click", onOutsideMenu);
        window.addEventListener("touchend", onOutsideMenu);
        //#endregion On click outside nav menu

        return { isHamburgerOpen };
    },
    methods: {
        toggleHamburger: function () {
            if (!this.preventHamburger) {
                this.isHamburgerOpen = !this.isHamburgerOpen;
                setTimeout(() => {
                    this.preventHamburger = false;
                }, 500);
            }
            this.preventHamburger = true;
        },
    },
};
</script>
