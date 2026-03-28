import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    dark: false,

    toggleTheme: () =>
        set((state) => {
            const newTheme = !state.dark

            if (newTheme) {
                document.documentElement.classList.add('dark')
                localStorage.setItem("theme", "dark")
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem("theme", "light")
            }

            return { dark: newTheme }
        }),

    initTheme: () => {
        set(() => {
            const saved = localStorage.getItem("theme")

            if (saved === "dark") {
                document.documentElement.classList.add('dark')
                return { dark: true }
            } else {
                document.documentElement.classList.remove('dark')
                return { dark: false }
            }
        })
    }
}))
