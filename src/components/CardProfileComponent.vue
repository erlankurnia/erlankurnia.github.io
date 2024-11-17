<template>
    <transition name="slide-right" appear>
        <h3 v-if="namePart != null && namePart.length > 0" style="transition-delay: 0ms"
            class="ml-0 text-3xl text-left lan-section-subtitle sm:text-4xl">
            <span v-for="(name, index) in namePart" :key="index">
                {{ name }}<span v-if="index < namePart.length - 1" class="text-primary dark:text-primaryDark">_</span>
            </span>
        </h3>
    </transition>

    <div v-if="data?.profile"
        class="flex flex-wrap w-full gap-4 mb-6 text-xs font-medium text-secondary dark:text-secondaryDark sm:text-sm">
        <transition name="slide-right" appear>
            <div v-if="data.profile.profession" style="transition-delay: 50ms"
                class="flex items-center justify-start w-full h-6 gap-2 text-base sm:text-lg">
                <span class="w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                </span>
                {{ data.profile.profession.value }}
            </div>
        </transition>

        <!-- <div class="h-4 w-full flex justify-start items-center pl-[2px] gap-[10px]">
            <span class="w-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
            {{ monthsToYears(monthDiff(data.dataUser.profile.birthday.value, new Date())).replace('yrs', 'yo').replace('yr',
                'yo') }}
        </div> -->

        <transition name="slide-right" appear>
            <div v-if="data?.profile.address" style="transition-delay: 100ms"
                class="h-4 w-full flex justify-start items-center pl-[0px] gap-[4px]">
                <span class="w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-full">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </span>
                {{ data.profile.address.value }}
            </div>
        </transition>

        <transition name="slide-right" appear>
            <div v-if="data?.profile.nationality" style="transition-delay: 150ms"
                class="h-4 w-full flex justify-start items-center pl-[2px] gap-[6px]">
                <span class="w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                </span>
                {{ data.profile.nationality.value }}
            </div>
        </transition>

        <transition name="slide-right" appear>
            <a v-if="data?.socialMedia.email" style="transition-delay: 200ms" :href="'mailto:' + data.socialMedia.email"
                class="h-4 w-full flex justify-start items-center pl-[2px] gap-[6px]">
                <span class="w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-full">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </span>
                {{ data.socialMedia.email }}
                <span class="h-full aspect-square">
                    <NewTabIcon></NewTabIcon>
                </span>
            </a>
        </transition>

    </div>

    <transition name="slide-right">
        <SocialMediaComponent style="transition-delay: 250ms"></SocialMediaComponent>
    </transition>
</template>

<script setup lang="ts">
import { inject } from 'vue';
// import { useDateTime } from "../helper/mixins/dateTime";
import SocialMediaComponent from "./SocialMediaComponent.vue";
import DataUserSymbol from '@/helper/symbols/DataUserSymbol';
import NamePartSymbol from '@/helper/symbols/NamePartSymbol';
import NewTabIcon from './icons/NewTabIcon.vue';

const data = inject(DataUserSymbol);
const namePart = inject(NamePartSymbol);
// const { monthsToYears, monthDiff } = useDateTime();
</script>