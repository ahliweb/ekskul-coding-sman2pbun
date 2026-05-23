export interface Mentor {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export const mentors: Mentor[] = [
  {
    name: 'Pembina Ekskul Coding',
    role: 'Pembina',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: 'Guru yang bertanggung jawab membimbing dan mengawasi kegiatan ekskul coding.',
  },
  {
    name: 'Koordinator Kegiatan',
    role: 'Koordinator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Mengkoordinasikan jadwal, materi, dan kegiatan ekskul setiap minggunya.',
  },
  {
    name: 'Mentor Web Development',
    role: 'Mentor Coding',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Mengajarkan dasar-dasar web development dari HTML, CSS, hingga JavaScript.',
  },
  {
    name: 'Asisten Mentor Siswa',
    role: 'Asisten Mentor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Siswa senior yang membantu mentoring dan pendampingan peserta baru.',
  },
  {
    name: 'Tim Dokumentasi Digital',
    role: 'Dokumentasi',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Mendokumentasikan kegiatan ekskul untuk galeri dan portofolio.',
  },
];
