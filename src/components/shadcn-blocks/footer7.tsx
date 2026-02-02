import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Logo } from '../layout/logo'
import Link from 'next/link'

interface Footer7Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  sections?: Array<{
    title: string
    links: Array<{ name: string; href: string }>
  }>
  description?: string
  socialLinks?: Array<{
    icon: React.ReactElement
    href: string
    label: string
  }>
  copyright?: string
  legalLinks?: Array<{
    name: string
    href: string
  }>
}

const defaultSections = [
  {
    title: 'За нас',
    links: [
      { name: 'За нас', href: '/za-nas' },
      { name: 'Линкове', href: 'linkove' },
      // { name: 'Marketplace', href: '#' },
      // { name: 'Features', href: '#' },
    ],
  },
  {
    title: 'Училище',
    links: [{ name: 'Училище 2026', href: '/uchilishe' }],
  },
  {
    title: 'Ресурси',
    links: [
      { name: 'Неделни служби', href: '/nedelni-subraniya' },
      { name: 'Неделно хваление', href: '/hvalenie' },
      { name: 'Песни', href: '/pesni' },
      // { name: 'Privacy', href: '#' },
    ],
  },
]

const defaultSocialLinks = [
  {
    icon: <FaFacebook className="size-5" />,
    href: 'https://www.facebook.com/domnaprobiv',
    label: 'Facebook',
  },
  {
    icon: <FaYoutube className="size-5" />,
    href: 'https://www.youtube.com/@domnaprobiv',
    label: 'YouTube',
  },
  {
    icon: <FaInstagram className="size-5" />,
    href: 'https://www.instagram.com/domnaprobiv',
    label: 'Instagram',
  },
  {
    icon: <FaTiktok className="size-5" />,
    href: 'https://www.tiktok.com/@domnaprobiv',
    label: 'TikTok',
  },
]

const defaultLegalLinks = [
  { name: 'Terms and Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
]

const Footer7 = ({
  sections = defaultSections,
  description = 'A collection of components for your startup business or side project.',
  socialLinks = defaultSocialLinks,
  copyright = 'All rights reserved',
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  const year = new Date().getFullYear()

  return (
    <section className="py-32 max-w-7xl mx-auto">
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-2 lg:items-start">
            {/* Logo */}
            <Logo
              src="https://asset.cooksa.com/media/logo.png"
              alt="logo"
              width={200}
              height={30}
            />
            <p className="text-muted-foreground max-w-[70%] text-sm">{description}</p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <Link href={social.href} aria-label={social.label} target="_blank">
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary font-medium">
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">
            {year} © {copyright}
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Footer7 }
