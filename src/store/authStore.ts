import { create } from 'zustand'

interface AuthState {
  user: { id: string; name: string; phone: string } | null
  isLoading: boolean
  login: (phone: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: async (phone, password) => {
    set({ isLoading: true })
    // Mock – en producción usar Supabase auth
    await new Promise((r) => setTimeout(r, 1200))
    if (phone === '12345678' && password === '1234') {
      set({
        user: {
          id: 'user-001',
          name: 'Yader',
          phone: '+505 1234-5678',
        },
        isLoading: false,
      })
    } else {
      set({ isLoading: false })
      throw new Error('Credenciales inválidas')
    }
  },

  logout: () => {
    set({ user: null })
  },
}))
