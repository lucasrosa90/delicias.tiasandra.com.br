'use client'

import { useRouter } from 'next/navigation'
import { createContext, useContext, useState } from 'react'

import { assertIsDefined, isType } from '@/core/utils/assertions'

import Backdrop, { BackdropPosition } from '../../atoms/Backdrop'

import CloseSVG from './x.svg'

type ModalContextProps = {
  setTitle: (title: string) => void
}
const ModalContext = createContext<ModalContextProps>({} as unknown as ModalContextProps)

type ModalProps = {
  children?: React.ReactNode
  position?: BackdropPosition
}
export default function Modal({ position, children }: Readonly<ModalProps>) {
  const [, setTitle] = useState<string>()
  const { back } = useRouter()

  return (
    <ModalContext.Provider value={{ setTitle }}>
      <Backdrop position={position}>
        <div className="relative flex h-fit min-h-fit w-full max-w-3xl flex-col rounded-lg bg-white md:my-8 [&>*]:p-4">
          <div className="absolute right-0 top-0">
            <a
              onClick={() => back()}
              className="cursor-pointer"
            >
              <CloseSVG />
            </a>
          </div>
          {children}
        </div>
      </Backdrop>
    </ModalContext.Provider>
  )
}

export function useSetModalTitle(): ModalContextProps['setTitle'] | undefined {
  const context = useContext(ModalContext)
  if (isType(context, assertIsDefined) && isType(context.setTitle, assertIsDefined)) {
    return context.setTitle
  }
  return undefined
}
