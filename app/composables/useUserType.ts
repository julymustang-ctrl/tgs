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

    // Get the correct app store links based on user type
    const androidLink = computed(() => {
        return userType.value === 'passenger'
            ? 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_app_client&hl=en_US'
            : 'https://play.google.com/store/apps/details?id=com.tagsi.tagsi_driver_app&hl=en_US'
    })

    const iosAlertMessage = computed(() => {
        return userType.value === 'passenger'
            ? 'iOS Yolcu uygulaması yakında!'
            : 'iOS Sürücü uygulaması yakında!'
    })

    const showIOSAlert = () => {
        alert(iosAlertMessage.value)
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
        androidLink,
        iosAlertMessage,
        showIOSAlert,
        scrollToDownload
    }
}
