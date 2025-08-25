# EmailJS Kurulum Rehberi  //ücretsiz 200 email gönderilme aylık hakkı

## Form Mesajlarının Gerçek E-posta Olarak Gönderilmesi

Şu anda form sadece simüle ediliyor. Gerçek e-posta gönderimi için EmailJS kullanacağız.

### 1. EmailJS Hesabı Oluşturun
1. [EmailJS.com](https://www.emailjs.com/) adresine gidin
2. Ücretsiz hesap oluşturun
3. E-posta adresinizi doğrulayın

### 2. E-posta Servisi Ekleyin
1. Dashboard'da "Email Services" bölümüne gidin
2. "Add New Service" butonuna tıklayın
3. Gmail, Outlook veya diğer servislerden birini seçin
4. Servis adını girin (örn: "Gmail")
5. E-posta adresinizi ve şifrenizi girin

### 3. E-posta Template'i Oluşturun
1. "Email Templates" bölümüne gidin
2. "Create New Template" butonuna tıklayın
3. Template adını girin (örn: "contact_form")
4. Aşağıdaki template'i kullanın:

```html
Yeni İletişim Formu Mesajı

Gönderen: {{from_name}}
E-posta: {{from_email}}
Telefon: {{from_phone}}

Mesaj:
{{message}}

---
Bu mesaj GRAFİx AJANS web sitesinden gönderilmiştir.
```

### 4. JavaScript Kodunu Güncelleyin
`script.js` dosyasında aşağıdaki değerleri değiştirin:

```javascript
// EmailJS Configuration
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Public key'inizi buraya ekleyin
})();

// Form submission kısmında:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### 5. Gerekli Bilgileri Bulun
1. **Public Key**: Dashboard'da "Account" > "API Keys" bölümünde
2. **Service ID**: "Email Services" bölümünde servisinizin ID'si
3. **Template ID**: "Email Templates" bölümünde template'inizin ID'si

### 6. Örnek Güncelleme
```javascript
// EmailJS Configuration
(function() {
    emailjs.init("user_abc123def456"); // Public key'iniz
})();

// Form submission kısmında:
emailjs.send('service_xyz789', 'template_contact123', templateParams)
```

### 7. Test Edin
1. Web sitesini açın
2. İletişim formunu doldurun
3. "Mesaj Gönder" butonuna tıklayın
4. E-posta adresinizi kontrol edin

### Alternatif Çözümler

#### Formspree (Daha Kolay)
1. [Formspree.io](https://formspree.io/) adresine gidin
2. Ücretsiz hesap oluşturun
3. Form action'ını güncelleyin:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Netlify Forms
Eğer Netlify'da host ediyorsanız:
1. Form'a `netlify` attribute'u ekleyin
2. Netlify dashboard'da formları kontrol edin

### Güvenlik Notları
- Public key'ler güvenlidir, client-side'da kullanılabilir
- Rate limiting vardır (ücretsiz plan: 200 email/ay)
- Spam koruması otomatik olarak çalışır

### Sorun Giderme
- Console'da hata mesajlarını kontrol edin
- EmailJS dashboard'da log'ları inceleyin
- Network sekmesinde API çağrılarını kontrol edin 