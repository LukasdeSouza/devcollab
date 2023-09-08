'use client'
import React from 'react'
import { Button } from '../ui/button'

const LoginButton = () => {
  const doLogin = () => {
    alert('Erro ao Efetuar Login')
  }

  return (
    <Button onClick={doLogin}>Entrar</Button>
  )
}

export default LoginButton