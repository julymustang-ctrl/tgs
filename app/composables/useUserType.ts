// Global state for user type (passenger or driver)
export type UserType = 'passenger' | 'driver'

const userType = ref<UserType>('passenger')

export const useUserType = () => {
    const setUserType = (type: UserType) => {
        userType.value = type
    }

    const toggleUserType = () => {
        userType.value = userType.value === 'passenger' ? 'driver' : 'passenger'
    }

    const isPassenger = computed(() => userType.value === 'passenger')
    const isDriver = computed(() => userType.value === 'driver')

    // Direct links
    const passengerAndroidLink = 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=en_US'
    const driverAndroidLink = 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_driver_app&hl=en_US'
    const passengerIOSLink = 'https://apps.apple.com/us/app/tagsi-paylaşımlı-yolculuk/id6757018691'
    const driverIOSLink = 'https://apps.apple.com/tr/app/tagsi-sürücü/id6756360742?l=tr'

    // Smart download handler with OS detection
    const handleAppDownload = (type: UserType) => {
        // Client-side detection
        if (typeof window === 'undefined') return

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

        if (isIOS) {
            const link = type === 'passenger' ? passengerIOSLink : driverIOSLink
            window.open(link, '_blank')
        } else {
            // Android, Desktop, or other -> Direct to Play Store
            const link = type === 'passenger' ? passengerAndroidLink : driverAndroidLink
            window.open(link, '_blank')
        }
    }

    const scrollToDownload = () => {
        const downloadSection = document.getElementById('download-section')
        if (downloadSection) {
            downloadSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return {
        userType: readonly(userType),
        setUserType,
        toggleUserType,
        isPassenger,
        isDriver,
        passengerAndroidLink,
        driverAndroidLink,
        passengerIOSLink,
        driverIOSLink,
        handleAppDownload,
        scrollToDownload
    }
}
