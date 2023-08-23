import React, { FC } from 'react';
import { SidebarMenu } from './SidebarMenu';

import styles from '../../styles/sidebar.module.scss';

type SidebarProps = {
  open: boolean
  setOpen: (a: boolean) => void
}
export const Sidebar: FC<SidebarProps> = ({ open, setOpen }) => {
  return (
    <div className={styles.container}>
      <SidebarMenu open={open} setOpen={setOpen} />
    </div>
  )
}
