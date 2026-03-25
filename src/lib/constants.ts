export const APP_CONFIG = {
  name: "PinolApp",
  version: "1.0.0",
  deliveryFee: 30,
  minOrderAmount: 100,
  freeDeliveryAmount: 500,
  contactPhone: "+505 2255-5555",
  contactEmail: "info@pinolapp.com",
};

export const ORDER_STATUS = {
  pending: { label: "Pendiente", color: "#F59E0B", icon: "time" },
  confirmed: { label: "Confirmado", color: "#10B981", icon: "checkmark-circle" },
  preparing: { label: "Preparando", color: "#3B82F6", icon: "restaurant" },
  delivering: { label: "En camino", color: "#00A651", icon: "bicycle" },
  delivered: { label: "Entregado", color: "#6B7280", icon: "home" },
  cancelled: { label: "Cancelado", color: "#EF4444", icon: "close-circle" },
};

export const PAYMENT_METHODS = [
  { id: "cash", name: "Efectivo", icon: "cash-outline" },
  { id: "card", name: "Tarjeta", icon: "card-outline" },
  { id: "transfer", name: "Transferencia", icon: "swap-horizontal-outline" },
];

export const DELIVERY_TIMES = {
  min: 25,
  max: 45,
};

export const SUPPORTED_LOCATIONS = [
  "Managua",
  "Masaya",
  "Granada",
  "León",
  "Matagalpa",
  "Estelí",
];
