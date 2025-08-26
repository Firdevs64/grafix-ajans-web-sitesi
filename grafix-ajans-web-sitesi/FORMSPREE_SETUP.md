# Formspree Kurulum Rehberi (Daha Kolay)  //ücretsiz 50 email gönderilme aylık hakkı

## Form Mesajlarının Gerçek E-posta Olarak Gönderilmesi

Formspree, EmailJS'den daha basit bir çözümdür. Sadece form action'ını değiştirmeniz yeterli.

### 1. Formspree Hesabı Oluşturun
1. [Formspree.io](https://formspree.io/) adresine gidin
2. "Get Started" butonuna tıklayın
3. E-posta adresinizi girin
4. Hesabınızı doğrulayın

### 2. Form ID'nizi Alın
1. Dashboard'da "Forms" bölümüne gidin
2. Yeni form oluşturun veya mevcut formu kullanın
3. Form ID'sini kopyalayın (örn: `xrgjqjqr`)

### 3. HTML'i Güncelleyin
`index.html` dosyasında form action'ını değiştirin:

```html
<!-- Mevcut EmailJS formunu yorum satırı yapın -->
<!-- <form id="contactForm"> -->

<!-- Formspree formunu aktif edin -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <div class="form-group">
        <input type="text" name="name" placeholder="Adınız Soyadınız" required>
    </div>
    <div class="form-group">
        <input type="email" name="email" placeholder="E-posta Adresiniz" required>
    </div>
    <div class="form-group">
        <input type="tel" name="phone" placeholder="Telefon Numaranız" required>
    </div>
    <div class="form-group">
        <textarea name="message" placeholder="Mesajınız" rows="5" required></textarea>
    </div>
    <button type="submit" class="submit-btn">Mesaj Gönder</button>
</form>
```

### 4. JavaScript'i Güncelleyin
Formspree kullanıyorsanız, JavaScript'teki form handling kodunu kaldırabilirsiniz çünkü Formspree otomatik olarak çalışır.

### 5. Test Edin
1. Web sitesini açın
2. İletişim formunu doldurun
3. "Mesaj Gönder" butonuna tıklayın
4. E-posta adresinizi kontrol edin

### Avantajları
- ✅ Kurulum çok basit
- ✅ JavaScript kodu gerekmez
- ✅ Otomatik spam koruması
- ✅ Ücretsiz plan: 50 form/ay
- ✅ E-posta bildirimleri
- ✅ Dashboard'da form verilerini görme

### Dezavantajları
- ❌ Özelleştirme sınırlı
- ❌ Ücretsiz planda sınırlı özellik

### Örnek Form ID
```
https://formspree.io/f/xrgjqjqr
```

### Güvenlik
- Formspree otomatik olarak spam koruması sağlar
- reCAPTCHA entegrasyonu mevcuttur
- Rate limiting otomatik olarak çalışır

### Sorun Giderme
- Form ID'nin doğru olduğundan emin olun
- Network sekmesinde form gönderimini kontrol edin
- Formspree dashboard'da log'ları inceleyin 