export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'contoh' | 'prototype' | 'published';
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Website Profil Siswa',
    description: 'Website personal sederhana yang menampilkan profil, hobi, dan cita-cita siswa.',
    technologies: ['HTML', 'CSS'],
    status: 'contoh',
    demoUrl: '#',
  },
  {
    title: 'Landing Page Kegiatan Sekolah',
    description: 'Landing page modern untuk mempromosikan kegiatan sekolah dengan desain responsif.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'contoh',
    demoUrl: '#',
  },
  {
    title: 'Kalkulator Sederhana JavaScript',
    description: 'Aplikasi kalkulator interaktif dengan operasi matematika dasar.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'contoh',
    demoUrl: '#',
  },
  {
    title: 'Galeri Digital Ekskul',
    description: 'Website galeri foto kegiatan ekskul dengan layout grid responsif.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'contoh',
    demoUrl: '#',
  },
  {
    title: 'Mini Game Edukasi',
    description: 'Game sederhana untuk melatih logika dan kecepatan berpikir siswa.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'contoh',
    demoUrl: '#',
  },
];
