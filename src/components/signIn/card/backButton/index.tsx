'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
  const navigate = useRouter()

  return (
    <Button
      onClick={() => navigate.back()} variant="outline">
      Voltar
    </Button>
  )
}

export default BackButton