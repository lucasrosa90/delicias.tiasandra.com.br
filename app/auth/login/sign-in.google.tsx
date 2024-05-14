'use client'
import React from 'react'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export default function SignInGoogle() {
  return (
    <Button
      className="w-full"
      onClick={() => signIn('google', { callbackUrl: DEFAULT_LOGIN_REDIRECT })}>
      Autenticar com Google
    </Button>
  )
}
