import { useState, useEffect } from "react";
import { useOrderStore } from "@/src/store/orderStore";
import { Order } from "@/src/types";

export const useOrders = () => {
  const [loading, setLoading] = useState(true);
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);
  const [completedOrders, setCompletedOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const active = useOrderStore.getState().activeOrders;
        const completed = useOrderStore.getState().completedOrders;
        setActiveOrders(active);
        setCompletedOrders(completed);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { activeOrders, completedOrders, loading };
};
