<template>
	<div class="flex flex-col items-center w-screen h-screen bg-gradient-to-b from-slate-950 to-[#003566] justify-center relative  overflow-hidden">
		<div 
			class="absolute bg-[#FFD60A] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none z-10 hidden xl:block"
			:style="{
				opacity: opacity,
				left: `${x}px`,
				top: `${y}px`,
				width: `${size}px`,
				height: `${size}px`,
			}"	
		/>

		<UAlert class="absolute top-0 w-40 j mt-4 z-50" >
			<template #description>
				<span class="flex justify-center">
					Cerca con <UKbd value="Cmd + K" class="ml-2" />
				</span>
			</template>
		</UAlert>
		<div 
			ref="logoRef"
			:style = "{ maskImage: logoGradient }"
			class="flex flex-col items-center justify-center z-50 p-8 h-screen"
		>
			<div class="flex flex-col justify-center items-center">
				<NuxtImg :src="logo" class="h-40 w-40 transition ease-in-out delay-150 duration-300 hover:scale-110" /> 
				<Card class="flex flex-col gap-2 transition ease-in-out delay-150 duration-300 hover:scale-110">
					<template #title>
						<div class="flex justify-center flex-col items-center gap-2">
							<NuxtImg :src="avatar" class="rounded-full w-32 h-32" />
							<h1 class="text-2xl font-semibold">Ciao, sono Lorenzo</h1>
						</div>
					</template>
					<span class="w-full justify-center flex">come posso aiutarti?</span>
					<USelectMenu v-model="selected" :options="pages" placeholder="Dove vuoi andare?" />
				</Card>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useMouse, useWindowSize } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import Card from '~/components/Card.vue'

const router = useRouter()

const selected = ref()

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() => Math.sqrt(dx.value ** 2 + dy.value ** 2))

const size = computed(() => Math.max(600 - distance.value / 2, 150))
const opacity = computed(() => Math.min(
	Math.max(size.value / 300, 0),
	0.3
))

const logoRef = ref()
const logoGradient = computed(() => {
	let rect = logoRef.value?.getBoundingClientRect()
	const xPos = x.value - (rect?.left ?? 0)
	const yPos = y.value - (rect?.top ?? 0)

	return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
})

const logo = '/images/nexus_logo.png'
const avatar = '/images/lorenzo.jpg'

const pages = [
	{
		id: 'lorenzo',
		label: 'Chi sono',
		href: 'lorenzo',
		avatar: { src: avatar }
	},
	{
		id: 'contact',
		label: 'Contattami',
		href: 'contact',
		icon: 'mdi:message-fast'
	},
	{
		id: 'portfolio',
		label: 'Portfolio',
		href: 'portfolio',
		icon: 'mdi:image-album'
	},
	{
		id: 'services',
		label: 'Servizi',
		href: 'services',
		icon: 'mdi:hand-peace'
	},
]

watch(() => selected.value, (value) => {
	if (value) {
		router.push(value.href)
	}
})

</script>