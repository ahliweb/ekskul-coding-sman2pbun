export interface Program {
  level: number;
  title: string;
  topics: string[];
}

export const programs: Program[] = [
  {
    level: 1,
    title: 'Literasi Digital dan Logika Dasar',
    topics: [
      'Etika digital',
      'Pengenalan algoritma',
      'Flowchart',
      'Cara kerja website',
    ],
  },
  {
    level: 2,
    title: 'HTML dan CSS Dasar',
    topics: [
      'Struktur HTML',
      'Styling CSS',
      'Layout sederhana',
      'Responsive design dasar',
    ],
  },
  {
    level: 3,
    title: 'JavaScript Dasar',
    topics: [
      'Variabel',
      'Kondisi',
      'Perulangan',
      'Fungsi',
      'Manipulasi DOM sederhana',
    ],
  },
  {
    level: 4,
    title: 'Mini Project Website',
    topics: [
      'Landing page',
      'Website profil',
      'Galeri kegiatan',
      'Form interaktif sederhana',
    ],
  },
  {
    level: 5,
    title: 'Portofolio dan Presentasi Karya',
    topics: [
      'Dokumentasi proyek',
      'Dasar Git/GitHub',
      'Kolaborasi tim',
      'Presentasi karya',
    ],
  },
];
