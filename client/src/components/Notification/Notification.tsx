import React, { FC } from "react";
import "./index.scss";

const Notification: FC = () => {
  let notifications = [
    { type: "success", text: "Notification 1" },
    { type: "warning", text: "Notification 1" },
    { type: "error", text: "Notification 1" },
  ];

  const hideNotification = (index: number) => {
    notifications.splice(index, 1);
    console.log(notifications, index);
  };

  return (
    <div className="notification-container">
      {notifications.map((notification, index) => (
        <div
          className={`notification-container--item ${notification.type}`}
          key={index}
        >
          {notification.text}{" "}
          <button
            onClick={() => {
              hideNotification(index);
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
