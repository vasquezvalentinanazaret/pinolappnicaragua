export interface Restaurant {
  id: string
  name: string
  rating: number
  time: string
  category: string
  image?: string
}

export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
  image?: string
}

export type OrderStatus = 'pending' | 'preparing' | 'on_way' | 'delivered' | 'cancelled'

export interface Order {
  id: string
  restaurant: Restaurant
  items: { item: MenuItem; quantity: number }[]
  total: number
  status: OrderStatus
  createdAt: string
  estimatedDelivery?: string
}
