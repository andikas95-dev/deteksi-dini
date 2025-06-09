import { cookieStorage } from '@/lib/utils';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ChildData, DetailDiagnosaData, DiagnosaData } from './useRiwayatPeriksa';


export type ChildState = {
  child: ChildData | null;
  diagnosa: DiagnosaData | null;
  detailDiagnosa: DetailDiagnosaData[] | null;

  setChild: (val: ChildData) => void;
  setDiagnosa: (val: DiagnosaData) => void;
  setDetailDiagnosa: (val: DetailDiagnosaData[]) => void;
  clearChild: () => void;
  clearDiagnosa: () => void;
  clearDetailDiagnosa: () => void;
};

const useHasilPeriksa = create<ChildState>((set) => ({
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

export default useHasilPeriksa;
