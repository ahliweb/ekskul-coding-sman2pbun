export interface GalleryItem {
  title: string;
  image: string;
  alt: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: 'Belajar Coding Bersama',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    alt: 'Siswa belajar coding menggunakan laptop',
    caption: 'Kegiatan belajar coding dan diskusi teknologi.',
  },
  {
    title: 'Praktik HTML dan CSS',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    alt: 'Layar komputer menampilkan kode HTML dan CSS',
    caption: 'Siswa praktik membuat halaman web dengan HTML dan CSS.',
  },
  {
    title: 'Diskusi Kelompok',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    alt: 'Kelompok siswa berdiskusi tentang proyek coding',
    caption: 'Diskusi kelompok untuk menyelesaikan proyek bersama.',
  },
  {
    title: 'Presentasi Karya Siswa',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    alt: 'Siswa mempresentasikan hasil karya di depan kelas',
    caption: 'Siswa mempresentasikan website yang telah dibuat.',
  },
  {
    title: 'Mentoring Bersama Pembina',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    alt: 'Pembina mendampingi siswa belajar coding',
    caption: 'Pembina dan mentor mendampingi siswa dalam belajar.',
  },
  {
    title: 'Kegiatan Jumat Coding',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    alt: 'Suasana kegiatan ekskul coding di hari Jumat',
    caption: 'Kegiatan ekskul coding setiap Jumat pukul 13.30–15.00 WIB.',
  },
];
