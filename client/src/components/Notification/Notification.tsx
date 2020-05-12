import React, { FC, Dispatch, SetStateAction } from "react";
import { removeItem } from "../../common/notification";
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
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
