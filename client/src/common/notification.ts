import { Dispatch, SetStateAction } from "react";
let count = 1;

export enum NotificationType {
  success,
  warning,
  error,
}

export interface NotificationItem {
  id: number;
  type: NotificationType;
  text: string;
}

export interface NotificationItemNoId {
  type: NotificationType;
  text: string;
}

export const notificationColor = (type: NotificationType): string => {
  switch (type) {
    case NotificationType.success:
      return "#00bc8c";
    case NotificationType.warning:
      return "#f39c11";
    default:
      return "#e84c3d";
  }
};

export const addItem = (
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>,
  item: NotificationItemNoId
) => {
  count++;
  setNotification((notifications): NotificationItem[] => [
    ...notifications,
    { id: count, type: item.type, text: item.text },
  ]);
  setTimeout(() => {
    removeItem(count, setNotification);
  }, 10000);
};

export const removeItem = (
  id: number,
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>
) => {
  setNotification((notification) =>
    notification.filter((item) => item.id !== id)
  );
};
