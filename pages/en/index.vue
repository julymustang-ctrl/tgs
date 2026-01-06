<template>
  <div>
    <HeroSection :content="enContent" />
    <HowItWorks />
    <FeaturesGrid />
    <DriverRecruitment />
    <DownloadCTA />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Tagsi - New Rhythm of the City',
  meta: [
    { name: 'description', content: 'Fast, safe and easy transportation with Tagsi. Download now.' }
  ]
})

const enContent = {
  titleLine1: 'For fast, safe and easy transport',
  titleLine2: 'Tagsi',
  description: 'The modern solution making urban transport faster, safer and more economical.',
  highlight: 'Call with one tap, track instantly.',
  noticeText: 'All trips made with Tagsi are carried out within the scope of',
  noticeHighlight: 'hatır transport (rideshare)',
  noticeSuffix: '.',
  commissionFree: 'Tagsi takes zero commission.',
  btnLabel: 'Download Now'
}
</script>
