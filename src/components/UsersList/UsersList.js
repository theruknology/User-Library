import React from 'react'
import styles from './UsersList.module.css'
import UserItem from '../UserItem/UserItem'

export default function UsersList(props) {
  return (
    <ul className={styles.userList}>
      {props.items.map((user) => ( 
        <UserItem key={user.id} id={user.id} name={user.name} age={user.age}/> 
      ))}
    </ul>
  )
}
