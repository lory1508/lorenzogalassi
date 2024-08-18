<template>
	<div>
		<UCard>
			<template #header>
				<h1 class="text-2xl">Qualcosa su di me</h1>

			</template>

			<div class="flex flex-row gap-2">
				<NuxtImg :src="avatar" class="w-48 h-48 rounded-lg shadow-lg shadow-slate-800" />
				<div class="flex flex-col gap-2">
					<span>
						<span class="text-2xl ">C</span>iao, sono <i class="text-primary-400"><strong>Lorenzo</strong></i>, uno sviluppatore web appassionato e creativo con una missione chiara: trasformare idee in esperienze digitali straordinarie. La mia storia è intessuta di codice, design e innovazione, e qui condivido con te il mio viaggio nel mondo della creazione web.
					</span>
				</div>

			</div>
			<div class="mt-16 flex flex-col gap-16">
			</div>
			
			<template #footer>
				<div>
					<Socials />
				</div>
			</template>
		</UCard>
	</div>
</template>

<script setup>
import Socials from '~/components/Socials.vue'

const avatar = '/images/lorenzo.jpg'

const clicked = () => {
	console.log('Clicked')
}
</script>