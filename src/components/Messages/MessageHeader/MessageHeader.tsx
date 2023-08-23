import React, { FC } from 'react'
import styles from '../../../styles/chats.module.scss'

export const MessageHeader: FC<{username: string}> = ({ username }) => {
  return (
    <div className={styles.UserNameOfMessageBlock}>
      <h2>
        {
          username
        }
      </h2>
    </div>
  )
}
