import React, { useRef, useState } from "react";
import styles from "./UserInput.module.css";

export default function UserInput(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      props.onInvalid();
      return;
    }
    props.onAddUser({ name: enteredUserName, age: enteredUserAge });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>Name</label>
      <input type="text" ref={nameInputRef} />
      <label>Age</label>
      <input type="number" ref={ageInputRef} />

      <button>Add User</button>
    </form>
  );
}