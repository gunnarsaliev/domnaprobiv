'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import { BorderButton } from '@/components/shadcnblocks/border-button'

// Custom hook to get previous value
const usePrevious = <T,>(value: T): T | undefined => {
  const [prev, setPrev] = useState<T | undefined>(undefined)
  const ref = useRef(value)

  useEffect(() => {
    setPrev(ref.current)
    ref.current = value
  }, [value])

  return prev
}

interface Services21Props {
  className?: string
}

const Services21 = ({ className }: Services21Props) => {
  const services = [
    {
      id: '{01}',
      title: 'Неделни служби',
      image: '/api/media/file/nedelna-slujba.jpg',
      description: 'Слушай минали проповеди',
    },
    {
      id: '{02}',
      title: 'Хваление',
      image: '/api/media/file/IMG_20251116_150809.jpg',
      description: 'Това са песните от службите за хваление през неделните служби',
    },
    {
      id: '{03}',
      title: 'Песни',
      image: '/api/media/file/yumu-ifreZpMoukk-unsplash.jpg',
      description: 'Индивидуални песни от служението за хваление',
    },
    // {
    //   id: "{04}",
    //   title: "Branding",
    //   image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img9.png",
    //   description:
    //     "We continuously monitor performance and gather feedback to refine and improve the solution. This iterative process ensures long-term success and growth.",
    // },
    // {
    //   id: "{05}",
    //   title: " Packaging",
    //   image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
    //   description:
    //     "We create comprehensive packaging solutions that protect your products while enhancing brand visibility. Our designs balance functionality with aesthetic appeal to drive consumer engagement.",
    // },
  ]

  const [active, setActive] = useState<number>(0)
  const previousActive = usePrevious(active)

  return (
    <section className={cn('py-32', className)}>
      <div className="container">
        <div className="flex w-full flex-col justify-between lg:flex-row lg:gap-20">
          <div className="top-10 h-fit w-full space-y-7 py-8 lg:sticky lg:max-w-xs">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              {previousActive !== undefined && (
                <div className="absolute top-0 h-full w-full">
                  <Image
                    src={services[previousActive].image}
                    className="h-full w-full object-cover"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <motion.div
                initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                key={active}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                }}
                className="h-full w-full"
              >
                <Image
                  src={services[active].image}
                  className="h-full w-full object-cover"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>
            <p className="font-semibold tracking-tight text-foreground/20 uppercase">
              {services[active].title}
            </p>
            <p className="text-base text-foreground/50">{services[active].description}</p>
          </div>
          <div className="relative w-full xl:pl-20">
            <ul>
              {services.map((service, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  className={cn(
                    'cursor-pointer border-b border-foreground/20 py-8 text-5xl font-semibold tracking-tight lg:text-7xl',
                  )}
                >
                  <div className={index === active ? 'opacity-100' : 'opacity-20'}>
                    <span>{service.title}</span>
                    <sup className="align-super text-sm text-red-500 lg:text-3xl">{service.id}</sup>
                  </div>
                </li>
              ))}
            </ul>
            <BorderButton className="group mt-10 border-red-100 bg-red-500/10 text-red-500">
              Get Started{' '}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </BorderButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Services21 }
