import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={s.item}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={onDelete}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
