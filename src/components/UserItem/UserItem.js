import React from 'react'
import sytles from './UserItem.module.css'

export default function UserItem(props) {
  return (
    <li className={sytles.userItem}>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </li>
  )
}
