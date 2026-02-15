import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика за поверителност',
  description: 'Научете как събираме, използваме и защитаваме вашите данни',
}

export default function PrivacyPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-foreground mb-8">Политика за поверителност</h1>

      <p className="text-muted-foreground mb-6">Последна актуализация: 15 февруари 2026 г.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Въведение</h2>
        <p className="text-muted-foreground">
          Църква „Дом на пробив&rdquo; Русе се ангажира да защитава вашата поверителност. Настоящата
          политика обяснява какви лични данни събираме, как ги използваме и какви права имате
          по отношение на тях, в съответствие с Регламент (ЕС) 2016/679 (GDPR) и приложимото
          българско законодателство.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Данни, които събираме</h2>
        <p className="text-muted-foreground mb-2">
          Можем да събираме следните категории лични данни:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Данни за контакт – имена и имейл адрес, когато ни пишете или се свързвате с нас</li>
          <li>Технически данни – IP адрес, вид на браузъра и устройството, посетени страници</li>
          <li>Бисквитки и подобни технологии – описани подробно в раздел 7</li>
        </ul>
        <p className="text-muted-foreground mt-2">
          Не събираме специални категории лични данни (напр. данни за здравословно състояние,
          биометрични данни и др.) без изричното ви съгласие.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          3. Как използваме вашите данни
        </h2>
        <p className="text-muted-foreground mb-2">Обработваме личните ви данни за следните цели:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Отговаряне на запитвания и заявки, отправени от вас</li>
          <li>Предоставяне на информация за богослужения, събития и служения на църквата</li>
          <li>Подобряване на функционалността и съдържанието на уебсайта</li>
          <li>Изпращане на съобщения, за които изрично сте дали съгласие</li>
          <li>Спазване на законови задължения</li>
        </ul>
        <p className="text-muted-foreground mt-2">
          Правното основание за обработване е вашето съгласие, изпълнение на договор или
          легитимен интерес, в зависимост от конкретния случай.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          4. Споделяне на данни с трети страни
        </h2>
        <p className="text-muted-foreground">
          Не продаваме, отдаваме под наем или предоставяме личните ви данни на трети страни за
          търговски цели. Може да споделяме данни само с доставчици на услуги, необходими за
          функционирането на уебсайта (напр. хостинг), при условие че те спазват приложимото
          законодателство за защита на данните. При наличие на законово изискване можем да
          предоставяме данни на компетентни органи.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Сигурност на данните</h2>
        <p className="text-muted-foreground">
          Прилагаме подходящи технически и организационни мерки за защита на личните ви данни
          от неразрешен достъп, загуба, унищожаване или разкриване. Достъп до данните имат само
          упълномощени лица, обвързани с поверителност. При нарушение на сигурността на данните
          ще ви уведомим в съответствие с приложимото законодателство.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Вашите права</h2>
        <p className="text-muted-foreground mb-2">
          Съгласно GDPR имате следните права по отношение на личните си данни:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>
            <strong>Право на достъп</strong> – да получите копие от данните, които съхраняваме за
            вас
          </li>
          <li>
            <strong>Право на коригиране</strong> – да поискате поправка на неточни данни
          </li>
          <li>
            <strong>Право на изтриване</strong> – да поискате заличаване на данните ви при
            определени условия
          </li>
          <li>
            <strong>Право на ограничаване</strong> – да ограничите обработването в определени
            случаи
          </li>
          <li>
            <strong>Право на преносимост</strong> – да получите данните си в структуриран формат
          </li>
          <li>
            <strong>Право на възражение</strong> – да се противопоставите на обработването въз
            основа на легитимен интерес
          </li>
          <li>
            <strong>Право на оттегляне на съгласие</strong> – по всяко време, без да засегне
            законосъобразността на предходното обработване
          </li>
        </ul>
        <p className="text-muted-foreground mt-2">
          За упражняване на правата си се свържете с нас на имейла по-долу. Имате право и да
          подадете жалба до{' '}
          <strong>Комисията за защита на личните данни (КЗЛД)</strong> –{' '}
          <a href="https://www.cpdp.bg" className="underline">
            www.cpdp.bg
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Бисквитки</h2>
        <p className="text-muted-foreground">
          Уебсайтът ни може да използва технически необходими бисквитки за осигуряване на
          правилното му функциониране (напр. запазване на предпочитанията за тема). Не използваме
          бисквитки за проследяване или рекламни цели без вашето изрично съгласие. Можете да
          управлявате бисквитките чрез настройките на вашия браузър.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          8. Промени в политиката
        </h2>
        <p className="text-muted-foreground">
          Можем периодично да актуализираме тази политика. При съществени промени ще публикуваме
          известие на уебсайта. Препоръчваме ви редовно да преглеждате тази страница.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Контакти</h2>
        <p className="text-muted-foreground">
          При въпроси или искания, свързани с тази политика, се свържете с нас:
          <br />
          Имейл:{' '}
          <a href="mailto:info@domnaprobiv.com" className="underline">
            info@domnaprobiv.com
          </a>
          <br />
          Църква „Дом на пробив&rdquo;, Русе, България
        </p>
      </section>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/">Към началната страница</Link>
        </Button>
      </div>
    </>
  )
}
