# Portföy Fotoğrafları Kurulum Rehberi

## Gerçek Çalışma Fotoğraflarını Ekleyin

Attığınız görsellerdeki çalışmaları web sitesine eklemek için aşağıdaki adımları takip edin:

### 1. Fotoğrafları İndirin
Attığınız görselleri bilgisayarınıza indirin ve `images` klasörüne koyun.

### 2. Fotoğraf İsimleri
Fotoğrafları aşağıdaki isimlerle kaydedin:

- `varolet-tabela.jpg` - VAROLET tabela projesi
- `sevsa-totem.jpg` - ŞevSA totem projesi  
- `final-oto.jpg` - FINAL OTO araç servisi
- `ayyildiz-egzoz.jpg` - AYYILDIZ egzoz market
- `omnikel-enerji.jpg` - Omnikel ısı ve enerji
- `soylu-grup.jpg` - SOYLU GRUP inşaat
- `kudra-guzellik.jpg` - KUDRA güzellik
- `arac-kaplama.jpg` - Araç kaplama projesi

### 3. HTML Güncellemesi
Fotoğrafları yerleştirdikten sonra HTML'i güncelleyin:

```html
<div class="portfolio-grid">
    <div class="portfolio-item">
        <img src="images/varolet-tabela.jpg" alt="VAROLET Tabela Projesi">
        <div class="portfolio-overlay">
            <h3>VAROLET Tabela</h3>
            <p>Işıklı Tabela & Dış Cephe</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/sevsa-totem.jpg" alt="ŞevSA Totem Projesi">
        <div class="portfolio-overlay">
            <h3>ŞevSA Totem</h3>
            <p>Tekstil Geri Dönüşüm</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/final-oto.jpg" alt="FINAL OTO Araç Servisi">
        <div class="portfolio-overlay">
            <h3>FINAL OTO</h3>
            <p>Ford Özel Servisi</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/ayyildiz-egzoz.jpg" alt="AYYILDIZ Egzoz Market">
        <div class="portfolio-overlay">
            <h3>AYYILDIZ Egzoz</h3>
            <p>Kaliteli Egzoz Uygun Fiyat</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/omnikel-enerji.jpg" alt="Omnikel Isı ve Enerji">
        <div class="portfolio-overlay">
            <h3>Omnikel</h3>
            <p>Isı ve Enerji Sistemleri</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/soylu-grup.jpg" alt="SOYLU GRUP İnşaat">
        <div class="portfolio-overlay">
            <h3>SOYLU GRUP</h3>
            <p>Alçı, Sıva, Yalıtım, Boya</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/kudra-guzellik.jpg" alt="KUDRA Güzellik">
        <div class="portfolio-overlay">
            <h3>KUDRA Güzellik</h3>
            <p>Kendi Mutluluğunu Yarat</p>
        </div>
    </div>
    <div class="portfolio-item">
        <img src="images/arac-kaplama.jpg" alt="Araç Kaplama Projesi">
        <div class="portfolio-overlay">
            <h3>Araç Kaplama</h3>
            <p>One Way Vision & Vinyl</p>
        </div>
    </div>
</div>
```

### 4. Fotoğraf Optimizasyonu
- Fotoğrafları 400x300 piksel boyutunda optimize edin
- JPEG formatında kaydedin
- Dosya boyutunu 200KB altında tutun

### 5. Alternatif Çözüm
Eğer fotoğrafları hemen ekleyemiyorsanız, şu anda placeholder görseller kullanılıyor. Gerçek fotoğrafları eklediğinizde daha etkileyici görünecek.

### 6. Önerilen Fotoğraf Boyutları
- **Genişlik:** 400px
- **Yükseklik:** 300px  
- **Format:** JPEG
- **Kalite:** %80-85
- **Dosya Boyutu:** <200KB

Bu şekilde web sitesi çok daha profesyonel ve gerçek çalışmaları yansıtacak! 