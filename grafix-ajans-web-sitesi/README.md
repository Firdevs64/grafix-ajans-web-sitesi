# GRAFİx AJANS - Profesyonel Reklam Ajansı Web Sitesi

Bu proje, modern ve responsive bir reklam ajansı web sitesi için oluşturulmuştur. Grafiker.com.tr sitesine benzer profesyonel bir tasarım ile mobil uyumlu ve kullanıcı dostu bir deneyim sunar.

## 🚀 Özellikler

### 📱 Responsive Tasarım
- Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- Modern CSS Grid ve Flexbox kullanımı
- Hamburger menü (mobil için)

### 🎨 Modern UI/UX
- Gradient arka planlar ve modern renk paleti
- Smooth scrolling ve animasyonlar
- Hover efektleri ve interaktif elementler
- Font Awesome ikonları

### ⚡ Performans
- Optimize edilmiş CSS ve JavaScript
- Lazy loading animasyonlar
- Debounced scroll events
- Minimal dosya boyutu

### 📋 Bölümler

1. **Header/Navigation**
   - Sabit navigasyon menüsü
   - Responsive hamburger menü
   - Smooth scrolling

2. **Hero Section**
   - Etkileyici gradient arka plan
   - Call-to-action butonu
   - Parallax efekti

3. **Hakkımızda**
   - Şirket tanıtımı
   - Özellik kartları (Medya Planlama, Satınalma, Strateji)

4. **Hizmetlerimiz**
   - 6 ana hizmet kategorisi
   - İkonlu kartlar
   - Detaylı hizmet listeleri

5. **Çalışmalarımız**
   - Portfolio grid
   - Hover overlay efektleri
   - Kategori filtreleme

6. **Müşteri Yorumları**
   - Testimonial kartları
   - Hover animasyonları

7. **İletişim**
   - İletişim bilgileri
   - Çalışan iletişim formu
   - Form validasyonu

8. **Footer**
   - Şirket bilgileri
   - Hızlı linkler
   - Sosyal medya

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern styling ve animasyonlar
- **JavaScript (ES6+)** - Interaktif özellikler
- **Font Awesome** - İkonlar
- **Google Fonts** - Typography

## 📁 Dosya Yapısı

```
websitesideneme/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum ve Kullanım

1. **Dosyaları İndirin**
   ```bash
   # Tüm dosyaları bir klasöre kopyalayın
   ```

2. **Web Sunucusu Başlatın**
   ```bash
   # Python ile (Python 3)
   python -m http.server 8000
   
   # Node.js ile (http-server)
   npx http-server
   
   # PHP ile
   php -S localhost:8000
   ```

3. **Tarayıcıda Açın**
   ```
   http://localhost:8000
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 767px ve altı

## 🎨 Özelleştirme

### Renkler
Ana renk paleti `styles.css` dosyasında tanımlanmıştır:
- Primary: `#3498db`
- Secondary: `#2c3e50`
- Accent: `#e74c3c`
- Background: `#f8f9fa`

### İçerik Güncelleme
1. **Şirket Bilgileri**: `index.html` dosyasında güncelleyin
2. **Hizmetler**: Services section'da düzenleyin
3. **Portfolio**: Gerçek proje görselleri ekleyin
4. **İletişim**: Gerçek iletişim bilgilerini güncelleyin

### Görsel Ekleme
- Portfolio görselleri için `img` tag'lerini güncelleyin
- Logo için header'daki logo alanını değiştirin
- Hero background için CSS'te gradient'i özelleştirin

## 🔧 Özelleştirme Seçenekleri

### 1. Logo Değiştirme
```html
<div class="nav-logo">
    <img src="path/to/your/logo.png" alt="GRAFİx AJANS">
</div>
```

### 2. Renk Teması Değiştirme
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### 3. Yeni Bölüm Ekleme
```html
<section id="new-section" class="new-section">
    <div class="container">
        <!-- İçerik -->
    </div>
</section>
```

## 📞 İletişim Formu

Form şu anda simüle edilmiştir. Gerçek kullanım için:
1. Backend API entegrasyonu
2. Email servisi (SendGrid, Mailgun vb.)
3. Form validation güncellemesi

## 🚀 Deployment

### GitHub Pages
1. Repository'yi GitHub'a yükleyin
2. Settings > Pages > Source: Deploy from branch
3. Branch seçin ve Save

### Netlify
1. Netlify'a dosyaları sürükleyin
2. Otomatik deployment

### Vercel
1. Vercel CLI ile deploy edin
2. `vercel` komutu ile

## 📈 SEO Optimizasyonu

- Semantic HTML5 yapısı
- Meta tags
- Alt text'ler
- Structured data (schema.org)
- Page speed optimizasyonu

## 🔒 Güvenlik

- Form validation
- XSS koruması
- HTTPS kullanımı önerilir

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorun veya öneri için:
- GitHub Issues kullanın
- Email: info@grafiksajans.com

---

**GRAFİx AJANS** - Profesyonel reklam çözümleri için modern web teknolojileri 