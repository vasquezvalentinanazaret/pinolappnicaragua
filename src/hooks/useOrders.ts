import { create } from 'zustand';
import { Order } from '@/types';

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
}

export const useOrdersStore = create<OrderState>((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  updateOrderStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((o) => (o.id === id ? { ...o, status } : o)),
    })),
}));
