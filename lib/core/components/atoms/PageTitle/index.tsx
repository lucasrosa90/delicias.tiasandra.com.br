'use client';

import { useSetModalTitle } from "../../species/Modal";

export default function PageTitle({ children }: Readonly<{ children: string }>) {
  const setTitle = useSetModalTitle();

  if (setTitle) {
    setTitle(children);
    return null;
  }

  return (
    <h1 className="text-2xl font-semibold text-primary-300">{children}</h1>
  );
}
