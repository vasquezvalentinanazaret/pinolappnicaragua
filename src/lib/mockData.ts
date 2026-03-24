import { Restaurant, MenuItem, Order, Driver } from "@/src/types";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "El Buen Sabor",
    rating: 4.5,
    deliveryTime: 25,
    deliveryFee: 550,
    address: "De la Rotonda 2c al sur, Managua",
    image: "https://via.placeholder.com/400x200",
    category: "Típico",
  },
  {
    id: 2,
    name: "Súper Típico",
    rating: 4.3,
    deliveryTime: 25,
    deliveryFee: 550,
    address: "Frente al Parque Central, Masaya",
    image: "https://via.placeholder.com/400x200",
    category: "Típico",
  },
  {
    id: 3,
    name: "Pizza House",
    rating: 4.7,
    deliveryTime: 30,
    deliveryFee: 600,
    address: "Centro Comercial Metrocentro",
    image: "https://via.placeholder.com/400x200",
    category: "Pizza",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Combo Típico",
    description: "Gallo pinto, queso frito, tajadas, ensalada y café",
    price: 560,
    restaurant: "El Buen Sabor",
    restaurantId: 1,
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 2,
    name: "Bajo",
    description: "Carne asada, gallo pinto, plátano maduro y ensalada",
    price: 180,
    restaurant: "El Buen Sabor",
    restaurantId: 1,
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 3,
    name: "Nacatamal",
    description: "Nacatamal nica con pan y café",
    price: 120,
    restaurant: "El Buen Sabor",
    restaurantId: 1,
    image: "https://via.placeholder.com/100x100",
  },
  {
    id: 4,
    name: "Pizza Margarita",
    description: "Salsa de tomate, mozzarella y albahaca",
    price: 350,
    restaurant: "Pizza House",
    restaurantId: 3,
    image: "https://via.placeholder.com/100x100",
  },
];

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Joel M.",
    phone: "+505 8888-9999",
    rating: 4.8,
    photo: "https://via.placeholder.com/50x50",
  },
];

export const getRestaurantById = (id: number): Restaurant | undefined => {
  return restaurants.find((r) => r.id === id);
};

export const getMenuItemsByRestaurant = (restaurantId: number): MenuItem[] => {
  return menuItems.filter((item) => item.restaurantId === restaurantId);
};

export const getOrderById = (id: number): Order | null => {
  return {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    createdAt: new Date().toISOString(),
    address: "De la Iglesia San Juan 2c al norte",
    driver: drivers[0],
  };
};

export const orders: Order[] = [
  {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    createdAt: new Date().toISOString(),
    address: "De la Iglesia San Juan 2c al norte",
    driver: drivers[0],
  },
];
