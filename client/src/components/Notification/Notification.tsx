import React, { FC, Dispatch, SetStateAction } from "react";
import {
  removeNotificationItem,
  NotificationItem,
  notificationColor,
} from "../../common/notification";
import "./index.scss";

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
          className={`notification-container--item`}
          key={index}
          style={{ backgroundColor: notificationColor(notification.type) }}
        >
          {notification.text}
          <button
            className="notification-container--item-dismiss"
            onClick={() => {
              removeNotificationItem(notification.id, setNotification);
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
