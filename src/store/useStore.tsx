import { RoleUser } from "@/pages/public/auth/domain/user/user.interface"
import { create } from "zustand"

interface Store {
    userName: string
    roleUSer: RoleUser
    addName: (name: string) => void
    addRole: (role: string) => void
}


export const useStoreApp = create<Store>((set) => ({
    userName: "",
    roleUSer: RoleUser.USER,
    addName(name) {
        set({ userName: name })
    },
    addRole() {
        set({ roleUSer: RoleUser.ADMIN  })
    },

}))