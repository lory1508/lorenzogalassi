<template>
	<div class="flex flex-row w-full bg-gradient-to-b from-slate-950 to-[#003566] min-h-screen">
		<div class="w-1/5 p-4 bg-slate-950 bg-opacity-25 shadow-lg shadow-slate-800 hidden lg:block">
			<UVerticalNavigation :links="links" />
		</div>
		<div class="lg:w-4/5 w-screen p-4 flex flex-col gap-4">
			<div class="w-full flex flex-row gap-2 justify-between">
				<UButton
					icon="mdi:menu"
					size="md"
					color="primary"
					variant="solid"
					:trailing="false"
					:ui="{ rounded: 'rounded-full' }"
					class="lg:hidden"
					@click="toggleSearchModal"
				/>
			</div>
			<slot/>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useShortcutStore } from '@/stores/shortcut'
import { routes } from '@/routes'

const store = useShortcutStore()

const links = ref(routes)

const toggleSearchModal = () => {
	store.toggleSearchbar()
}
</script>