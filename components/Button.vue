<template>
	<div 
		class=" shadow-inner transition-all duration-300 w-fit px-4 py-2 rounded-full"
		:class="{
			'bg-slate-800 hover:shadow-slate-950 text-white': dark,
			'bg-white hover:shadow-slate-500 text-slate-800': !dark
		}"
	>
		<button @click="emit('click')">
			<slot/>
		</button>
	</div>
</template>

<script setup>

const props = defineProps({
	dark: {
		type: Boolean,
		default: true
	}
})

const emit = defineEmits(['click'])
</script>