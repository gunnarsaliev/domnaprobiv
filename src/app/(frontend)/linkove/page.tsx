import Image from 'next/image'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Route } from 'next'

export default function LinktreePage() {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: <Icon icon="mdi:youtube" />,
      url: 'https://www.youtube.com/@domnaprobiv',
      bgColor: 'bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700',
      textColor: 'text-gray-900 dark:text-white',
    },
    {
      name: 'Facebook',
      icon: <Icon icon="mdi:facebook" />,
      url: 'https://www.facebook.com/domnaprobiv',
      bgColor: 'bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700',
      textColor: 'text-gray-900 dark:text-white',
    },
    {
      name: 'Instagram',
      icon: <Icon icon="mdi:instagram" />,
      url: 'https://www.instagram.com/domnaprobiv',
      bgColor: 'bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700',
      textColor: 'text-gray-900 dark:text-white',
    },
    {
      name: 'TikTok',
      icon: <Icon icon="streamline-logos:tiktok-logo-solid" />,
      url: 'https://www.tiktok.com/@domnaprobiv',
      bgColor: 'bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700',
      textColor: 'text-gray-900 dark:text-white',
    },
  ]

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-blue-400 via-purple-400 to-orange-300 dark:from-slate-900 dark:via-purple-950 dark:to-slate-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="https://asset.cooksa.com/media/avatar-logo.jpg"
              alt="Avatar logo"
              fill
              className="rounded-full object-cover border-4 border-white/30 dark:border-white/20 shadow-xl"
              priority
            />
          </div>
          <h1 className="text-white dark:text-gray-100 text-2xl font-bold mb-3 drop-shadow-lg">
            Дом на пробив
          </h1>
          <p className="text-white/95 dark:text-gray-200 text-sm leading-relaxed max-w-sm mx-auto drop-shadow-md">
            Да издигаме името на Исус в цялата прелест на Неговата личност и съвършенството.
          </p>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-6 mb-6 mt-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={index}
                  href={social.url as Route}
                  className="w-12 h-12 bg-white/25 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label={social.name}
                >
                  {IconComponent}
                </Link>
              )
            })}
          </div>

          {/* YouTube Video Section */}
          <div className="mb-6">
            <div className="bg-white/15 dark:bg-black/20 backdrop-blur-md rounded-2xl p-4 shadow-xl">
              <div className="aspect-video bg-gray-900 dark:bg-black rounded-xl overflow-hidden relative shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/vDk-Y5O43hM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full absolute inset-0 border-0 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Button
                key={index}
                asChild
                className={`w-full h-14 ${link.bgColor} ${link.textColor} font-semibold text-base rounded-full border-0 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:shadow-xl`}
              >
                <Link href={link.url as Route} className="flex items-center justify-center gap-3">
                  <span className="text-xl">{IconComponent}</span>
                  {link.name}
                </Link>
              </Button>
            )
          })}

          {/* Donate Button */}
          <div className="mb-8">
            <Button
              asChild
              className="w-full h-14 bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-500 text-white font-semibold text-base rounded-full border-0 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <Link
                href={`${'/darenie/' as Route}`}
                className="flex items-center justify-center gap-3"
              >
                <Icon icon="mdi:heart" className="w-5 h-5" />
                Дарение
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/70 dark:text-gray-300 text-xs drop-shadow">Created with ❤️</p>
        </div>
      </div>
    </div>
  )
}
