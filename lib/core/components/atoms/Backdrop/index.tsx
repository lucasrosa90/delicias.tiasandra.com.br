export type BackdropPosition = "top" | "center" | "bottom";

const mapPosition: Record<BackdropPosition, string> = {
  top: "items-start",
  center: "items-center",
  bottom: "items-end",
};

type BackdropProps = {
  children?: React.ReactNode;
  position?: BackdropPosition;
};

export default function Backdrop({ position = 'center', children }: Readonly<BackdropProps>) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 pb-safe" id="backdrop">
      <div className={`w-screen h-screen flex justify-center ${mapPosition[position]} px-2`}>
        {children}
      </div>
    </div>
  )
}
