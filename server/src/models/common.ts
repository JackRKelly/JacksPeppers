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
