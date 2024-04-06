import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <main className="grid pb-safe max-w-screen-xl mx-auto h-full min-h-screen grid-rows-[min-content,auto]">
      <div className="flex items-center justify-center pl-4 w-full h-12">
        <Link href="/" className="font-semibold text-2xl tracking-tighter">
          Delícias da Tia Sandra
        </Link>
      </div>
      <div className="relative w-full">
        {children}
      </div>
      {/* <div className="fixed bottom-0 bg-white w-screen z-20 pb-safe">
        <div className="bg-primary-60 h-14">
          footer - carrinho
        </div>
      </div> */}
    </main>
  );
}
