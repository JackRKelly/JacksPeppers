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
  const [idCounter, setIdCounter] = useState(1);

  return (
    <div className="notification-container">
      {notification.map((notification, index) => (
        <div
          className={`notification-container--item ${notification.type}`}
          key={index}
        >
          {notification.text}
          {notification.id}
          <button
            onClick={() => {
              removeItem(notification.id, setNotification);
            }}
          >
            Close
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          setIdCounter(idCounter + 1);
          addItem(setNotification, {
            id: idCounter,
            type: NotificationTypes.success,
            text: "Added item",
          });
        }}
      >
        Add item
      </button>
      <button
        onClick={() => {
          console.log(notification);
        }}
      >
        Test
      </button>
    </div>
  );
};

export default Notification;
