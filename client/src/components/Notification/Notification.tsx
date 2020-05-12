import React, { FC, Dispatch, SetStateAction, useState } from "react";
import { addItem, removeItem } from "../../common/notification";
import "./index.scss";

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

interface Props {
  notification: NotificationItem[];
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>;
}

const Notification: FC<Props> = (props) => {
  const { notification, setNotification } = props;

  return (
    <div className="notification-container">
      {notification.map((notification, index) => (
        <div
          className={`notification-container--item ${notification.type}`}
          key={index}
        >
          {notification.text}
          <button
            className="notification-container--item-dismiss"
            onClick={() => {
              removeItem(notification.id, setNotification);
            }}
          >
            Close
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
