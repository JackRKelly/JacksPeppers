import React, { FC, Dispatch, SetStateAction } from "react";
import { addItem, removeItem } from "../../common/notification";
import "./index.scss";

enum NotificationTypes {
  success = "success",
  warning = "warning",
  error = "error",
}

interface NotificationItem {
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
          {index}
          <button
            onClick={() => {
              removeItem(setNotification, index);
            }}
          >
            Close
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          addItem(setNotification, {
            type: NotificationTypes.success,
            text: "Added item",
          });
        }}
      >
        Add item
      </button>
    </div>
  );
};

export default Notification;
