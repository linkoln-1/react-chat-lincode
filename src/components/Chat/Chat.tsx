import React, { FC } from 'react'
import { Header } from '../Header/Header'
import styles from '../../styles/chats.module.scss'
import { Forms, Messages } from '../Messages'
import { useParams } from 'react-router-dom'

export const Chat: FC = () => {
  const { id } = useParams();
  const parsedId = parseInt(id as string);

  if (isNaN(parsedId)) {
    return (
      <div className={styles.no_selected_user}>
        <span>←</span> Выберите Пользователя
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Header text={'Lincode Chat'} />
      <Messages />
      <Forms />
    </div>
  )
}
