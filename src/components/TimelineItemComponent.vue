<script setup lang="ts">
import { defineAsyncComponent, nextTick, onBeforeUnmount, onMounted } from "vue";
import { useLoadingStore } from "@/stores/loadingStore";
import { useDateTime } from "@/helper/mixins/DateTime";
import type IWorkExperience from "@/helper/interfaces/IWorkExperience";
import type { TDynamicModalComponent } from "@/helper/interfaces/TDynamicModalComponent";
import tools from "@/helper/tools";
import EventBus, { EventBusEnum } from "@/helper/EventBus";

const MarkdownComponent = defineAsyncComponent(() => import('@/components/MarkdownComponent.vue'));
const GraduateIcon = defineAsyncComponent(() => import('@/components/icons/GraduateIcon.vue'));
const WorkIcon = defineAsyncComponent(() => import('@/components/icons/WorkIcon.vue'));

const { monthsToYears, monthDiff, dateFormat } = useDateTime();
const loadingStore = useLoadingStore();
const { data, index, length } = defineProps<{ data?: IWorkExperience, index: number, length: number }>();

const timelineId = (index: number) => 'timeline-item-id-' + index;

const updateDistance = async () => {
    await nextTick();
    for (let i = 0; i < length; i++) {
        const timelineCard = document.getElementById('card' + timelineId(i));
        const timelineBullet = document.getElementById('bullet' + timelineId(i));
        if (timelineCard) {
            const windowCenter = window.innerHeight / 2;
            const timelineRect = timelineCard.getBoundingClientRect();
            const distanceFromCenter = Math.abs(timelineRect.top + timelineRect.height / 2 - windowCenter);
            const parallaxFactor = 0.3;
            const parallaxOffset = distanceFromCenter * parallaxFactor;
            timelineCard.style.transform = `translateY(${parallaxOffset}px)`;
        }
        if (timelineBullet) {
            const windowCenter = window.innerHeight / 2;
            const timelineRect = timelineBullet.getBoundingClientRect();
            const distanceFromCenter = Math.abs(timelineRect.top + timelineRect.height / 2 - windowCenter);
            const parallaxFactor = 0.3;
            const parallaxOffset = distanceFromCenter * parallaxFactor;
            timelineBullet.style.transform = `translateY(${parallaxOffset}px)`;
            // console.log(`#${timelineBullet.id} ${distanceFromCenter} -> ${parallaxOffset}`);
        }
    }
};

function showAge(dateFrom: string, dateTo: string) {
    return `${dateFormat(dateFrom, "MMM YYYY")} - ${dateFormat(dateTo, "MMM YYYY")}`;
}

async function onMoreInfo(index: number) {
    if (data == null) return;
    loadingStore.pushLoading();
    console.log('more info: ' + index);
    const dataSource = data.source;
    if (dataSource) {
        const dataMarkdown = await tools.getContentReadme(dataSource);
        const componentData: TDynamicModalComponent = {
            component: MarkdownComponent,
            props: { contentMarkdown: dataMarkdown }
        };
        EventBus.$emit(EventBusEnum.ShowModal, componentData);
    }
    loadingStore.pullLoading();
}

onMounted(() => {
    window.addEventListener('scroll', updateDistance);
    updateDistance();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateDistance);
});
</script>

<template>
    <!-- left -->
    <div v-if="index % 2 == 0" class="flex flex-row-reverse justify-end md:contents">
        <div v-if="data != null" :id="'card' + timelineId(index)"
            class="col-start-1 col-end-5 p-4 my-12 ml-0 rounded-lg shadow-md md:ml-auto text-secondary dark:text-secondaryDark bg-quaternary dark:bg-quaternaryDark"
            :class="{
                'mt-20': index == 0,
                'mb-20': index >= length - 1,
            }">
            <h4 class="px-2 mb-2 -mx-2 text-lg font-extrabold text-left md:text-right text-primary dark:text-primaryDark"
                v-html="data.title"></h4>
            <p v-if="data.status" class="mb-2 text-xs text-left opacity-75 md:text-right lg:text-sm"
                v-html="data.status"></p>
            <p class="mb-2 text-sm leading-tight text-left md:text-right" v-html="data.desc">
            </p>
            <p class="mb-2 text-xs text-left opacity-75 md:text-right lg:text-sm">
                {{ showAge(data.dateFrom, data.dateTo)
                }}
                <br />
                {{ `(${monthsToYears(monthDiff(data.dateFrom, data.dateTo))})` }}
            </p>
            <div v-if="typeof data.source == 'object'" class="w-full h-auto">
                <button class="w-full px-4 py-1 text-sm text-center rounded-full lan-text-primary"
                    @click="onMoreInfo(index)">
                    More Info
                </button>
            </div>
        </div>
        <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div class="flex justify-center w-6 h-full min-h-32" :class="{
                'items-end': index == 0,
                'items-center': index != 0,
            }">
                <div class="w-1 pointer-events-none bg-quaternary dark:bg-quaternaryDark" :class="{
                    'h-[40%]': index == 0,
                    'h-full': index != 0,
                }"></div>
            </div>
            <div v-if="data != null" :id="'bullet' + timelineId(index)"
                class="absolute size-8 -mt-3 -translate-x-1 rounded-full shadow-sm top-1/2" :class="{
                    'bg-quaternary dark:bg-quaternaryDark p-[6px]': index != 0,
                    'bg-primary dark:bg-primaryDark p-1': index == 0,
                    'translate-y-6': index == 0,
                    '-translate-y-6': index >= length - 1,
                }">
                <div v-if="index == 0" class="flex items-center justify-center w-full h-full bg-transparent">
                    <div class="size-full m-auto rounded-full bg-quaternary dark:bg-quaternaryDark animate-pulse">
                    </div>
                </div>
                <template v-else>
                    <template v-if="data.status && data.status.toLocaleLowerCase().includes('graduate')">
                        <GraduateIcon class="text-primary dark:text-primaryDark"></GraduateIcon>
                    </template>
                    <template v-else>
                        <WorkIcon class="text-primary dark:text-primaryDark"></WorkIcon>
                    </template>
                </template>
            </div>
        </div>
    </div>
    <!-- left -->

    <!-- right -->
    <div v-else class="flex md:contents">
        <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full min-h-32">
                <div class="w-1 h-full pointer-events-none bg-quaternary dark:bg-quaternaryDark"></div>
            </div>
            <div v-if="data != null" :id="'bullet' + timelineId(index)"
                class="absolute size-8 -mt-3 p-[6px] -translate-x-1 rounded-full shadow-sm bg-quaternary dark:bg-quaternaryDark top-1/2"
                :class="{
                    'translate-y-6': index == 0,
                    '-translate-y-6': index >= length - 1,
                }">
                <template v-if="data.status && data.status.toLocaleLowerCase().includes('graduate')">
                    <GraduateIcon class="text-primary dark:text-primaryDark"></GraduateIcon>
                </template>
                <template v-else>
                    <WorkIcon class="text-primary dark:text-primaryDark"></WorkIcon>
                </template>
            </div>
        </div>
        <div v-if="data != null" :id="'card' + timelineId(index)"
            class="col-start-6 col-end-10 p-4 my-12 mr-auto rounded-lg shadow-md text-secondary dark:text-secondaryDark bg-quaternary dark:bg-quaternaryDark"
            :class="{
                'mt-20': index == 0,
                'mb-20': index >= length - 1,
            }">
            <h4 class="px-2 mb-2 -mx-2 text-lg font-extrabold text-primary dark:text-primaryDark" v-html="data.title">
            </h4>
            <p v-if="data.status" class="mb-2 text-xs opacity-75 lg:text-sm" v-html="data.status">
            </p>
            <p class="mb-2 text-sm leading-tight" v-html="data.desc"></p>
            <p class="mb-2 text-xs opacity-75 lg:text-sm">
                {{ showAge(data.dateFrom, data.dateTo)
                }}
                <br />
                {{ `(${monthsToYears(monthDiff(data.dateFrom, data.dateTo))})` }}
            </p>
            <div v-if="typeof data.source == 'object'" class="w-full h-auto">
                <button class="w-full px-4 py-1 text-sm text-center rounded-full lan-text-primary"
                    @click="onMoreInfo(index)">
                    More Info
                </button>
            </div>
        </div>
    </div>
    <!-- right -->
</template>
