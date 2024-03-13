import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <div>
      <div className="flex h-10 items-center border-b border-t border-black/15">
        <Link href="/">Ver todos produtos</Link>
      </div>
      <section className="p-4">
        {children}
      </section>
    </div>
  );
}
