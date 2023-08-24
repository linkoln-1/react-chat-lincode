import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from '../../styles/sidebar.module.scss'
import { iconVariant, sideContainerVariant } from '../../view/sidebar_variants'
import { subHeading } from '../../view/subHeading'
import { SidebarMenuContact } from './SidebarMenuContact'

type SidebarMenuProps = {
  open: boolean
  setOpen: (a: boolean) => void
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ open, setOpen }) => {
  const contacts = useTypedSelector(
    (state: RootState) => state.contacts.contacts,
  )
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <motion.div
      data-open={open}
      variants={sideContainerVariant}
      initial={open ? 'true' : 'false'}
      animate={open ? 'true' : 'false'}
    >
      <motion.div className={styles.sidebar}>
        <div className={styles.button_close_menu}>
          <motion.span
            layout
            onClick={handleToggle}
            initial={open ? 'true' : 'false'}
            animate={open ? 'true' : 'false'}
            className={open ? styles.sidebar_open : styles.sidebar_close}
            variants={iconVariant}
            transition={{ duration: 0.03 }}
          ></motion.span>
        </div>
        <div className={styles.title_menu}>
          <motion.ul>
            {contacts.map((item: { id: number; username: string }) => (
              <Link key={item.id} to={`/${item.id}`}>
                <motion.li
                  key={item.id}
                  whileHover={{
                    backgroundColor: 'rgba(1, 23, 81, 0.9)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    width: '260px',
                  }}
                  variants={subHeading}
                >
                  <SidebarMenuContact username={item.username} open={open} />
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
