import { cookieStorage } from '@/lib/utils';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ChildData {
  id?: number;
  user_id?: number;
  nama_anak?: string;
  tanggal_lahir?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DiagnosaData {
  id?: number;
  child_id?: number | string;
  cf_result?: number | string;
  cf_result_percentage?: number | string;
  created_at?: string;
}

export interface DetailDiagnosaData {
  nama_gejala?: string;
  jawaban?: string;
  cf_pakar?: number;
  cf_user?: number;
  cf_combined?: number;
}

export type ChildState = {
  child?: ChildData | null;
  diagnosa?: DiagnosaData | null;
  detailDiagnosa?: DetailDiagnosaData[] | null;

  setChild: (val: ChildData) => void;
  setDiagnosa: (val: DiagnosaData) => void;
  setDetailDiagnosa: (val: DetailDiagnosaData[]) => void;
  clearChild: () => void;
  clearDiagnosa: () => void;
  clearDetailDiagnosa: () => void;
};

const useRiwayatPeriksa = create<ChildState>((set) => ({
  child: null,
  diagnosa: null,
  detailDiagnosa: null,

  setChild: (val) => set(() => ({ child: val })),
  setDiagnosa: (val) => set(() => ({ diagnosa: val })),
  setDetailDiagnosa: (val) => set(() => ({ detailDiagnosa: val })),
  clearChild: () => set(() => ({ child: null })),
  clearDiagnosa: () => set(() => ({ diagnosa: null })),
  clearDetailDiagnosa: () => set(() => ({ detailDiagnosa: null })),
}));

export default useRiwayatPeriksa;
