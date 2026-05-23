# Ekskul Coding SMAN 2 Pangkalan Bun

Website informasi modern untuk Ekstrakurikuler Coding SMAN 2 Pangkalan Bun, dibangun dengan Astro Framework.

## 🚀 Stack Teknologi

- **Astro** - Framework static site
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Bootstrap Icons** - Ikon CDN
- **Google Fonts (Inter)** - Tipografi

## 📦 Instalasi

```bash
npm install
```

## 🏃 Menjalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:4321`

## 🏗️ Build untuk Produksi

```bash
npm run build
```

Output akan berada di folder `dist/`

## 👀 Preview Build

```bash
npm run preview
```

## 🌐 Deploy

Website ini siap deploy ke:

- **Cloudflare Pages** - Hubungkan repository dan set build command `npm run build`, output `dist`
- **Netlify** - Deploy dari Git dengan build command `npm run build`, publish directory `dist`
- **Vercel** - Import project dan deploy otomatis
- **Static hosting lain** - Upload folder `dist/` ke hosting

## 📁 Struktur Folder

```
.
├── astro.config.mjs          # Konfigurasi Astro
├── package.json              # Dependencies
├── tsconfig.json             # Konfigurasi TypeScript
├── public/
│   ├── favicon.svg           # Favicon
│   ├── og-image.svg          # Open Graph image
│   └── robots.txt            # Robots.txt
├── src/
│   ├── components/           # Komponen Astro
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
│   │   └── ContactSection.astro
│   ├── data/                 # Data konten
│   │   ├── site.ts           # Info website
│   │   ├── benefits.ts       # Manfaat ekskul
│   │   ├── programs.ts       # Program belajar
│   │   ├── mentors.ts        # Profil mentor
│   │   ├── gallery.ts        # Galeri kegiatan
│   │   ├── projects.ts       # Karya siswa
│   │   └── faq.ts            # FAQ
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout utama dengan SEO
│   ├── pages/                # Halaman website
│   │   ├── index.astro
│   │   ├── profil.astro
│   │   ├── program-belajar.astro
│   │   ├── pengelola-mentor.astro
│   │   ├── jadwal.astro
│   │   ├── galeri.astro
│   │   ├── karya-siswa.astro
│   │   └── kontak.astro
│   └── styles/
│       └── global.css        # Global styles
└── README.md
```

## ✏️ Mengganti Data

### Mengganti Info Website

Edit `src/data/site.ts` untuk mengubah:
- Judul dan deskripsi website
- Jadwal kegiatan
- Link kontak (WhatsApp, email, form)

### Mengganti Mentor

Edit `src/data/mentors.ts`:
```ts
export const mentors: Mentor[] = [
  {
    name: 'Nama Lengkap',
    role: 'Jabatan',
    image: 'URL foto',
    bio: 'Deskripsi singkat',
  },
];
```

### Mengganti Galeri

Edit `src/data/gallery.ts`:
```ts
export const galleryItems: GalleryItem[] = [
  {
    title: 'Judul foto',
    image: 'URL foto',
    alt: 'Deskripsi untuk accessibility',
    caption: 'Keterangan foto',
  },
];
```

### Mengganti Karya Siswa

Edit `src/data/projects.ts`:
```ts
export const projects: Project[] = [
  {
    title: 'Nama proyek',
    description: 'Deskripsi',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'contoh' | 'prototype' | 'published',
    demoUrl: 'URL demo',
  },
];
```

### Mengganti FAQ

Edit `src/data/faq.ts`:
```ts
export const faqs: FAQ[] = [
  {
    question: 'Pertanyaan?',
    answer: 'Jawaban',
  },
];
```

## ✅ Checklist

- [x] `npm install` berhasil
- [x] `npm run dev` berhasil
- [x] `npm run build` berhasil
- [x] `npm run preview` berhasil
- [x] Tidak ada error TypeScript
- [x] Navbar responsif dengan mobile menu
- [x] Semua section tampil di homepage
- [x] Jadwal Jumat 13.30–15.00 WIB tampil jelas
- [x] Data mentor bisa diganti dari `src/data/mentors.ts`
- [x] Data galeri bisa diganti dari `src/data/gallery.ts`
- [x] Data karya siswa bisa diganti dari `src/data/projects.ts`
- [x] Semua gambar punya alt text
- [x] Metadata SEO tersedia
- [x] Robots.txt tersedia
- [x] Sitemap tersedia (via @astrojs/sitemap)
- [x] README lengkap

## 📝 TODO

- [ ] Ganti data placeholder mentor dengan nama asli
- [ ] Ganti foto placeholder dengan foto kegiatan asli
- [ ] Ganti link kontak WhatsApp dengan nomor resmi
- [ ] Ganti email dengan email sekolah resmi
- [ ] Ganti link form pendaftaran dengan Google Form asli
- [ ] Tambahkan foto karya siswa yang sudah dipublikasikan
- [ ] Setup custom domain jika diperlukan

## 📄 Lisensi

Website ini dibuat untuk keperluan Ekstrakurikuler Coding SMAN 2 Pangkalan Bun.
