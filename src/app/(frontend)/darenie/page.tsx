'use client'

import Image from 'next/image'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Darenie() {
  const [copiedIban, setCopiedIban] = useState(false)
  const [copiedBic, setCopiedBic] = useState(false)
  const [copiedName, setCopiedName] = useState(false)

  const copyToClipboard = async (text: string, type: 'iban' | 'bic' | 'name') => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'iban') {
        setCopiedIban(true)
        setTimeout(() => setCopiedIban(false), 2000)
      } else if (type === 'bic') {
        setCopiedBic(true)
        setTimeout(() => setCopiedBic(false), 2000)
      } else {
        setCopiedName(true)
        setTimeout(() => setCopiedName(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background p-8 flex flex-col justify-center items-center">
      {/* Top decorative branch */}
      <div className="mb-12 ml-8">
        <Image
          src="https://asset.cooksa.com/media/bigger-branch-down.png"
          alt="Darenie"
          width={400}
          height={400}
        />
      </div>

      {/* Main content cards */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left card - Banking information */}
        <div className="bg-orange-200 rounded-3xl p-8 flex-1 shadow-lg">
          <div className="space-y-4 text-gray-800">
            <div>
              <p className="font-semibold text-lg">Първа инвестиционна банка</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm">
                  BIC/SWIFT код: <strong>FINVBGSF</strong>
                </p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0"
                  onClick={() => copyToClipboard('FINVBGSF', 'bic')}
                  title="Копирай BIC/SWIFT код"
                >
                  {copiedBic ? (
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
              <p className="text-sm">
                Валута: <strong>EUR</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>
                Име: <strong>АПОСТОЛСКА ЕВАНГЕЛСКА ЦЪРКВА</strong>
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0"
                onClick={() => copyToClipboard('АПОСТОЛСКА ЕВАНГЕЛСКА ЦЪРКВА', 'name')}
                title="Копирай име"
              >
                {copiedName ? (
                  <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-sm">
                IBAN: <strong>BG58FINV91501017769836</strong>
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0"
                onClick={() => copyToClipboard('BG58FINV91501017769836', 'iban')}
                title="Копирай IBAN"
              >
                {copiedIban ? (
                  <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Right card - Mission statement */}
        <div className="bg-slate-400 dark:bg-slate-700 rounded-3xl p-8 flex-1 shadow-lg">
          <p className="text-white dark:text-slate-100 leading-relaxed">
            Вярваме, че църквата е фактор за промяна в обществото. Дарявайки средства, ние
            инвестираме в проекти, носещи трансформация на хората. Предоставяме възможност на всеки
            да се включи в градежа на Царството, споделянето на Божието слово и промяната на човешки
            съдби всеки ден.
          </p>
        </div>
      </div>

      <Image
        src="https://asset.cooksa.com/media/bigger-branch-up.png"
        alt="Darenie"
        width={400}
        height={400}
      />
    </div>
  )
}
