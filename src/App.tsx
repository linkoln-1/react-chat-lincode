import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Chat } from './components/Chat';
import { useActions } from './hooks/useActions';

export const App: FC = () => {
  const [open, setOpen] = useState<boolean>(true)
  const { loadUsers, loadFromUserMessage } = useActions()

  useEffect(() => {
    loadUsers()
    loadFromUserMessage()
  }, [])

  return (
    <div className="container">
      <Sidebar open={open} setOpen={setOpen} />
      <Routes>
          <Route path='/:id?' element={<Chat />}/>
      </Routes>
    </div>
  )
}
