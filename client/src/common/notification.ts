import { Dispatch, SetStateAction } from "react";

enum NotificationTypes {
  success = "success",
  warning = "warning",
  error = "error",
}

interface NotificationItem {
  id: number;
  type: NotificationTypes;
  text: string;
}

export const addItem = (
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>,
  item: NotificationItem
) => {
  setNotification((notifications): NotificationItem[] => [
    ...notifications,
    item,
  ]);
};

export const removeItem = (
  id: number,
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>
) => {
  setNotification((notification) =>
    notification.filter((item) => item.id !== id)
  );
};
