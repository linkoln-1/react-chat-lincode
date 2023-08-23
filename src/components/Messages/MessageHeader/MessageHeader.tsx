import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../../../styles/chats.module.scss'

export const MessageHeader: FC<{username: string}> = ({ username }) => {
  const id = parseInt(useParams().id as string)

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
