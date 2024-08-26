import { create } from "zustand"

interface Store {
    userName: string
    roleUSer: string
    addName: (name: string) => void
    addRole: (role: string) => void
}


export const useStoreApp = create<Store>((set) => ({
    userName: "",
    roleUSer: "",
    addName(name) {
        set({ userName: name })
    },
    addRole(role) {
        set({ roleUSer: role })
    },

}))