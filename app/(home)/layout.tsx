type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ children, modal }: Readonly<Props>) {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      {modal}
      <div className="bg-primary-10 w-full h-10">
        Nome da empresa
      </div>
      <div className="relative">
        {children}
      </div>
      <div className="fixed bottom-0 bg-white w-screen z-20 pb-safe">
        <div className="bg-primary-60 h-14">
          footer - carrinho
        </div>
      </div>
    </main>
  );
}
