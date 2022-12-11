import React, { useState } from "react";
import styles from './UserInput.module.css'

export default function UserInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHanlder = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.onInvalid();
      return;
    }
    props.onAddUser({ name: enteredName, age: enteredAge });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>Name</label>
      <input onChange={nameChangeHandler} type="text" />
      <label>Age</label>
      <input onChange={ageChangeHanlder} type="number" />

      <button>Add User</button>
    </form>
  );
}
