import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"
import { IUser, RoleUser } from "@/pages/public/auth/domain/user/user.interface";
type State = {
    user?: IUser
    role: RoleUser
    login: (user: IUser) => void
    setRole:(rol:RoleUser) => void
    logout: () => void
}
export const useAuthStore = create<State>()(
    devtools(
        persist(
            
            (set) => ({
                role: RoleUser.USER,
                login(user) {
                    set({ user })
                },
                setRole(rol) {
                    set({ role: rol })                   
                },
                logout() {
                    set((state) => ({ ...state, user: undefined }), true)
                }
            }),
            {
                name: "authStore"
            }
        )
    )
)