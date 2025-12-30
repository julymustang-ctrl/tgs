// Theme state management with localStorage persistence
export type ThemeMode = 'light' | 'dark'

const isDark = ref(true)
const isFlickering = ref(false)

export const useTheme = () => {
    // Initialize theme from localStorage or system preference
    const initTheme = () => {
        if (import.meta.client) {
            const stored = localStorage.getItem('tagsi-theme')
            if (stored) {
                isDark.value = stored === 'dark'
            } else {
                // Check system preference, default to light mode if not available
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                isDark.value = prefersDark
            }
            applyTheme()
        }
    }

    // Apply theme class to document
    const applyTheme = () => {
        if (import.meta.client) {
            if (isDark.value) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }

    // Toggle theme with flicker animation
    const toggleTheme = () => {
        if (isFlickering.value) return // Prevent double-click during animation

        isFlickering.value = true

        // Flicker animation duration
        setTimeout(() => {
            isDark.value = !isDark.value
            applyTheme()

            // Save to localStorage
            if (import.meta.client) {
                localStorage.setItem('tagsi-theme', isDark.value ? 'dark' : 'light')
            }

            // End flicker after theme switch
            setTimeout(() => {
                isFlickering.value = false
            }, 100)
        }, 400) // Flicker duration before switch
    }

    // Set specific theme
    const setTheme = (mode: ThemeMode) => {
        isDark.value = mode === 'dark'
        applyTheme()
        if (import.meta.client) {
            localStorage.setItem('tagsi-theme', mode)
        }
    }

    return {
        isDark: readonly(isDark),
        isFlickering: readonly(isFlickering),
        initTheme,
        toggleTheme,
        setTheme
    }
}
