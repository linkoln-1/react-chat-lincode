import React from 'react'
import styles from '../../styles/chats.module.scss'
import dayjs from 'dayjs'
interface MessageProps {
  message: {
    id?: number
    user_id: number
    timestamp: string
    text: string
  }
  username: string
  usernameFrom: string | undefined
}

export const Message: React.FC<MessageProps> = ({
  message,
  username,
  usernameFrom,
}) => {
  return (
    <div
      className={
        usernameFrom === 'Нашхоев Али'
          ? styles.message_wrapper_to_user
          : styles.message_wrapper_from_user
      }
    >
      <div className={styles.message}>
        <p>{usernameFrom === 'Нашхоев Али' ? usernameFrom : username}</p>
        <span className={styles.message_text}>{message.text}</span>
        <span className={styles.message_timestamp}>
          {dayjs(message.timestamp).format('HH:mm')}
        </span>
      </div>
    </div>
  )
}
