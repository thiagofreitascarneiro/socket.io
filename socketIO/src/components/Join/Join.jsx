import React, { useRef } from 'react'
import io from 'socket.io-client'
import {Input, Button} from '@mui/material'
import style from './Join.module.css'

export function Join({setChatVisibility, setSocket}) {
    const usernameRef = useRef()

    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if(!username.trim()) return 
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    }
    return (
        <div className={style['join-container']}>
          <h2>Chat em tempo real</h2>
          <Input inputRef={usernameRef} placeholder='Nome de usuário' />
          <Button sx={{mt:2}} onClick={()=>handleSubmit()} variant="contained">Entrar</Button>
        </div>
      )
    }

