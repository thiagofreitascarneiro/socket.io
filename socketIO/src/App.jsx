import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Join } from './components/Join/Join'
import { Chat } from './components/Chat/Chat'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <div>
      {
        chatVisibility ?  <Chat socket={socket} />  :  <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
      }
    </div>
  )
}

export default App
