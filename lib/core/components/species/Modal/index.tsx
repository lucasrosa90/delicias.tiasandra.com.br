'use client';

import { createContext, useContext, useState } from "react";

import Backdrop, { BackdropPosition } from "../../atoms/Backdrop";
import { assertIsDefined, isType } from "@/core/utils/assertions";
import { useRouter } from "next/navigation";

import CloseSVG from "./x.svg";

type ModalContextProps = {
  setTitle: (title: string) => void;
};
const ModalContext = createContext<ModalContextProps>({} as unknown as ModalContextProps);

type ModalProps = {
  children?: React.ReactNode;
  position?: BackdropPosition;
}
export default function Modal({ position, children }: Readonly<ModalProps>) {
  const [title, setTitle] = useState<string>();
  const { back } = useRouter();

  return (
    <ModalContext.Provider value={{ setTitle }}>
      <Backdrop position={position}>
        <div className="flex flex-col bg-white rounded-lg [&>*]:p-4 w-full h-fit max-w-[48rem] md:my-8 min-h-fit relative">
          <div className="absolute right-0 top-0">
            <a onClick={() => back()} className="cursor-pointer"><CloseSVG /></a>
          </div>
          {children}
        </div>
      </Backdrop>
    </ModalContext.Provider>
  )
}

export function useSetModalTitle(): ModalContextProps["setTitle"] | undefined {
  const context = useContext(ModalContext);
  if (isType(context, assertIsDefined) && isType(context.setTitle, assertIsDefined)) {
    return context.setTitle;
  }
  return undefined;
}
