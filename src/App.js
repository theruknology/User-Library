import React, { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import UsersList from "./components/UsersList/UsersList";
import UserInput from "./components/UserInput/UserInput";
import styles from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState([
    { id: "u1", name: "Expample user 1", age: 4 },
    { id: "u2", name: "Expample user 2", age: 54 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addUser = (input) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.random().toString(),
        name: input.name,
        age: input.age,
      });
      return updatedUsers;
    });
  };

  return (
    <div className={styles.appContainer}>
      {modalVisible && <Modal onClose={closeModal}/>}
      <UserInput
        onCancel={closeModal}
        onInvalid={openModal}
        onAddUser={addUser}
      />
      <UsersList items={users} />
    </div>
  );
}
