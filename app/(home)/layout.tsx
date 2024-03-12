export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start border border-black">
      {children}
    </main>
  );
}
