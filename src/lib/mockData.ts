export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  stars: string;
  deliveryTime: number;
  deliveryFee: number;
  minOrder: number;
  address: string;
  image: string;
  coverImage: string;
  category: string;
  description: string;
  isOpen: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurantId: number;
  restaurant: string;
  image?: string;
  category: string;
  isPopular?: boolean;
  isOffer?: boolean;
  offerPrice?: number;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  restaurantId: number;
  restaurantName: string;
  originalPrice: number;
  price: number;
  image: string;
  validUntil: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "El Buen Sabor",
    rating: 4.8,
    stars: "★★★★★",
    deliveryTime: 25,
    deliveryFee: 550,
    minOrder: 100,
    address: "De la Rotonda 2c al sur, Managua",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    category: "Típico Nicaragüense",
    description: "Comida típica nicaragüense con el mejor sabor de la tierra. Especialistas en gallo pinto, nacatamales y fritanga.",
    isOpen: true,
  },
  {
    id: 2,
    name: "Súper Típico",
    rating: 4.6,
    stars: "★★★★☆",
    deliveryTime: 25,
    deliveryFee: 550,
    minOrder: 100,
    address: "Frente al Parque Central, Masaya",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400",
    coverImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
    category: "Típico Nicaragüense",
    description: "Lo mejor de la gastronomía de Masaya. Nacatamales, indio viejo y más.",
    isOpen: true,
  },
  {
    id: 3,
    name: "Pizza House",
    rating: 4.7,
    stars: "★★★★☆",
    deliveryTime: 30,
    deliveryFee: 600,
    minOrder: 150,
    address: "Centro Comercial Metrocentro, Managua",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    coverImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    category: "Pizzas",
    description: "Las mejores pizzas artesanales de Nicaragua. Ingredientes frescos y masa delgada.",
    isOpen: true,
  },
];

export const menuItems: MenuItem[] = [
  // El Buen Sabor
  {
    id: 1,
    name: "Combo Típico",
    description: "Gallo pinto, queso frito, tajadas, ensalada y café",
    price: 560,
    restaurantId: 1,
    restaurant: "El Buen Sabor",
    category: "Combos",
    isPopular: true,
    isOffer: true,
    offerPrice: 300,
  },
  {
    id: 2,
    name: "Bajo",
    description: "Carne asada, gallo pinto, plátano maduro y ensalada",
    price: 180,
    restaurantId: 1,
    restaurant: "El Buen Sabor",
    category: "Platos Fuertes",
    isPopular: true,
  },
  {
    id: 3,
    name: "Nacatamal",
    description: "Nacatamal nica con pan y café",
    price: 120,
    restaurantId: 1,
    restaurant: "El Buen Sabor",
    category: "Típicos",
    isPopular: true,
  },
  {
    id: 4,
    name: "Gallo Pinto",
    description: "Con queso frito y tajadas",
    price: 150,
    restaurantId: 1,
    restaurant: "El Buen Sabor",
    category: "Desayunos",
  },
  {
    id: 5,
    name: "Indio Viejo",
    description: "Comida típica a base de carne desmenuzada",
    price: 200,
    restaurantId: 1,
    restaurant: "El Buen Sabor",
    category: "Típicos",
  },
  {
    id: 6,
    name: "Quesillo",
    description: "Queso, cebolla, vinagre y chile",
    price: 80,
    restaurantId: 1,
    restaurant: "El Buen Sabor",
    category: "Antojitos",
  },
  
  // Súper Típico
  {
    id: 7,
    name: "Gallo Pinto con Queso",
    description: "Gallo pinto, queso frito, tajadas y crema",
    price: 150,
    restaurantId: 2,
    restaurant: "Súper Típico",
    category: "Desayunos",
    isPopular: true,
  },
  {
    id: 8,
    name: "Indio Viejo",
    description: "Comida típica nicaragüense con tortilla",
    price: 200,
    restaurantId: 2,
    restaurant: "Súper Típico",
    category: "Típicos",
  },
  {
    id: 9,
    name: "Nacatamal",
    description: "Nacatamal con pan y café",
    price: 110,
    restaurantId: 2,
    restaurant: "Súper Típico",
    category: "Típicos",
    isPopular: true,
  },
  {
    id: 10,
    name: "Fritanga Mixta",
    description: "Chicharrón, carne asada, gallo pinto y ensalada",
    price: 250,
    restaurantId: 2,
    restaurant: "Súper Típico",
    category: "Platos Fuertes",
  },
  
  // Pizza House
  {
    id: 11,
    name: "Pizza Margarita",
    description: "Salsa de tomate, mozzarella y albahaca",
    price: 350,
    restaurantId: 3,
    restaurant: "Pizza House",
    category: "Pizzas",
    isPopular: true,
  },
  {
    id: 12,
    name: "Pizza Pepperoni",
    description: "Pepperoni, queso mozzarella y salsa de tomate",
    price: 450,
    restaurantId: 3,
    restaurant: "Pizza House",
    category: "Pizzas",
    isPopular: true,
  },
  {
    id: 13,
    name: "Pizza Hawaiana",
    description: "Jamón, piña, queso mozzarella",
    price: 420,
    restaurantId: 3,
    restaurant: "Pizza House",
    category: "Pizzas",
  },
  {
    id: 14,
    name: "Pizza Vegetariana",
    description: "Verduras frescas, champiñones, aceitunas",
    price: 400,
    restaurantId: 3,
    restaurant: "Pizza House",
    category: "Pizzas",
  },
];

export const offers: Offer[] = [
  {
    id: 1,
    title: "Combo Típico",
    description: "Gallo pinto, queso frito, tajadas, ensalada y café",
    restaurantId: 1,
    restaurantName: "El Buen Sabor",
    originalPrice: 560,
    price: 300,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
    validUntil: "2024-12-31",
  },
];

export const getRestaurantById = (id: number): Restaurant | undefined => {
  return restaurants.find(r => r.id === id);
};

export const getMenuItemsByRestaurant = (restaurantId: number): MenuItem[] => {
  return menuItems.filter(item => item.restaurantId === restaurantId);
};

export const getPopularItems = (restaurantId: number): MenuItem[] => {
  return menuItems.filter(item => item.restaurantId === restaurantId && item.isPopular);
};

export const getOffersByRestaurant = (restaurantId: number): Offer[] => {
  return offers.filter(offer => offer.restaurantId === restaurantId);
};
