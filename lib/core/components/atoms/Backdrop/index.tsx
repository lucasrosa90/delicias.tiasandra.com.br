type BackdropProps = {
  children?: React.ReactNode;
};

export default function Backdrop({ children }: Readonly<BackdropProps>) {
  return (
    <div className="fixed h-screen w-screen bg-black/50 z-50 pb-safe" id="backdrop">
      <div className="w-full h-full overflow-y-auto flex justify-center">
        {children}
      </div>
    </div>
  )
}
