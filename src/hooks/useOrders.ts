import { useOrderStore, Order } from "@/src/store/orderStore";
import { useCallback } from "react";

export const useOrders = () => {
  const activeOrders = useOrderStore((state) => state.activeOrders);
  const completedOrders = useOrderStore((state) => state.completedOrders);
  const loading = useOrderStore((state) => state.loading);
  const createOrder = useOrderStore((state) => state.createOrder);
  const updateOrderStatus = useOrderStore((state) => state.updateOrderStatus);
  const getOrderById = useOrderStore((state) => state.getOrderById);
  const cancelOrder = useOrderStore((state) => state.cancelOrder);

  const getActiveOrder = useCallback(() => {
    return activeOrders[0] || null;
  }, [activeOrders]);

  const hasActiveOrder = useCallback(() => {
    return activeOrders.length > 0;
  }, [activeOrders]);

  return {
    activeOrders,
    completedOrders,
    loading,
    createOrder,
    updateOrderStatus,
    getOrderById,
    cancelOrder,
    getActiveOrder,
    hasActiveOrder,
  };
};
