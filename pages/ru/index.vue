<template>
  <div>
    <HeroSection :content="ruContent" />
    <HowItWorks />
    <FeaturesGrid />
    <DriverRecruitment />
    <DownloadCTA />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Tagsi - Новый ритм города',
  meta: [
    { name: 'description', content: 'Быстрый, безопасный и удобный транспорт с Tagsi. Скачайте сейчас.' }
  ]
})

const ruContent = {
  titleLine1: 'Для быстрого и безопасного транспорта',
  titleLine2: 'Tagsi',
  description: 'Современное решение, делающее городской транспорт быстрее, безопаснее и экономичнее.',
  highlight: 'Вызов одним касанием, мгновенное отслеживание.',
  noticeText: 'Все поездки с Tagsi осуществляются в рамках',
  noticeHighlight: 'взаимной перевозки',
  noticeSuffix: '.',
  commissionFree: 'Tagsi не берет комиссию.',
  btnLabel: 'Скачать сейчас'
}
</script>
