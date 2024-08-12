<template>
	<div class="flex flex-row w-full bg-gradient-to-b from-slate-950 to-[#003566] min-h-screen">
		<div class="w-1/5 p-4 bg-slate-950 bg-opacity-25 shadow-lg shadow-slate-800">
			<UVerticalNavigation :links="links" />
		</div>
		<div class="w-4/5 p-4 flex flex-col gap-4">
			<UBreadcrumb :links="paths" />
			<slot/>
		</div>
	</div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { capitalizeFirstLetter } from '~/utils'

const route = useRoute()
const path = ref('Home')
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


onMounted(() => {
	paths.value.push({
		label: capitalizeFirstLetter(route.name),
		to: route.path
	}) 
})
</script>