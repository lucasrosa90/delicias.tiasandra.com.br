export type BackdropPosition = 'top' | 'center' | 'bottom'

const mapPosition: Record<BackdropPosition, string> = {
  top: 'items-start',
  center: 'items-center',
  bottom: 'items-end',
}

type BackdropProps = {
  children?: React.ReactNode
  position?: BackdropPosition
}

export default function Backdrop({ position = 'center', children }: Readonly<BackdropProps>) {
  return (
    <div
      className="pb-safe fixed left-0 top-0 z-50 h-screen w-screen bg-black/50"
      id="backdrop"
    >
      <div className={`flex h-screen w-screen justify-center ${mapPosition[position]} px-2`}>{children}</div>
    </div>
  )
}
