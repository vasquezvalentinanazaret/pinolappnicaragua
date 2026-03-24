export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  deliveryTime: number;
  deliveryFee: number;
  address: string;
  image: string;
  category: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurant: string;
  restaurantId: number;
  image: string;
}

export interface Order {
  id: number;
  restaurant: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  status: "pending" | "confirmed" | "preparing" | "delivering" | "delivered";
  createdAt: string;
  address: string;
  instructions?: string;
  driver?: Driver;
}

export interface Driver {
  id: number;
  name: string;
  phone: string;
  rating: number;
  photo: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  restaurant: string;
  restaurantId: number;
}
