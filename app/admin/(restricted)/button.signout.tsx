'use client'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function ButtonSignOut() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mt-auto rounded-lg"
          aria-label="Sair"
          onClick={() => signOut()}>
          <LogOut className="size-5" />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        sideOffset={5}>
        Sair
      </TooltipContent>
    </Tooltip>
  )
}
