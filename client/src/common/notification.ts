import { Dispatch, SetStateAction } from "react";

enum NotificationTypes {
  success = "success",
  warning = "warning",
  error = "error",
}

interface NotificationItem {
  type: NotificationTypes;
  text: string;
}

export const addItem = (
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>,
  item: NotificationItem
) => {
  setNotification((notifications) => [...notifications, item]);
};

export const removeItem = (
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>,
  index: number
) => {
  setNotification((notifications) => notifications.splice(index, 1));
};
