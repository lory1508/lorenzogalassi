<template>
	<div class="flex flex-row w-full bg-gradient-to-b from-slate-950 to-[#003566] min-h-screen">
		<div class="w-1/5 p-4 bg-slate-950 bg-opacity-25 shadow-lg shadow-slate-800 hidden lg:block">
			<UVerticalNavigation :links="links" />
		</div>
		<div class="lg:w-4/5 w-screen p-4 flex flex-col gap-4">
			<div class="w-full flex flex-row gap-2 justify-between">
				<UBreadcrumb :links="paths" />
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
import { onMounted, ref } from 'vue';
import { capitalizeFirstLetter } from '~/utils'
import { useShortcutStore } from '@/stores/shortcut'

const route = useRoute()
const store = useShortcutStore()

const avatar = '/images/lorenzo.jpg'

const links = [
	[{
    label: 'Chi sono',
    avatar: {
      src: avatar
    },
  }],
  [
	{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  { 
		id: 'contact', 
		label: 'Contattami', 
		icon: 'mdi:message-fast', 
		to: '/contact'
	},
  { 
		id: 'portfolio', 
		label: 'Portfolio', 
		icon: 'mdi:image-album', 
		to: '/portfolio'
	},
  { 
		id: 'services', 
		label: 'Servizi', 
		icon: 'mdi:hand-peace', 
		to: '/services'
	}]
]

const paths = ref([{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}])

const toggleSearchModal = () => {
	store.toggleSearchbar()
}

onMounted(() => {
	paths.value.push({
		label: capitalizeFirstLetter(route.name),
		to: route.path
	}) 
})
</script>