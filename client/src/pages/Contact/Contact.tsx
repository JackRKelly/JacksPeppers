import React, {
  useState,
  FC,
  useEffect,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import "./index.scss";
import FormInput from "../../components/FormInput/FormInput";
import {
  addItem,
  NotificationItem,
  NotificationType,
} from "../../common/notification";
import { InputType } from "../../common/index";

interface Props {
  setNotification: Dispatch<SetStateAction<NotificationItem[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Contact: FC<Props> = (props) => {
  const [error, setError] = useState(["", "", ""]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { setNotification, setIsLoading } = props;

  useEffect(() => {
    setIsLoading(false);
    document.title = "Contact | Jack's Peppers";
  }, [setIsLoading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const body = { name, email, message };
    await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
        }
        return res.json();
      })
      .then((res) => {
        if (res) {
          setError(res.error);
          if (res.message) {
            addItem(setNotification, {
              type: NotificationType.success,
              text: res.message,
            });
          }
        }
      });
  };

  return (
    <main className="contact">
      <header className="header">
        <h1 className="header--title">Contact</h1>
        <h3 className="header--description">
          Fill out the form below to get in contact
        </h3>
      </header>

      <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          element={InputType.Input}
          placeholder="John Doe"
          error={error[0]}
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          element={InputType.Input}
          placeholder="johndoe@email.com"
          error={error[1]}
        />
        <FormInput
          name="message"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          element={InputType.Textarea}
          placeholder="Enter your message here..."
          error={error[2]}
        />

        <div className="contact-form--button-container">
          <button className="contact-form--button-container--submit">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
