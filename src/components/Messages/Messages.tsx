import React from 'react'
import { useParams } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { RootState } from '../../redux'
import styles from '../../styles/chats.module.scss'

import { Message } from './Message'
import { MessageHeader } from './MessageHeader/MessageHeader'

interface MessagesProps {
  // Если есть какие-то входящие пропсы, можно добавить
}

export const Messages: React.FC<MessagesProps> = () => {
  const contacts = useTypedSelector(
    (state: RootState) => state.contacts.contacts,
  )
  const messages = useTypedSelector((state: RootState) => state.chats.chats)

  let { id } = useParams()

  const userMessages = Array.isArray(messages)
    ? messages.filter((message) => message.user_id === parseInt(id as string))
    : []

  const userName = contacts?.find((elem) => elem.id === parseInt(id as string))

  return (
    <div className={styles.Messages_block}>
      {userName && <MessageHeader username={userName.username} />}
      <div className={styles.wrapper}>
        {userMessages !== undefined
          ? userMessages.map((message) => {
              return (
                userName && (
                  <Message
                    message={message}
                    key={message.id}
                    username={userName.username}
                    usernameFrom={message.username}
                  />
                )
              )
            })
          : null}
      </div>
    </div>
  )
}
