import zustand from "zustand";
import { create } from "zustand";

interface BellStore {
    bellClose: boolean;
    bellName: string;
    setBellClose: (check: boolean) => void;
    setBellName: (name: string) => void;
}

export const useBell = create<BellStore>((set) => ({
    bellClose: true,
    bellName: "BELL",
    setBellClose: (check: boolean) => set((state) => ({bellClose: check})),
    setBellName: (name: string) => set((state) => ({bellName: name})),
}));