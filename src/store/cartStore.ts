import { create } from 'zustand'
import { MenuItem } from '@/types'

type CartItem = {
  item: MenuItem
  quantity: number
}

interface CartState {
  items: CartItem[]
  restaurantId?: string
  addItem: (item: MenuItem) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
  total: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  restaurantId: undefined,

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.item.id === item.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return { items: [...state.items, { item, quantity: 1 }] }
    }),

  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((i) => i.item.id !== itemId),
    })),

  clearCart: () => set({ items: [], restaurantId: undefined }),

  total: () => {
    return get().items.reduce((sum, i) => sum + i.item.price * i.quantity, 0)
  },
}))
