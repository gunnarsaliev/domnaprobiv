import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative h-screen bg-background">
      {/* Hero Content Container */}
      <div className="h-full">
        <div className="h-full">
          {/* Main Hero Card */}
          <div className="relative bg-elegant-gray-dark overflow-hidden h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                fill
                src={`https://media.domnaprobiv.com/images/hero-image.jpg`}
                alt="Anchor church community - young people laughing together"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 py-24 md:px-16 text-white h-full flex flex-col justify-end max-w-7xl mx-auto">
              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl lg:text-6xl font-black tracking-tighter mb-4">
                Добре дошли
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl font-medium mb-12 leading-relaxed">
                Да издигаме името на Исус
                <br />в цялата прелест на Неговата личност и съвършенството.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-48"
              >
                <Link href="#map">Научете повече</Link>
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          {/* <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              WALKING WITH JESUS
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We love Tacoma, and the entire South Sound. At Anchor we actively seek how to live as blessings to our neighbors and community.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
