const generateRandomName = () => {
  const names = ['Ayu', 'Budi', 'Citra', 'Dewi', 'Eka', 'Fajar', 'Gita', 'Hadi', 'Indra', 'Joko'];
  return names[Math.floor(Math.random() * names.length)];
};

export const dummyAnak = [
  {
    user_id: 1,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
  },
  {
    user_id: 1,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
  },
  {
    user_id: 1,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
  },
  {
    user_id: 1,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
  },
  {
    user_id: 1,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
  },
  {
    user_id: 2,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
  },
  {
    user_id: 2,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 4)),
  },
  {
    user_id: 2,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
  },
  {
    user_id: 2,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
  },
  {
    user_id: 2,
    nama_anak: generateRandomName(),
    tanggal_lahir: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    updatedAt: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
  },
];
