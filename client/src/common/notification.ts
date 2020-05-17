import { Dispatch, SetStateAction } from "react";
let count = 1;

export enum NotificationType {
  success = "success",
  warning = "warning",
  error = "error",
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
