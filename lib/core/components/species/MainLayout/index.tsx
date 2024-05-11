import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <main className="pb-safe mx-auto grid h-full min-h-screen max-w-screen-xl grid-rows-[min-content,auto]">
      <div className="flex h-12 w-full items-center justify-center pl-4">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tighter"
        >
          Delícias da Tia Sandra
        </Link>
      </div>
      <div className="relative w-full">{children}</div>
      {/* <div className="fixed bottom-0 bg-white w-screen z-20 pb-safe">
        <div className="bg-primary-60 h-14">
          footer - carrinho
        </div>
      </div> */}
    </main>
  )
}
