import Image from "next/image"

export default function Darenie() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col justify-center items-center">
      {/* Top decorative branch */}
      <div className="mb-12 ml-8">
        <Image src="https://asset.cooksa.com/media/bigger-branch-down.png" alt="Darenie" width={400} height={400} />
      </div>

      {/* Main content cards */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Left card - Banking information */}
        <div className="bg-orange-200 rounded-3xl p-8 flex-1 shadow-lg">
          <div className="space-y-4 text-gray-800">
            <div>
              <p className="font-semibold text-lg">Първа инвестиционна банка</p>
              <p className="text-sm">BIC/SWIFT код: FINVBGSF</p>
              <p className="text-sm">Валута: BGN</p>
            </div>

            <div className="pt-4">
              <p className="font-semibold">Име: АПОСТОЛСКА ЕВАНГЕЛСКА ЦЪРКВА</p>
              <p className="text-sm">IBAN: BG58FINV91501017769836</p>
            </div>
          </div>
        </div>

        {/* Right card - Mission statement */}
        <div className="bg-slate-400 rounded-3xl p-8 flex-1 shadow-lg">
          <p className="text-white leading-relaxed">
            Вярваме, че църквата е фактор за промяна в обществото. Дарявайки средства, ние инвестираме в проекти, носещи трансформация на хората. Предоставяме възможност на всеки да се включи в градежа на Царството, споделянето на Божието слово и промяната на човешки съдби всеки ден.


          </p>
        </div>
      </div>

      <Image src="https://asset.cooksa.com/media/bigger-branch-up.png" alt="Darenie" width={400} height={400} />
    </div>
  )
}
