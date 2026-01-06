<template>
  <div class="pt-24 min-h-screen">
    <div class="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
      <!-- Left: Visual -->
      <div class="relative h-64 lg:h-auto overflow-hidden">
        <div class="absolute inset-0 bg-charcoal">
          <!-- Placeholder for High-Quality Image -->
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
            alt="City Abstract" 
            class="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="flex items-center justify-center p-8 lg:p-20 bg-gray-50 dark:bg-charcoal">
        <div class="max-w-xl">
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="text-4xl lg:text-6xl font-display font-bold mb-8 dark:text-white text-charcoal"
          >
            Şehrin <br />
            <span class="text-taxi-yellow">Yeni Ritmi.</span>
          </h1>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            class="space-y-6 text-lg dark:text-white/70 text-charcoal/70 leading-relaxed"
          >
            <p>
              Tagsi, şehir içi ulaşımı daha verimli, daha paylaşımcı ve daha sürdürülebilir hale getirmek için kuruldu.
              Amacımız; sürücülerin yolculuk maliyetlerini azaltırken, şehirlerdeki trafik yoğunluğunu ve karbon emisyonlarını düşürmeye katkı sağlamak.
            </p>
            <p>
              Günümüzde şehir içi ulaşım, hem bireyler hem de şehirler için önemli bir maliyet ve çevresel yük oluşturuyor. Tagsi, aynı güzergâhı paylaşan yolcuları bir araya getirerek araçların daha verimli kullanılmasını hedefler. Bu sayede sürücüler, yaptıkları yolculuklardan daha fazla değer elde ederken; şehirlerde gereksiz araç kullanımının önüne geçilmesine yardımcı olur.
            </p>
            <p>
              Paylaşımlı yolculuk yaklaşımımız, trafikteki araç sayısının azalmasına ve dolaylı olarak yakıt tüketimi ile karbon salımının düşmesine katkı sağlar. Daha az araç, daha az yoğunluk ve daha temiz bir şehir yaşamı… Tagsi, bu dönüşümün bir parçası olmayı amaçlar.
            </p>
            <p>
              Biz, Tagsi’yi sadece bir ulaşım uygulaması olarak değil; şehirlerin daha akıllı, daha yaşanabilir ve daha sürdürülebilir hale gelmesine katkı sunan bir platform olarak görüyoruz.
              Yolcular, sürücüler ve şehirler için daha dengeli bir ulaşım ekosistemi oluşturmak için çalışıyoruz.
            </p>
          </div>

          <!-- Stats Minimal -->
          <div 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }"
            class="mt-12 flex gap-12 pt-12 border-t dark:border-white/10 border-charcoal/10"
          >
            <div>
              <div class="text-3xl font-bold dark:text-white text-charcoal">81</div>
              <div class="text-sm uppercase tracking-wider opacity-60">Şehir</div>
            </div>
            <div>
              <div class="text-3xl font-bold dark:text-white text-charcoal">7/24</div>
              <div class="text-sm uppercase tracking-wider opacity-60">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Hakkımızda - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi, modern şehir yaşamının dinamizmine ayak uyduran yeni nesil ulaşım platformudur.' }
  ]
})
</script>
