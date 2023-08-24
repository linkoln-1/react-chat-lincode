import React from 'react'
import styles from '../../styles/chats.module.scss'

interface HeaderProps {
  text: string
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_title}>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default React.memo(Header)

export { Header }
