import React, { FC, useState } from 'react'
import styles from '../../styles/Forms.module.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useParams } from 'react-router-dom'
export const Forms: FC = () => {
  const [message, setMessage] = useState<string>('')
  const { sendMessage } = useActions()
  const { id } = useParams()
  const idOfRoute = parseInt(id as string)
  const messages = useTypedSelector((state) => state.chats.chats)
  const user_id = Array.isArray(messages)
    ? messages.find((elem) => elem.user_id === idOfRoute)?.user_id
    : undefined;
  const {  loadFromUserMessage } = useActions()
  const handleSendMessage = () => {
    sendMessage(message, user_id)
    loadFromUserMessage()
    setMessage('')
  }
  return (
    <div className={styles.form_container}>
      <div className={styles.form_input}>
        <input
          type='text'
          placeholder="Введите ваше сообщение..."
          className={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleSendMessage}>
          Отправить
        </button>
      </div>
    </div>
  )
}
