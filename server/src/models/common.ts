export enum NotificationType {
  success,
  warning,
  error,
}

export interface CartItem {
  id: string | boolean;
  price: number;
  quantity: number;
}

export interface CartItemFinal {
  id: string;
  price: number;
  quantity: number;
  name: string;
}

export interface ProductResponse {
  price: number;
  name: string;
}
