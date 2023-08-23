import React from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/sidebar.module.scss'
import dayjs from 'dayjs'
import { subHeading } from '../../view/subHeading'

interface SidebarIconProps {
  open: boolean
  username: string
}
export const SidebarMenuContact: React.FC<SidebarIconProps> = ({
  open,
  username,
}) => {
  return (
    <motion.div className={styles.icon_container}>
      <div>
        <motion.span
          variants={subHeading}
          initial={open ? 'true' : 'false'}
          animate={open ? 'true' : 'false'}
          className={styles.username}
        >
          {username}
        </motion.span>

        <motion.span
          variants={subHeading}
          initial={open ? 'true' : 'false'}
          animate={open ? 'true' : 'false'}
          className={styles.message}
        >
          {/*{message.text.substr(0, 20) + '...'}*/}
        </motion.span>
      </div>
      <div>
        <motion.span
          className={styles.time}
          variants={subHeading}
          initial={open ? 'true' : 'false'}
          animate={open ? 'true' : 'false'}
        >
          {/*{dayjs(message?.timestamp).format("HH:mm")}*/}
        </motion.span>
      </div>
    </motion.div>
  )
}
