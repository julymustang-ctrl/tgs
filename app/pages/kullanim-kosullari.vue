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
              <FileText class="w-8 h-8 text-taxi-yellow" />
            </div>
            <h1 class="text-3xl sm:text-4xl font-display font-bold dark:text-white text-charcoal">
              Kullanım Koşulları
            </h1>
            <p class="mt-4 dark:text-white/60 text-charcoal/60">
              İşbu Kullanım Koşulları, Tagsi® tarafından sunulan web sitesi ve mobil uygulamaların kullanımına ilişkin şartları düzenler. Tagsi platformunu kullanan tüm kullanıcılar, aşağıda belirtilen koşulları kabul etmiş sayılır.
            </p>
          </div>

          <!-- Content -->
          <div class="space-y-8 dark:text-white/80 text-charcoal/80">
            <!-- Section 1 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">1</span>
                Hizmet Tanımı
              </h2>
              <p class="leading-relaxed mb-3">
                Tagsi, yolcular ile sürücüleri paylaşımlı yolculuk kapsamında bir araya getiren dijital bir platformdur.
              </p>
              <p class="mb-2">Tagsi;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Taşımacılık hizmeti sunmaz,</li>
                <li>Taksi işletmesi değildir,</li>
                <li>Yolculukların tarafı değildir.</li>
              </ul>
              <p class="mt-3 italic dark:text-white/60 text-charcoal/60">
                Yolculuklar, yolcu ve sürücü arasında doğrudan gerçekleşir.
              </p>
            </div>

            <!-- Section 2 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">2</span>
                Kullanıcı Hesabı
              </h2>
              <p class="leading-relaxed">
                Platformdan faydalanabilmek için kullanıcıların doğru, güncel ve eksiksiz bilgi vermesi gerekmektedir. Kullanıcı, hesap bilgilerinin gizliliğinden kendisi sorumludur. Tagsi, gerekli gördüğü durumlarda hesap doğrulama talep edebilir.
              </p>
            </div>

            <!-- Section 3 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">3</span>
                Kimlik Doğrulama
              </h2>
              <p class="leading-relaxed">
                Platform güvenliğini sağlamak amacıyla kullanıcı ve sürücülerden T.C. Kimlik Numarası ve doğum tarihi gibi bilgiler talep edilebilir. Bu bilgiler yalnızca kimlik doğrulama ve güvenlik amacıyla kullanılır ve Gizlilik Politikası kapsamında korunur.
              </p>
            </div>

            <!-- Section 4 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">4</span>
                Kullanıcı Yükümlülükleri
              </h2>
              <p class="leading-relaxed mb-3">Kullanıcılar;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Platformu hukuka ve genel ahlak kurallarına uygun şekilde kullanmayı,</li>
                <li>Yanıltıcı veya sahte bilgi vermemeyi,</li>
                <li>Diğer kullanıcıların güvenliğini ve haklarını ihlal etmemeyi</li>
              </ul>
              <p class="mt-3">kabul eder.</p>
            </div>

            <!-- Section 5 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">5</span>
                Yolculuklar ve Sorumluluk
              </h2>
              <p class="leading-relaxed mb-3">Tagsi, yolculuk sürecinde taraf değildir.</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Yolculuk koşulları yolcu ve sürücü arasında belirlenir.</li>
                <li>Yolculuk sırasında doğabilecek uyuşmazlıklar taraflar arasında çözülür.</li>
                <li>Tagsi, taraflar arasındaki anlaşmazlıklardan sorumlu tutulamaz.</li>
              </ul>
            </div>

            <!-- Section 6 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">6</span>
                Değerlendirme ve Geri Bildirim
              </h2>
              <p class="leading-relaxed">
                Platformda yer alan değerlendirme ve puanlama sistemi, kullanıcı deneyimini iyileştirmek amacıyla kullanılır. Kullanıcılar, gerçeğe aykırı veya kötü niyetli değerlendirme yapmamayı kabul eder.
              </p>
            </div>

            <!-- Section 7 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">7</span>
                Hizmetin Askıya Alınması
              </h2>
              <p class="leading-relaxed mb-3">Tagsi;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Kullanım Koşulları'na aykırı davranışlarda,</li>
                <li>Güvenlik riskleri oluştuğunda,</li>
                <li>Yasal zorunluluklar halinde</li>
              </ul>
              <p class="mt-3">kullanıcı hesaplarını geçici veya kalıcı olarak askıya alma hakkını saklı tutar.</p>
            </div>

            <!-- Section 8 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">8</span>
                Fikri Mülkiyet Hakları
              </h2>
              <p class="leading-relaxed">
                Tagsi platformunda yer alan tüm içerik, tasarım, logo ve yazılımlar Tagsi®'ye aittir. İzinsiz kopyalanamaz, çoğaltılamaz veya kullanılamaz.
              </p>
            </div>

            <!-- Section 9 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">9</span>
                Sorumluluğun Sınırlandırılması
              </h2>
              <p class="leading-relaxed mb-3">Tagsi;</p>
              <ul class="list-disc list-inside space-y-1 ml-4">
                <li>Platformun kesintisiz veya hatasız çalışacağını garanti etmez,</li>
                <li>Üçüncü kişilerin fiillerinden sorumlu tutulamaz,</li>
                <li>Dolaylı veya doğrudan zararlardan sorumluluk kabul etmez.</li>
              </ul>
            </div>

            <!-- Section 10 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">10</span>
                Değişiklikler
              </h2>
              <p class="leading-relaxed">
                Tagsi, işbu Kullanım Koşulları'nı önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar. Güncel metin platformda yayınlandığı tarihten itibaren geçerlidir.
              </p>
            </div>

            <!-- Section 11 -->
            <div>
              <h2 class="text-xl font-bold dark:text-white text-charcoal mb-3 flex items-center gap-2">
                <span class="w-8 h-8 bg-taxi-yellow/10 rounded-lg flex items-center justify-center text-taxi-yellow text-sm font-bold">11</span>
                Uygulanacak Hukuk
              </h2>
              <p class="leading-relaxed">
                İşbu Kullanım Koşulları, Türkiye Cumhuriyeti hukukuna tabidir.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { FileText } from 'lucide-vue-next'

useHead({
  title: 'Kullanım Koşulları - Tagsi',
  meta: [
    { name: 'description', content: 'Tagsi kullanım koşulları - platform kullanım şartları ve sorumluluklar.' }
  ]
})
</script>
