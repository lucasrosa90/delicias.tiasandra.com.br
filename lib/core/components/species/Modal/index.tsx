'use client';

import { createContext, useContext, useState } from "react";

import Backdrop from "../../atoms/Backdrop";
import { assertIsDefined, isType } from "@/core/utils/assertions";
import { useRouter } from "next/navigation";

import CloseSVG from "./x.svg";

type ModalContextProps = {
  setTitle: (title: string) => void;
};
const ModalContext = createContext<ModalContextProps>({} as unknown as ModalContextProps);

type ModalProps = {
  children?: React.ReactNode;
}
export default function Modal({ children }: Readonly<ModalProps>) {
  const [title, setTitle] = useState<string>();
  const { back } = useRouter();

  return (
    <ModalContext.Provider value={{ setTitle }}>
      <Backdrop>
        <div className="flex flex-col bg-white md:rounded-lg [&>*]:p-4 divide-y divide-black/15 w-full h-fit md:max-w-[40rem] md:my-8 min-h-full md:min-h-fit">
          {title && (
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-primary-300">{title}</h1>
              <a onClick={() => back()} className="cursor-pointer"><CloseSVG /></a>
            </div>
          )}
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
