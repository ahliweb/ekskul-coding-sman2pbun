Kamu adalah **senior frontend engineer, Astro framework expert, UI/UX designer, dan SEO specialist**.

Bangun sebuah website informasi modern untuk **Ekstrakurikuler Coding SMAN 2 Pangkalan Bun** menggunakan **Astro Framework**.

Website harus bersifat **static-first**, cepat, ringan, responsif, SEO-friendly, mudah dipelihara, dan siap deploy ke **Cloudflare Pages/Workers, Netlify, Vercel, atau static hosting lain**.

Fokus utama website adalah memperkenalkan ekskul coding sebagai kegiatan siswa yang membimbing mereka belajar teknologi, coding, logika, kreativitas digital, problem solving, kolaborasi, dan pembuatan karya digital.

---

## 1. Tujuan Website

Buat website yang berfungsi sebagai pusat informasi resmi/landing page untuk Ekskul Coding SMAN 2 Pangkalan Bun dengan tujuan:

1. Menampilkan profil kegiatan Ekskul Coding SMAN 2 Pangkalan Bun.
2. Menampilkan informasi pengelola, pembina, koordinator, dan mentor ekskul.
3. Menampilkan jadwal kegiatan ekskul: **setiap Jumat pukul 13.30–15.00 WIB**.
4. Menampilkan program/materi belajar coding.
5. Menampilkan galeri kegiatan.
6. Menampilkan karya/proyek siswa.
7. Menampilkan FAQ.
8. Menampilkan kontak atau tombol pendaftaran.
9. Menggunakan ikon dan gambar dari CDN online yang sesuai.
10. Menghasilkan website yang siap dikembangkan menjadi CMS atau portal ekskul digital pada tahap berikutnya.

---

## 2. Teknologi yang Wajib Digunakan

Gunakan stack berikut:

1. **Astro Framework** sebagai framework utama.
2. **TypeScript** untuk konfigurasi dan data terstruktur.
3. **Astro components** untuk komponen UI.
4. **CSS modern** menggunakan salah satu opsi berikut:

   * Opsi utama: Tailwind CSS.
   * Opsi alternatif: CSS module/global CSS tanpa framework berat.
5. **Bootstrap Icons CDN** untuk ikon utama.
6. **Google Fonts CDN** untuk font.
7. **Gambar dari CDN online** untuk ilustrasi awal, dengan struktur yang mudah diganti menjadi foto asli sekolah.
8. **Astro Image** atau pendekatan image optimization yang sesuai jika memakai gambar lokal.
9. **@astrojs/sitemap** untuk sitemap.
10. Tidak perlu backend pada MVP.

---

## 3. Prinsip Teknis Astro

Ikuti prinsip Astro berikut:

1. Gunakan Astro sebagai **content-focused static site**.
2. Jangan menambahkan React/Vue/Svelte kecuali benar-benar dibutuhkan.
3. Minimalkan JavaScript client-side.
4. Gunakan komponen `.astro` untuk struktur UI.
5. Gunakan file data TypeScript untuk konten yang berulang seperti mentor, program belajar, galeri, FAQ, dan proyek siswa.
6. Pisahkan layout, section, card, dan data agar mudah dikelola.
7. Gunakan semantic HTML.
8. Pastikan build bersih tanpa error TypeScript.
9. Pastikan website tetap berjalan jika gambar eksternal gagal dimuat dengan fallback yang baik.
10. Gunakan struktur folder yang rapi dan mudah dipelihara.

---

## 4. Struktur Folder yang Diharapkan

Buat struktur minimal seperti berikut:

```text
.
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── og-image.svg atau og-image.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── SectionHeader.astro
│   │   ├── HeroSection.astro
│   │   ├── ProfileSection.astro
│   │   ├── BenefitsSection.astro
│   │   ├── ScheduleSection.astro
│   │   ├── ProgramSection.astro
│   │   ├── MentorSection.astro
│   │   ├── GallerySection.astro
│   │   ├── StudentProjectsSection.astro
│   │   ├── FaqSection.astro
│   │   ├── ContactSection.astro
│   │   ├── cards/
│   │   │   ├── BenefitCard.astro
│   │   │   ├── ProgramCard.astro
│   │   │   ├── MentorCard.astro
│   │   │   ├── GalleryCard.astro
│   │   │   └── ProjectCard.astro
│   ├── data/
│   │   ├── site.ts
│   │   ├── benefits.ts
│   │   ├── programs.ts
│   │   ├── mentors.ts
│   │   ├── gallery.ts
│   │   ├── projects.ts
│   │   └── faq.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── profil.astro
│   │   ├── program-belajar.astro
│   │   ├── pengelola-mentor.astro
│   │   ├── jadwal.astro
│   │   ├── galeri.astro
│   │   ├── karya-siswa.astro
│   │   └── kontak.astro
│   └── styles/
│       └── global.css
└── README.md
```

Jika memilih single-page landing page, tetap siapkan section ID yang jelas:

```text
#beranda
#profil
#manfaat
#jadwal
#program
#mentor
#galeri
#karya
#faq
#kontak
```

---

## 5. Halaman dan Section yang Wajib Dibuat

### 5.1 Beranda

Buat halaman utama dengan section lengkap:

1. Navbar.
2. Hero section.
3. Profil singkat ekskul.
4. Manfaat mengikuti ekskul.
5. Jadwal tetap.
6. Program belajar.
7. Pengelola dan mentor.
8. Galeri kegiatan.
9. Karya siswa.
10. FAQ.
11. CTA pendaftaran/kontak.
12. Footer.

### 5.2 Profil Ekskul

Konten wajib:

* Nama: **Ekstrakurikuler Coding SMAN 2 Pangkalan Bun**.
* Deskripsi kegiatan.
* Visi.
* Misi.
* Tujuan.
* Nilai kegiatan.
* Output pembelajaran.

Gunakan narasi berikut sebagai dasar:

> Ekstrakurikuler Coding SMAN 2 Pangkalan Bun merupakan kegiatan pengembangan minat dan bakat siswa di bidang teknologi digital. Kegiatan ini dirancang untuk memperkenalkan siswa pada dasar-dasar pemrograman, pembuatan website, logika algoritma, UI/UX sederhana, pemanfaatan AI secara bertanggung jawab, serta pengembangan proyek digital yang bermanfaat.

### 5.3 Pengelola dan Mentor

Tampilkan card profil untuk:

1. Pembina Ekskul.
2. Koordinator Ekskul.
3. Mentor Coding.
4. Asisten Mentor/Siswa Senior.
5. Tim Dokumentasi.

Jika data nama asli belum tersedia, gunakan placeholder yang rapi dan profesional, misalnya:

* “Pembina Ekskul Coding”
* “Koordinator Kegiatan”
* “Mentor Web Development”
* “Asisten Mentor Siswa”
* “Tim Dokumentasi Digital”

Jangan menampilkan nomor HP pribadi kecuali ada data resmi. Gunakan CTA kontak umum.

### 5.4 Jadwal Ekskul

Tampilkan jadwal berikut secara jelas:

* Hari: **Jumat**
* Waktu: **13.30–15.00 WIB**
* Durasi: **90 menit**
* Tempat: **SMAN 2 Pangkalan Bun / ruang atau lab yang ditentukan sekolah**
* Catatan: **Jadwal dapat menyesuaikan agenda sekolah, ujian, hari libur, atau kegiatan khusus.**

Buat desain jadwal dalam bentuk card besar dengan ikon kalender, jam, dan lokasi.

### 5.5 Program Belajar

Buat roadmap belajar dengan minimal 5 level:

1. **Level 1 — Literasi Digital dan Logika Dasar**

   * Etika digital.
   * Pengenalan algoritma.
   * Flowchart.
   * Cara kerja website.

2. **Level 2 — HTML dan CSS Dasar**

   * Struktur HTML.
   * Styling CSS.
   * Layout sederhana.
   * Responsive design dasar.

3. **Level 3 — JavaScript Dasar**

   * Variabel.
   * Kondisi.
   * Perulangan.
   * Fungsi.
   * Manipulasi DOM sederhana.

4. **Level 4 — Mini Project Website**

   * Landing page.
   * Website profil.
   * Galeri kegiatan.
   * Form interaktif sederhana.

5. **Level 5 — Portofolio dan Presentasi Karya**

   * Dokumentasi proyek.
   * Dasar Git/GitHub.
   * Kolaborasi tim.
   * Presentasi karya.

### 5.6 Galeri Kegiatan

Buat section galeri dengan grid responsif.

Minimal tampilkan 6 item galeri contoh:

1. Suasana belajar coding.
2. Praktik HTML dan CSS.
3. Diskusi kelompok.
4. Presentasi karya siswa.
5. Mentoring bersama pembina/mentor.
6. Dokumentasi kegiatan Jumat.

Gunakan gambar placeholder dari CDN online yang relevan dengan tema education, coding, classroom, atau computer lab.

Pastikan setiap gambar memiliki:

* `alt` text.
* Caption.
* Lazy loading jika menggunakan `<img>`.

### 5.7 Karya Siswa

Buat section karya siswa dengan minimal 3 project card contoh:

1. Website Profil Siswa.
2. Landing Page Kegiatan Sekolah.
3. Kalkulator Sederhana JavaScript.
4. Galeri Digital Ekskul.
5. Mini Game Edukasi.

Setiap card berisi:

* Judul proyek.
* Deskripsi.
* Teknologi.
* Status: contoh/prototype/published.
* Tombol “Lihat Demo” atau “Detail Proyek”.

Jika belum ada karya nyata, beri label “Contoh target karya siswa”.

### 5.8 FAQ

Buat accordion atau daftar FAQ dengan minimal 6 pertanyaan:

1. Apakah harus sudah bisa coding?
2. Apakah wajib membawa laptop?
3. Kapan jadwal ekskul?
4. Apa saja yang dipelajari?
5. Apakah karya siswa akan dipublikasikan?
6. Bagaimana cara mendaftar?

### 5.9 Kontak dan Pendaftaran

Buat section CTA dengan tombol:

1. “Hubungi Pengelola”
2. “Daftar Ekskul”
3. “Lihat Jadwal”

Gunakan link placeholder yang mudah diganti:

```text
https://forms.gle/FORM_PENDAFTARAN_PLACEHOLDER
https://wa.me/628xxxxxxxxxx
mailto:info@sman2pangkalanbun.sch.id
```

Tambahkan catatan:

> Untuk informasi resmi, silakan hubungi pengelola ekskul atau pihak sekolah.

---

## 6. Desain UI/UX

Buat desain dengan karakter:

1. Modern.
2. Edukatif.
3. Ramah siswa.
4. Bersih dan profesional.
5. Mobile-first.
6. Memiliki nuansa teknologi dan kreativitas.
7. Tidak terlalu ramai.
8. Nyaman dibaca.

### 6.1 Warna

Gunakan palet warna berikut:

* Primary: biru teknologi, misalnya `#2563EB`.
* Secondary: kuning/emas, misalnya `#FBBF24`.
* Accent: cyan/toska, misalnya `#06B6D4`.
* Background: `#F8FAFC` atau putih.
* Text utama: `#0F172A`.
* Text sekunder: `#475569`.

Boleh menyesuaikan dengan identitas visual SMAN 2 Pangkalan Bun jika ada data warna resmi.

### 6.2 Tipografi

Gunakan Google Fonts CDN:

* Utama: `Inter`.
* Alternatif: `Plus Jakarta Sans` atau `Poppins`.

Tambahkan font di layout utama.

### 6.3 Komponen Visual

Gunakan komponen:

1. Sticky navbar.
2. Hero dengan gradient lembut.
3. Card dengan border radius modern.
4. Shadow halus.
5. Icon circle.
6. Timeline/roadmap program belajar.
7. Grid galeri responsif.
8. CTA besar di bagian bawah.
9. Footer informatif.

---

## 7. CDN Ikon dan Gambar

### 7.1 Bootstrap Icons CDN

Tambahkan di layout/head:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
```

Gunakan ikon berikut:

| Section | Icon                         |
| ------- | ---------------------------- |
| Coding  | `bi-code-slash`              |
| Jadwal  | `bi-calendar-event`          |
| Jam     | `bi-clock`                   |
| Lokasi  | `bi-geo-alt`                 |
| Mentor  | `bi-person-badge`            |
| Belajar | `bi-mortarboard`             |
| Ide     | `bi-lightbulb`               |
| Website | `bi-window`                  |
| Galeri  | `bi-images`                  |
| Video   | `bi-play-circle`             |
| Karya   | `bi-stars`                   |
| Kontak  | `bi-whatsapp`, `bi-envelope` |

### 7.2 Gambar CDN

Gunakan gambar dari sumber online yang aman dan mudah diganti, misalnya:

1. Unsplash source image bertema coding/classroom.
2. unDraw illustration.
3. Storyset illustration jika atribusi disiapkan.

Buat data gambar di `src/data/gallery.ts`, bukan hardcode langsung di banyak komponen.

Contoh struktur data:

```ts
export const galleryItems = [
  {
    title: 'Belajar Coding Bersama',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Siswa belajar coding menggunakan laptop',
    caption: 'Kegiatan belajar coding dan diskusi teknologi.'
  }
];
```

Pastikan semua gambar memiliki `alt` text.

---

## 8. Konten Default yang Harus Ada

### 8.1 Hero

Judul:

```text
Ekskul Coding SMAN 2 Pangkalan Bun
```

Subjudul:

```text
Belajar coding, membuat website, membangun karya digital, dan melatih pola pikir kreatif sejak SMA.
```

CTA:

```text
Lihat Jadwal
Daftar / Hubungi Pengelola
```

### 8.2 Manfaat

Tampilkan minimal 6 manfaat:

1. Belajar dasar coding dari nol.
2. Melatih logika dan problem solving.
3. Membuat website dan aplikasi sederhana.
4. Membangun portofolio digital.
5. Belajar kolaborasi dan presentasi karya.
6. Menggunakan teknologi secara positif dan produktif.

### 8.3 Visi

```text
Menjadi wadah pembelajaran teknologi yang membentuk siswa SMAN 2 Pangkalan Bun menjadi generasi kreatif, logis, kolaboratif, dan siap menghadapi tantangan era digital.
```

### 8.4 Misi

1. Mengenalkan dasar-dasar coding dan teknologi web kepada siswa.
2. Melatih kemampuan berpikir logis, sistematis, dan kreatif.
3. Membimbing siswa membuat karya digital sederhana.
4. Mendorong budaya kolaborasi, dokumentasi, dan presentasi karya.
5. Mengarahkan penggunaan teknologi untuk kegiatan positif dan bermanfaat.

---

## 9. SEO dan Metadata

Tambahkan SEO dasar pada layout:

1. Meta title.
2. Meta description.
3. Open Graph title.
4. Open Graph description.
5. Open Graph image.
6. Twitter card.
7. Canonical URL placeholder.
8. Favicon.
9. Robots.txt.
10. Sitemap.

Contoh meta title:

```text
Ekskul Coding SMAN 2 Pangkalan Bun — Belajar Coding dan Karya Digital
```

Contoh meta description:

```text
Website informasi Ekstrakurikuler Coding SMAN 2 Pangkalan Bun. Belajar dasar pemrograman, membuat website, membangun karya digital, dan mengikuti kegiatan setiap Jumat pukul 13.30–15.00 WIB.
```

Tambahkan JSON-LD sederhana untuk `EducationalOrganization` atau `Organization` jika memungkinkan.

---

## 10. Accessibility

Pastikan website memenuhi aksesibilitas dasar:

1. Gunakan semantic HTML.
2. Hanya satu `h1` utama per halaman.
3. Gunakan urutan heading yang benar.
4. Semua gambar punya `alt`.
5. Kontras warna cukup.
6. Tombol dan link dapat diakses dengan keyboard.
7. Tambahkan `aria-label` jika diperlukan.
8. Jangan menyampaikan informasi hanya dengan warna.
9. Hindari animasi berlebihan.
10. Respect `prefers-reduced-motion`.

---

## 11. Performa

Target performa:

1. Lighthouse Performance minimal 90 untuk halaman utama jika memungkinkan.
2. Minimalkan JavaScript client-side.
3. Gunakan CSS yang efisien.
4. Lazy load gambar galeri.
5. Gunakan responsive images jika memakai gambar lokal.
6. Hindari library berat.
7. Optimalkan font loading.
8. Pastikan CLS rendah.
9. Pastikan halaman tetap cepat pada jaringan seluler.

---

## 12. Keamanan dan Privasi

Terapkan prinsip berikut:

1. Jangan menyimpan data sensitif di frontend.
2. Jangan menampilkan nomor HP pribadi tanpa persetujuan.
3. Gunakan kontak resmi atau placeholder.
4. Link eksternal gunakan `target="_blank"` dan `rel="noopener noreferrer"`.
5. Tidak menampilkan data pribadi siswa secara berlebihan.
6. Foto siswa harus diasumsikan memerlukan izin sekolah/orang tua/wali sebelum publikasi.
7. Jika ada form pendaftaran, gunakan link Google Form dan jelaskan tujuan pengumpulan data.
8. Hindari dependency yang tidak diperlukan.

---

## 13. Responsive Breakpoints

Pastikan desain baik pada:

1. Mobile kecil: 360px.
2. Mobile besar: 414px.
3. Tablet: 768px.
4. Laptop: 1024px.
5. Desktop: 1280px ke atas.

Navbar harus berubah menjadi mobile menu/hamburger pada layar kecil.

---

## 14. Acceptance Criteria

Website dianggap selesai jika memenuhi semua poin berikut:

1. Project Astro berhasil dibuat dan dapat dijalankan dengan `npm run dev`.
2. Build berhasil dengan `npm run build` tanpa error.
3. Halaman utama menampilkan semua section wajib.
4. Jadwal **Jumat 13.30–15.00 WIB** tampil jelas.
5. Ada profil ekskul, visi, misi, dan manfaat.
6. Ada minimal 5 program belajar.
7. Ada minimal 5 profil pengelola/mentor atau placeholder profesional.
8. Ada minimal 6 item galeri.
9. Ada minimal 3 project/karya siswa contoh.
10. Ada minimal 6 FAQ.
11. Ada tombol pendaftaran/kontak.
12. Website responsif di mobile dan desktop.
13. Semua gambar memiliki `alt` text.
14. Semua link eksternal aman.
15. SEO metadata tersedia.
16. Sitemap dan robots.txt tersedia.
17. Tidak ada error console yang kritis.
18. README berisi cara install, menjalankan, build, dan deploy.

---

## 15. Langkah Kerja yang Harus Dilakukan

Kerjakan secara bertahap dan atomik:

### Step 1 — Inisialisasi Project

1. Buat project Astro baru.
2. Aktifkan TypeScript.
3. Tambahkan Tailwind CSS jika digunakan.
4. Tambahkan sitemap integration.
5. Siapkan struktur folder.

### Step 2 — Setup Layout dan Global Style

1. Buat `BaseLayout.astro`.
2. Tambahkan Google Fonts.
3. Tambahkan Bootstrap Icons CDN.
4. Tambahkan metadata SEO default.
5. Buat `global.css`.

### Step 3 — Buat Data Terstruktur

Buat file data:

1. `site.ts`
2. `benefits.ts`
3. `programs.ts`
4. `mentors.ts`
5. `gallery.ts`
6. `projects.ts`
7. `faq.ts`

### Step 4 — Buat Komponen Utama

Buat komponen:

1. Navbar.
2. Footer.
3. SectionHeader.
4. HeroSection.
5. ProfileSection.
6. BenefitsSection.
7. ScheduleSection.
8. ProgramSection.
9. MentorSection.
10. GallerySection.
11. StudentProjectsSection.
12. FaqSection.
13. ContactSection.

### Step 5 — Buat Halaman

Buat halaman:

1. `index.astro`.
2. `profil.astro`.
3. `program-belajar.astro`.
4. `pengelola-mentor.astro`.
5. `jadwal.astro`.
6. `galeri.astro`.
7. `karya-siswa.astro`.
8. `kontak.astro`.

Jika waktu terbatas, prioritaskan `index.astro` lengkap terlebih dahulu.

### Step 6 — Optimasi

1. Periksa responsive layout.
2. Periksa Lighthouse.
3. Periksa accessibility.
4. Periksa SEO.
5. Periksa build.
6. Periksa link eksternal.

### Step 7 — Dokumentasi

Buat `README.md` berisi:

1. Deskripsi project.
2. Stack teknologi.
3. Cara install.
4. Cara menjalankan development server.
5. Cara build.
6. Cara preview.
7. Cara deploy.
8. Struktur folder.
9. Cara mengganti data mentor, galeri, jadwal, dan karya siswa.

---

## 16. Contoh Command yang Diharapkan

Gunakan npm kecuali ada alasan lain.

```bash
npm create astro@latest ekskul-coding-sman2pb
cd ekskul-coding-sman2pb
npm install
npx astro add sitemap
npm run dev
npm run build
npm run preview
```

Jika memakai Tailwind:

```bash
npx astro add tailwind
```

Pastikan semua dependency tercatat di `package.json`.

---

## 17. Catatan Deployment

Siapkan project agar mudah deploy ke Cloudflare.

Untuk static site biasa, gunakan output static.

Pastikan:

1. Build command: `npm run build`.
2. Output directory: `dist`.
3. Node version ditulis di README jika diperlukan.
4. Environment variable belum diperlukan untuk MVP.
5. Jika nanti memakai SSR atau adapter Cloudflare, pisahkan sebagai fase berikutnya.

---

## 18. Batasan MVP

Jangan membangun fitur berikut pada MVP kecuali diminta setelah versi awal selesai:

1. Login admin.
2. Database.
3. Presensi siswa.
4. Penilaian tugas.
5. Upload file dari dashboard.
6. CMS penuh.
7. Forum diskusi.
8. Sertifikat otomatis.

Tetapi desain struktur data dan komponen harus mudah dikembangkan ke fitur tersebut.

---

## 19. Output Akhir yang Harus Diberikan

Berikan hasil berupa:

1. Source code Astro lengkap.
2. Struktur folder rapi.
3. Komponen modular.
4. Data konten terpisah di folder `src/data`.
5. README lengkap.
6. Screenshot atau ringkasan halaman yang dibuat jika memungkinkan.
7. Catatan TODO untuk mengganti data placeholder menjadi data resmi sekolah.

---

## 20. Kualitas Kode

Pastikan kode:

1. Bersih.
2. Konsisten.
3. Mudah dibaca.
4. Menggunakan nama file dan variabel yang jelas.
5. Tidak hardcode konten berulang jika bisa masuk ke data file.
6. Tidak memakai dependency berlebihan.
7. Aman untuk website sekolah.
8. Mudah dikembangkan menjadi CMS.
9. Mematuhi prinsip accessibility dan SEO.
10. Lulus build.

---

## 21. Checklist Final untuk Developer

Sebelum menyerahkan hasil, cek:

* [ ] `npm install` berhasil.
* [ ] `npm run dev` berhasil.
* [ ] `npm run build` berhasil.
* [ ] `npm run preview` berhasil.
* [ ] Tidak ada error TypeScript.
* [ ] Tidak ada console error kritis.
* [ ] Navbar responsif.
* [ ] Semua section tampil.
* [ ] Jadwal Jumat 13.30–15.00 WIB tampil jelas.
* [ ] Data mentor bisa diganti dari `src/data/mentors.ts`.
* [ ] Data galeri bisa diganti dari `src/data/gallery.ts`.
* [ ] Data karya siswa bisa diganti dari `src/data/projects.ts`.
* [ ] Semua gambar punya alt text.
* [ ] Metadata SEO tersedia.
* [ ] Robots.txt tersedia.
* [ ] Sitemap tersedia.
* [ ] README lengkap.

---

## 22. Instruksi Tambahan

Gunakan bahasa Indonesia pada konten website.

Gunakan tone website yang:

1. Edukatif.
2. Ramah siswa.
3. Profesional.
4. Inspiratif.
5. Tidak berlebihan.

Jangan gunakan klaim yang tidak bisa diverifikasi, misalnya “ekskul terbaik se-Indonesia”. Gunakan klaim yang aman, seperti “wadah belajar coding”, “mendorong kreativitas digital”, dan “membangun portofolio karya siswa”.

Untuk foto siswa, gunakan placeholder terlebih dahulu sampai ada izin publikasi resmi dari sekolah.

Buat hasil website terlihat siap demo meskipun data resmi belum lengkap.

---

## 23. Ringkasan Output yang Diinginkan

Bangun website Astro yang modern, ringan, responsif, dan SEO-friendly untuk **Ekskul Coding SMAN 2 Pangkalan Bun** dengan isi utama:

* Profil ekskul.
* Visi dan misi.
* Manfaat.
* Jadwal Jumat 13.30–15.00 WIB.
* Program belajar coding.
* Pengelola dan mentor.
* Galeri kegiatan.
* Karya siswa.
* FAQ.
* Kontak/pendaftaran.

Website harus memakai komponen Astro modular, data TypeScript terpisah, ikon CDN, gambar CDN, metadata SEO, sitemap, robots.txt, dan README lengkap.
