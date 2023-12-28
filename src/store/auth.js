import { create } from "zustand";
import { persist } from "zustand/middleware"
  
export const useAuthStore = create(persist((set) => ({
        token: "",
        isAuth: false,
        setToken: (token) => set((state) => ({
            token,
            isAuth: true
        })),

        logout: () => set(state => ({
            token: "",
            isAuth: false
        }))
    }), {
        name: 'Auth'
    }
));