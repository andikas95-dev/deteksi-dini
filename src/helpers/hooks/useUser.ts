import { cookieStorage } from "@/lib/utils";
import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  user: {} | null;
  setUser: (val: any) => void;
  // token: string | null;
  // setToken: (val: string) => void;
  clearUser: () => void;
};

const useUser = create<UserState>(
  persist(
    (set) => ({
      user: null,
      setUser: (val) => set(() => ({ user: val })),
      // setUser: (val) => set(() => ({ user: encryptData(JSON.stringify(val)) })),
      clearUser: () => set(() => ({ user: null })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => cookieStorage),
    }
  ) as StateCreator<UserState, [], [], UserState>
);

export default useUser;