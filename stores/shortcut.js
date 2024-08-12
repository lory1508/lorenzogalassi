export const useShortcutStore = defineStore('shortcut', () => {
  const showSearchbar = ref(false)
  function toggleSearchbar() {
    showSearchbar.value = !showSearchbar.value
  }

  return { showSearchbar, toggleSearchbar }
})