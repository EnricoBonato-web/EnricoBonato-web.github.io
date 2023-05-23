import React, { FC } from "react";
import style from "../styles/contacts.module.scss";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => (
  <div className={style.container}>
    Contact:
    <p>Email: john.doe@email.com</p>
    <p>Phone: +1234567890</p>
    <p>LinkedIn: linkedin.com/in/johndoe</p>
  </div>
);

export default Contacts;
