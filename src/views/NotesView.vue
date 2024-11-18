<template>
	<section v-if="data != null && data.notebook.notes" id="credit"
		:class="['min-h-screen pt-16 pb-16 sm:pt-24', $attrs.class]">
		<div class="container">
			<div class="w-full pt-4 text-center">
				<h4 class="mb-3 lan-section-title">Notes</h4>
			</div>

			<!-- Articles -->
			<div class="flex flex-wrap">
				<div class="w-full mb-8 text-center" v-if="data.notebook.title">
					<h2 class="lan-section-subtitle" v-html="data.notebook.title"></h2>
					<p class="font-medium text-md text-secondary dark:text-secondaryDark md:text-lg"
						v-if="data.notebook.description" v-html="data.notebook.description"></p>
				</div>
				<div class="w-full mb-8 px-3 sm:px-6 text-center">
					<div class="relative w-full max-w-[848px] mx-auto">
						<input type="search" class="lan-textfield-primary text-center px-8 w-full"
							v-model="searchKeyword">
						<SearchIcon class="absolute size-6 top-3 bottom-3 left-2 text-primary dark:text-primaryDark">
						</SearchIcon>
					</div>
				</div>
				<div class="w-full max-w-4xl px-3 mx-auto sm:px-6" v-if="data.notebook.notes.length > 0">
					<transition-group name="show-up" tag="ul" class="flex flex-col gap-8">
						<li v-for="[index, note] of computedListNotes.items()" :key="index"
							class="flex flex-col w-full h-auto px-4 py-3 transition duration-500 rounded-lg hover:bg-quaternary dark:hover:bg-quaternaryDark">
							<RouterLink
								v-if="(('' + filter) == '' || note.topics.includes(filter)) && route.meta.url?.note"
								:to="route.meta.url.note + '/' + note.id + '/' + note.title">
								<div class="mb-2 text-xl font-bold text-primary dark:text-primaryDark">
									<h4 v-html="note.title"></h4>
								</div>
								<p class="text-sm text-secondary dark:text-secondaryDark" v-if="note.description"
									v-html="('' + note.description).substring(0, note.description.length > 128 ? 128 : note.description.length)">
								</p>
								<p v-if="note.date"
									class="mt-2 text-xs font-light text-right text-secondary dark:text-secondaryDark">{{
										note.date }}
								</p>
							</RouterLink>
						</li>
					</transition-group>
				</div>
			</div>
			<!-- Articles -->
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useHead } from '@unhead/vue';
import DataUserSymbol from "@/helper/symbols/DataUserSymbol";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import type INote from "@/helper/interfaces/INote";
import Dictionary from "@/helper/interfaces/Dictionary";

const listNotes = new Dictionary<INote>();

const route = useRoute()
const data = inject(DataUserSymbol);
const filter = ref('');
const searchKeyword = ref('');

if (route.params.filter instanceof Array) {
	filter.value = route.params.filter[0];
} else {
	filter.value = route.params.filter;
}

watchEffect(() => {
	if (data?.value?.notebook?.notes != null && Array.isArray(data.value.notebook.notes)) {
		data.value.notebook.notes.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateA.getTime() - dateB.getTime();
		});
		data.value.notebook.notes.reverse();

		listNotes.clear();
		for (let note of data.value.notebook.notes) {
			const key = `${note.title}_${note.description}_${note.topics.join(' ')}_${note.date}`.toLowerCase();
			listNotes.add(key, note);
		}
	}
});

const computedListNotes = computed(() => {
	return listNotes.filter((key: string, value: INote) => key.includes(searchKeyword.value.toLowerCase()));
})

const notesHead = useHead({
	title: "Erlan Kurnia's Notes",
});

onBeforeUnmount(() => {
	if (notesHead !== undefined) notesHead.dispose();
});
onMounted
</script>
