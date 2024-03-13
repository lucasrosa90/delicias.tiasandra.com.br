import Link from "next/link";

type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ children, modal }: Readonly<Props>) {
  return (
    <div>
      {modal}
      <main className="flex flex-col items-start justify-start pb-safe max-w-5xl mx-auto">
        <div className="flex items-center justify-center pl-4 w-full h-12">
          <Link href="/" className="font-bold text-2xl">
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
    </div>
  );
}
