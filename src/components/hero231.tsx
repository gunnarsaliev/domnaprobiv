'use client'

import AutoScroll from 'embla-carousel-auto-scroll'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import 'swiper/css/effect-cards'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface Hero231Props {
  className?: string
}

const Hero231 = ({ className }: Hero231Props) => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const images = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg',
      alt: 'Portrait of Joanna Doe in urban setting',
      name: 'Joanna Doe',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg',
      alt: 'Portrait of Joan Doe in natural lighting',
      name: 'Joan Doe',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg',
      alt: 'Portrait of Sarah Chen in studio setting',
      name: 'Sarah Chen',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg',
      alt: 'Portrait of Joanna Doe in urban setting',
      name: 'Joanna Doe',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg',
      alt: 'Portrait of Joan Doe in natural lighting',
      name: 'Joan Doe',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random2.jpeg',
      alt: 'Portrait of Sarah Chen in studio setting',
      name: 'Sarah Chen',
    },
  ]

  const logos = [
    {
      id: 'logo-1',
      description: 'Logo 1',
      image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-2',
      description: 'Logo 2',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-3',
      description: 'Logo 3',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-4',
      description: 'Logo 4',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-5',
      description: 'Logo 5',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-6',
      description: 'Logo 6',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg',
      className: 'h-5 w-auto',
    },
    {
      id: 'logo-7',
      description: 'Logo 7',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-8',
      description: 'Logo 8',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-1',
      description: 'Logo 1',
      image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-2',
      description: 'Logo 2',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-3',
      description: 'Logo 3',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-4',
      description: 'Logo 4',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-5',
      description: 'Logo 5',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-6',
      description: 'Logo 6',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg',
      className: 'h-5 w-auto',
    },
    {
      id: 'logo-7',
      description: 'Logo 7',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg',
      className: 'h-7 w-auto',
    },
    {
      id: 'logo-8',
      description: 'Logo 8',
      image:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg',
      className: 'h-7 w-auto',
    },
  ]

  const css = `
  .mySwiperHero231 {
    width: 100%;
    min-width: 750px;
    height: 100%;
    padding-bottom: 50px;
  } 

  .mySwiperHero231 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    margin-top: 60px;
    height: 420px;
  }
  
  .mySwiperHero231 .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  .swiper-pagination {
    bottom: 10px !important;
    width: 100% !important;
    left: 0% !important;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--primary);
  }

  @media (min-width: 768px) {
    .swiper-pagination {
      width: fit-content !important;
      left: 80% !important;
    }
  }

  `

  return (
    <section className={cn('py-6 ', className)}>
      <style>{css}</style>
      <div className="max-w-6xl mx-auto mx-4 mt-4 flex flex-col items-center justify-center gap-4 overflow-hidden text-left xl:mt-14 xl:flex-row xl:overflow-visible">
        <div className="w-full space-y-10 xl:w-1/2">
          <Button
            variant="secondary"
            className="items-left group flex w-fit justify-center gap-3 rounded-full bg-muted/70 px-5 py-1"
          >
            <span className="size-2.5 rounded-full bg-red-500" />
            На живо всяка неделя от 10:30ч.
          </Button>
          <h1 className="mt-12 font-calSans text-5xl font-medium tracking-tight text-foreground md:text-7xl">
            Църква <br />
            "Дом на пробив"
          </h1>
          <p className="mt-3 max-w-lg text-muted-foreground/80">
            Да издигаме името на Исус в цялата прелест на Неговата личност и съвършенството.
          </p>
          <div className="flex gap-4 xl:mt-32">
            <Link href="/admin">
              <Button
                variant="secondary"
                className="group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
              >
                <span>Вход за служители</span>
                <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
              </Button>
            </Link>
            <Button
              variant="default"
              className="group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Get Started</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
        </div>
        <div className="relative mt-36 h-145 w-full xl:mt-0 xl:w-3/5">
          <div className="absolute -top-24 mx-auto flex items-center justify-center">
            <Carousel
              plugins={[AutoScroll({ playOnInit: true })]}
              opts={{ loop: true, align: 'start' }}
            >
              {/* <CarouselContent className="ml-0">
                {logos.map((logo, index) => (
                  <CarouselItem
                    key={index}
                    className="relative mr-6 flex h-15 basis-1/6 justify-center pl-0 opacity-30 xl:mr-12"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img src={logo.image} alt={logo.description} className={logo.className} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent> */}
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent"></div>
          </div>
          <div className="mx-auto flex h-full items-center justify-center">
            {domLoaded && (
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={2.438}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                className="mySwiperHero231"
                modules={[EffectCoverflow, Autoplay, Pagination]}
                pagination={{ clickable: true }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="h-full w-full overflow-hidden rounded-3xl object-cover shadow-lg"
                      src={image.src}
                      alt={image.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <div className="absolute top-0 right-0 -z-1 h-full w-full rounded-3xl bg-muted xl:top-1/2 xl:mt-4 xl:h-155 xl:w-9/10 xl:-translate-y-1/2" />
        </div>
      </div>
    </section>
  )
}

export { Hero231 }
