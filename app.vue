<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <div class="text-slate-50">
        <NuxtPage />
        <UModal v-model="isOpen">
          <UCommandPalette ref="commandPaletteRef" :groups="groups" :autoselect="false" @update:model-value="onSelect" />
        </UModal>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useShortcutStore } from '@/stores/shortcut'

const store = useShortcutStore()
const isOpen = ref(store.showSearchbar)

watch(() => store.showSearchbar, (value) => {
  isOpen.value = value
})

watch(() => isOpen.value, (value) => {
  store.showSearchbar = value
})

// shortcuts
const { esc } = useMagicKeys()
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
      e.preventDefault()
    }
  },
})
// for mac users (command + k) this code is used to prevent default behaivour
const { meta_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.metaKey && e.key === 'k' && e.type === 'keydown') e.preventDefault()
  },
})

const { ctrl_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown') e.preventDefault()
  },
})

// togglers show & control show
whenever(meta_k, (e) => {
  toggle()
})

whenever(ctrl_k, (e) => {
  toggle()
})

whenever(esc, () => {
  toggle(false)
})


const toggle = (value = undefined) => {
  store.toggleSearchbar()
  isOpen.value = store.showSearchbar
}

const avatar = '/images/lorenzo.jpg'

// command palette
const onSelect = (option) => {
  if (option.click) {
    option.click()
  } else if (option.to) {
    router.push(option.to)
  } else if (option.href) {
    window.open(option.href, '_blank')
  }
}
const router = useRouter()

const commandPaletteRef = ref()

const users = [
  { id: 'lorenzo', label: 'Lorenzo Galassi', href: '/lorenzo', avatar: { src: avatar, loading: 'lazy' } },
]

const actions = [
  { id: 'contact', label: 'Contattami', icon: 'mdi:message-fast', click: () => goTo('/contact')},
  { id: 'portfolio', label: 'Portfolio', icon: 'mdi:image-album', click: () => goTo('/portfolio')},
  { id: 'services', label: 'Servizi', icon: 'mdi:hand-peace', click: () => goTo('/services')},
]

const groups = computed(() =>
  [commandPaletteRef.value?.query ? {
    key: 'users',
    commands: users
  } : {
    key: 'team',
    label: 'Il team',
    commands: users
  }, {
    key: 'actions',
    commands: actions
  }].filter(Boolean))

const goTo = (to) => {
  router.push(to)
  toggle(false)
}

</script>