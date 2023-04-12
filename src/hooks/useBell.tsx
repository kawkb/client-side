import zustand from "zustand";
import { create } from "zustand";

interface BellStore {
    bellClose: boolean;
    bellNbr: number;
    bellName: string;
    setBellClose: (check: boolean) => void;
    setBellName: (name: string) => void;
    setBellNbr: (nbr: number) => void;
}

export const useBell = create<BellStore>((set) => ({
    bellClose: true,
    bellNbr: 5,
    bellName: "Bell",
    setBellClose: (check: boolean) => set((state) => ({bellClose: check})),
    setBellName: (name: string) => set((state) => ({bellName: name})),
    setBellNbr: (nbr: number) => set((state) => ({bellNbr: nbr})),
}));