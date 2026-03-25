import { useCartStore } from "@/src/store/cartStore";

export const useCart = () => {
  const items = useCartStore((state) => state.items);
  const restaurantId = useCartStore((state) => state.restaurantId);
  const restaurantName = useCartStore((state) => state.restaurantName);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalQuantity = useCartStore((state) => state.getTotalQuantity);
  const hasDifferentRestaurant = useCartStore((state) => state.hasDifferentRestaurant);

  const subtotal = getTotalPrice();
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;
  const isFreeDelivery = subtotal >= 500;
  const finalDeliveryFee = isFreeDelivery ? 0 : deliveryFee;
  const finalTotal = subtotal + finalDeliveryFee;

  return {
    items,
    restaurantId,
    restaurantName,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee: finalDeliveryFee,
    total: finalTotal,
    itemCount: getTotalQuantity(),
    isEmpty: items.length === 0,
    hasDifferentRestaurant,
  };
};
