<template>
  <main class="pt-20 min-h-screen">
    <section class="py-16 lg:py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="glass rounded-3xl p-8 lg:p-12 border border-taxi-yellow/20"
        >
          <!-- Header -->
          <div class="text-center mb-12">
            <div class="w-16 h-16 mx-auto bg-taxi-yellow/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h1 class="text-3xl sm:text-4xl font-display font-bold dark:text-white text-charcoal">
              Gizlilik Politikası
            </h1>
            <p class="mt-4 dark:text-white/60 text-charcoal/60">
              Bu Gizlilik Politikası, Tagsi® tarafından işletilen platformlar (web sitesi ve mobil uygulamalar) kapsamında kullanıcıların kişisel verilerinin hangi amaçlarla işlendiğini, korunduğunu ve kullanıcıların haklarını açıklamak amacıyla hazırlanmıştır.
            </p>
          </div>

          <!-- Content -->
          <div class="space-y-8 dark:text-white/80 text-charcoal/80">
            <!-- Section 1 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">1</span>
                Toplanan Kişisel Veriler
              </h2>
              <p class="leading-relaxed mb-3">
                Tagsi, hizmetlerini sunabilmek ve platform güvenliğini sağlamak amacıyla aşağıdaki kişisel verileri toplayabilir:
              </p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Kimlik bilgileri (ad, soyad)</li>
                <li>T.C. Kimlik Numarası</li>
                <li>Doğum Tarihi</li>
                <li>İletişim bilgileri (telefon numarası, e-posta adresi)</li>
                <li>Hesap ve kullanım bilgileri</li>
                <li>Konum bilgileri (yalnızca aktif yolculuk sırasında)</li>
                <li>Cihaz ve teknik bilgiler</li>
              </ul>
            </div>

            <!-- Section 2 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">2</span>
                T.C. Kimlik Numarası ve Doğum Tarihinin İşlenme Amacı
              </h2>
              <p class="leading-relaxed mb-3">
                T.C. Kimlik Numarası ve doğum tarihi, yalnızca aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Kullanıcı ve sürücü kimlik doğrulama süreçlerinin yürütülmesi</li>
                <li>Platform güvenliğinin sağlanması</li>
                <li>Sahte hesapların ve kötüye kullanımın önlenmesi</li>
                <li>Yasal ve mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi</li>
              </ul>
              <p class="mt-4 p-4 bg-taxi-yellow/10 rounded-xl text-sm">
                <strong class="text-taxi-yellow">Önemli:</strong> Bu veriler, reklam, pazarlama veya ticari amaçlarla kesinlikle kullanılmaz.
              </p>
            </div>

            <!-- Section 3 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">3</span>
                Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p class="leading-relaxed mb-3">Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Platform hizmetlerinin sunulması ve geliştirilmesi</li>
                <li>Yolcu–sürücü eşleşmelerinin güvenli şekilde sağlanması</li>
                <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                <li>Destek taleplerinin yanıtlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </div>

            <!-- Section 4 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">4</span>
                Kişisel Verilerin Aktarılması
              </h2>
              <p class="leading-relaxed mb-3">Kişisel verileriniz;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Yasal zorunluluklar kapsamında yetkili kamu kurumlarına,</li>
                <li>Kimlik doğrulama ve teknik altyapı hizmeti sağlayan iş ortaklarına</li>
              </ul>
              <p class="mt-3">yalnızca gerekli olduğu ölçüde, sınırlı ve mevzuata uygun şekilde aktarılabilir.</p>
              <p class="mt-3 italic dark:text-white/60 text-charcoal/60">
                Kişisel verileriniz üçüncü taraflarla reklam veya pazarlama amacıyla paylaşılmaz.
              </p>
            </div>

            <!-- Section 5 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">5</span>
                Veri Güvenliği
              </h2>
              <p class="leading-relaxed mb-3">
                Tagsi, başta T.C. Kimlik Numarası ve doğum tarihi olmak üzere tüm kişisel verilerin güvenliğini sağlamak amacıyla gerekli teknik ve idari güvenlik önlemlerini almaktadır.
              </p>
              <p class="mb-2">Bu kapsamda:</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Veriler güvenli sunucularda saklanır</li>
                <li>Yetkisiz erişimlere karşı korunur</li>
                <li>Erişim yetkileri sınırlandırılmış sistemlerde işlenir</li>
              </ul>
            </div>

            <!-- Section 6 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">6</span>
                Kişisel Verilerin Saklama Süresi
              </h2>
              <p class="leading-relaxed">
                Kişisel veriler, ilgili mevzuatta öngörülen süreler boyunca veya işleme amacının gerektirdiği süre kadar saklanır. Saklama süresi sona erdiğinde veriler silinir, yok edilir veya anonim hale getirilir.
              </p>
            </div>

            <!-- Section 7 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">7</span>
                Kullanıcı Hakları
              </h2>
              <p class="leading-relaxed mb-3">KVKK kapsamında kullanıcılar;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen verilere ilişkin bilgi talep etme</li>
                <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
                <li>İşleme faaliyetlerine itiraz etme</li>
              </ul>
              <p class="mt-3">haklarına sahiptir.</p>
              <p class="mt-3 italic dark:text-white/60 text-charcoal/60">
                Bu haklara ilişkin talepler, Tagsi ile iletişime geçilerek iletilebilir.
              </p>
            </div>

            <!-- Section 8 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">8</span>
                Politika Güncellemeleri
              </h2>
              <p class="leading-relaxed">
                Tagsi, işbu Gizlilik Politikası'nı mevzuat değişiklikleri veya hizmet güncellemeleri doğrultusunda güncelleyebilir. Güncel metin her zaman platformda yayınlanır.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Shield } from 'lucide-vue-next'

useHead({
  title: 'Gizlilik Politikası - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi gizlilik politikası - kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu öğrenin.' }
  ]
})
</script>
