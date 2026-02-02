import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({
  src,
  alt,
  title,
  className,
  width = 100,
  height = 100,
}: {
  src: string
  alt: string
  title?: string
  className?: string
  width?: number
  height?: number
}) => {
  return (
    <Link href="/" className="flex flex-row items-center gap-2">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        className={cn('h-8 rounded-md', className)}
      />
      {title && <h2 className="text-xl font-semibold hidden lg:block">{title}</h2>}
    </Link>
  )
}
