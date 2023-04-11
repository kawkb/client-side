import zustand from "zustand";
import { create } from "zustand";

interface BellStore {
    bellClose: boolean;
    bellName: string;
    bellNbr: number;
    setBellClose: (check: boolean) => void;
    setBellName: (name: string) => void;
    setBellNbr: (nbr: number) => void;
}

export const useBell = create<BellStore>((set) => ({
    bellClose: true,
    bellName: "",
    bellNbr: 5,
    setBellClose: (check: boolean) => set((state) => ({bellClose: check})),
    setBellName: (name: string) => set((state) => ({bellName: name})),
    setBellNbr: (nbr: number) => set((state) => ({bellNbr: nbr})),
}));