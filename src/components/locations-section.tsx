import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export function LocationsSection() {
  const locations = [
    {
      name: 'Неделна служба',
      time: 'от 10:30ч в Неделя',
      address: 'Русе Център, ул. „Княз Ал. Дондуков-Корсаков“ № 5-1',
      image: 'https://media.domnaprobiv.com/images/nedelna.jpg',
    },
    {
      name: 'Молитва',
      time: 'от 19:00 часа в Петък',
      address: 'Русе Център, ул. „Княз Ал. Дондуков-Корсаков“ № 5-1',
      image: 'https://media.domnaprobiv.com/images/molitva.jpg',
    },
    {
      name: 'Неделно училище',
      time: 'от 11:30 часа в Неделя',
      address: 'Русе Център, ул. „Княз Ал. Дондуков-Корсаков“ № 5-1',
      image: 'https://media.domnaprobiv.com/images/nedelno-uchilishte.png',
    },
    {
      name: 'Младежко събрание',
      time: 'от 19:00 часа в Понеделник',
      address: 'Русе Център, ул. „Княз Ал. Дондуков-Корсаков“ № 5-1',
      image: 'https://media.domnaprobiv.com/images/mladejko.png',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Нашата църква
            <br />
            Има 4 служби всяка седмица
          </h2>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto px-4">
          {locations.map((location, index) => (
            <Card key={location.name} className="border overflow-hidden bg-card">
              <div
                className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
              >
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <Image
                    height={400}
                    width={600}
                    src={location.image || '/placeholder.svg'}
                    alt={location.name}
                    className="object-cover rounded-lg mx-4 h-full"
                  />
                </div>
                <div
                  className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                >
                  <div className="flex items-center mb-4">
                    {index % 2 === 0 ? (
                      <ArrowLeft className="h-6 w-6 mr-4 text-muted-foreground" />
                    ) : (
                      <ArrowRight className="h-6 w-6 mr-4 text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {location.name}
                  </h3>
                  <p className="text-lg mb-2 text-foreground">{location.time}</p>
                  <p className="text-muted-foreground mb-2">{location.address}</p>
                  <Button variant="link" className="w-fit">
                    <Link href="#map">Виж на картата</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
