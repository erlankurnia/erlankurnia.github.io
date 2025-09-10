<script setup lang="ts">
import { computed, defineAsyncComponent, inject, onMounted, ref } from "vue";
import Icon from "@/components/icons/Icon.vue";
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import type ISkillInfo from "@/helper/interfaces/ISkillInfo";

const ContextMenuComponent = defineAsyncComponent(() => import('@/components/ContextMenuComponent.vue'));

const data = inject(DataUserSymbol);
const selectedSkill = ref<ISkillInfo | null>(null);
type ContextMenuType = InstanceType<typeof ContextMenuComponent>;
const optionComponent = ref<ContextMenuType | null>(null);
const showOptions = (event: MouseEvent | null, skill: ISkillInfo | null) => {
    if (event != null && skill != null) {
        selectedSkill.value = skill;
        optionComponent.value?.show({
            x: event.clientX,
            y: event.clientY,
        });
    }
};

const skillsCategorized = computed(() => data?.value?.ability.skill.categorized);

onMounted(() => {
    if (data?.value?.ability.skill.topics) {
        const simulatedEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
            detail: 1,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            button: 0,
            buttons: 0,
            relatedTarget: null,
        });
        showOptions(simulatedEvent, data.value.ability.skill.topics[0]);
    }
});
</script>

<template>
    <section v-if="data" id="skills" class="pt-24 max-md:px-2 pb-16">
        <div class="container">
            <div class="w-full">
                <div class="mx-auto text-center">
                    <h2 class="relative mb-2 lan-section-title">
                        Skills
                        <!-- Tooltip -->
                        <div v-if="data.ability.tooltip"
                            class="absolute translate-x-[52px] sm:translate-x-[64px] top-[4px] right-1/2 group cursor-help">
                            <span
                                class="flex size-4 sm:size-5 group-hover:text-primary dark:group-hover:text-primaryDark group-focus:text-primary dark:group-focus:text-primaryDark">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z">
                                    </path>
                                    <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                                </svg>
                            </span>
                            <p class="absolute hidden top-6 -left-[23vw] md:-top-4 md:left-6 [text-transform:_math-auto] p-2 text-xs shadow-md rounded-lg font-normal group-hover:block group-focus:block bg-tertiary text-dark dark:bg-tertiaryDark dark:text-light break-words w-60"
                                v-html="data.ability.tooltip"></p>
                        </div>
                        <!-- Tooltip -->
                    </h2>
                </div>
            </div>
            <!-- Current Ability -->
            <template v-if="data.ability.skill">
                <div v-if="data.ability.skill.title" class="w-full p-4">
                    <div class="mx-auto mb-4 text-center">
                        <h3 class="lan-section-subtitle" v-html="data.ability.skill.title"></h3>
                        <p class="lan-section-desc" v-html="data.ability.skill.description">
                        </p>
                    </div>
                </div>
                <!-- <div v-if="skillsCategorized && skillsCategorized.length > 0"
                    class="grid grid-cols-[repeat(auto-fit,_minmax(192px,_1fr))] gap-12 justify-center max-w-[1080px] px-4 w-full 2xl:mx-auto mb-6 xl:mb-10">
                    <section v-for="cat in skillsCategorized" class="flex flex-col gap-4 xl:gap-6">
                        <h3 class="lan-section-title font-semibold text-center text-lg xl:text-xl underline mx-auto"
                            v-html="cat.title"></h3>
                        <div v-if="cat.topics && cat.topics.length > 0"
                            class="justify-center flex flex-col gap-1 lg:gap-3 mx-auto">
                            <button v-for="skill in cat.topics" type="button" @click="showOptions($event, skill)"
                                class="grid grid-cols-[24px_1fr] lg:grid-cols-[32px_1fr] justify-start w-auto h-auto gap-4 p-2 text-secondary dark:text-secondaryDark lan-50-to-100">
                                <div class="flex items-center justify-center mx-auto size-8">
                                    <Icon :techName="skill.name"></Icon>
                                </div>

                                <div class="flex flex-col gap-1 text-xs text-left justify-evenly md:text-[14px]">
                                    <h3 class="w-full font-light md:font-normal" translate="no" v-html="skill.title">
                                    </h3>
                                    <h4 v-if="skill.level" class="w-full font-thin" v-html="skill.level.toString().charAt(0).toUpperCase() +
                                        skill.level.toString().slice(1).toLowerCase()"></h4>
                                </div>
                            </button>
                        </div>
                    </section>
                </div> -->

                <table v-if="skillsCategorized && skillsCategorized.length > 0"
                    class="w-full mb-6 mx-4 text-sm font-medium border-separate table-auto text-secondary dark:text-secondaryDark sm:text-base">
                    <thead>
                        <tr>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="cat in skillsCategorized">
                            <!-- Skills Category -->
                            <tr class="w-auto grid grid-cols-[128px_auto_1fr] max-lg:p-4">
                                <td class="py-6 align-top lg:py-7 text-primary dark:text-primaryDark">
                                    <h3 class="" v-html="cat.title"></h3>
                                </td>
                                <td class="w-3 md:w-4 xl:w-7 2xl:w-10"></td>
                                <td class="flex flex-wrap py-4 align-text-top">
                                    <template v-for="data in cat.topics">
                                        <!-- Skill Item -->
                                        <button type="button" @click="showOptions($event, data)"
                                            class="max-h-[36px] lg:max-h-[44px] w-fit max-w-[192px] xl:max-w-3xs py-2 lan-50-to-100 flex flex-row">
                                            <div class="h-full mr-2 aspect-square lg:mr-4">
                                                <Icon :techName="data.name"></Icon>
                                            </div>
                                            <h4 class="h-auto my-auto text-xs font-bold min-w-min text-left text-secondary dark:text-secondaryDark"
                                                v-html="data.title"></h4>
                                        </button>
                                        <!-- Skill Item -->
                                    </template>
                                </td>
                            </tr>
                            <!-- Skills Category -->
                        </template>
                    </tbody>
                </table>
            </template>
            <!-- Current Ability -->
        </div>

        <ContextMenuComponent v-if="selectedSkill" ref="optionComponent">
            <div class="flex flex-col w-auto text-sm font-light divide-y divide-quaternary dark:divide-quaternaryDark">
                <RouterLink :to="'/projects/' + selectedSkill.name"
                    class="flex items-center justify-start w-full px-3 py-1 rounded-lg min-h-8 hover:bg-quaternary/90 dark:hover:bg-quaternaryDark/50">
                    Show Related Project
                </RouterLink>
                <a v-if="selectedSkill.urlInfo" :href="selectedSkill.urlInfo" target="_blank"
                    class="flex items-center justify-start w-full px-3 py-1 rounded-lg min-h-8 hover:bg-quaternary/90 dark:hover:bg-quaternaryDark/50">
                    What is <span class="pl-2 font-medium"> {{ selectedSkill.title }}</span>?
                </a>
            </div>
        </ContextMenuComponent>
    </section>
</template>
