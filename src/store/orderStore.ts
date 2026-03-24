import { create } from "zustand";
import { Order } from "@/src/types";

interface CreateOrderData {
  items: any[];
  total: number;
  address: string;
  instructions: string;
  restaurantId: number;
  restaurant: string;
}

interface OrderState {
  activeOrders: Order[];
  completedOrders: Order[];
  loading: boolean;
  createOrder: (data: CreateOrderData) => Promise<Order>;
  getOrderById: (id: number) => Order | undefined;
  updateOrderStatus: (id: number, status: Order["status"]) => void;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  activeOrders: [],
  completedOrders: [],
  loading: false,

  createOrder: async (data) => {
    set({ loading: true });
    try {
      const newOrder: Order = {
        id: Date.now(),
        restaurant: data.restaurant,
        items: data.items.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: data.total,
        status: "pending",
        createdAt: new Date().toISOString(),
        address: data.address,
        instructions: data.instructions,
      };

      set((state) => ({
        activeOrders: [newOrder, ...state.activeOrders],
        loading: false,
      }));

      return newOrder;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  getOrderById: (id) => {
    const { activeOrders, completedOrders } = get();
    return [...activeOrders, ...completedOrders].find((o) => o.id === id);
  },

  updateOrderStatus: (id, status) => {
    set((state) => {
      const orderIndex = state.activeOrders.findIndex((o) => o.id === id);
      if (orderIndex === -1) return state;

      const updatedOrder = { ...state.activeOrders[orderIndex], status };
      const newActiveOrders = [...state.activeOrders];
      newActiveOrders[orderIndex] = updatedOrder;

      if (status === "delivered") {
        return {
          activeOrders: newActiveOrders.filter((o) => o.id !== id),
          completedOrders: [updatedOrder, ...state.completedOrders],
        };
      }

      return { activeOrders: newActiveOrders };
    });
  },
}));
