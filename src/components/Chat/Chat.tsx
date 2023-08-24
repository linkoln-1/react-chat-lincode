import React, { FC } from 'react'
import { Header } from '../Header/Header'
import styles from '../../styles/chats.module.scss'
import { Forms, Messages } from '../Messages'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

type ChatProps = {
  open: boolean
}

export const Chat: FC<ChatProps> = ({ open }) => {
  const { id } = useParams()
  const parsedId = parseInt(id as string)

  const chatVariants = {
    true: {
      width: '95%',
    },
    false: {
      width: '0%',
      transition: {
        delay: 0.3,
      },
    },
  }

  if (isNaN(parsedId)) {
    return (
      <div className={styles.no_selected_user}>
        <span>←</span> Выберите Пользователя
      </div>
    )
  }
  return (
    <motion.div
      className={styles.container}
      variants={chatVariants}
      initial={open ? 'true' : 'false'}
      animate={open ? 'true' : 'false'}
    >
      <Header text={'Lincode Chat'} />
      <Messages />
      <Forms />
    </motion.div>
  )
}
