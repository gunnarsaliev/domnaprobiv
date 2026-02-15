import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Условия за ползване',
  description: 'Прочетете условията за ползване на уебсайта на Църква „Дом на пробив" Русе',
}

export default function TermsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-foreground mb-8">Условия за ползване</h1>

      <p className="text-muted-foreground mb-6">Последна актуализация: 15 февруари 2026 г.</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Приемане на условията</h2>
        <p className="text-muted-foreground">
          С достъпа и използването на уебсайта на Църква „Дом на пробив&rdquo; Русе (
          <strong>domnaprobiv.com</strong>) вие приемате и се съгласявате с настоящите условия за
          ползване. Ако не сте съгласни с тях, моля не използвайте уебсайта.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Описание на уебсайта</h2>
        <p className="text-muted-foreground">
          Уебсайтът предоставя информация за Църква „Дом на пробив&rdquo; Русе – включително нейните
          служения, богослужения, прославна музика, ресурси и начини за контакт. Съдържанието е
          с религиозен и информационен характер и е предназначено за широката общественост.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          3. Интелектуална собственост
        </h2>
        <p className="text-muted-foreground mb-2">
          Всички материали на уебсайта – текстове, изображения, аудио и видео записи, лога и
          дизайн – са собственост на Църква „Дом на пробив&rdquo; Русе или са използвани с разрешение
          на съответните носители на права.
        </p>
        <p className="text-muted-foreground">
          Разрешено е личното, нетърговско ползване на материалите. Всяко копиране,
          разпространение, публично излъчване или търговско използване без предварително писмено
          разрешение е забранено.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Допустимо ползване</h2>
        <p className="text-muted-foreground mb-2">При ползването на уебсайта се задължавате да:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Спазвате приложимото законодателство на Република България и ЕС</li>
          <li>Не разпространявате незаконно или вредно съдържание</li>
          <li>
            Не предприемате действия, които могат да наредят работата на уебсайта или да
            навредят на трети лица
          </li>
          <li>Не се опитвате да получите неразрешен достъп до системите или данните ни</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Връзки към трети страни</h2>
        <p className="text-muted-foreground">
          Уебсайтът може да съдържа препратки към външни сайтове (напр. YouTube, TikTok). Ние не
          носим отговорност за съдържанието или политиките за поверителност на тези сайтове.
          Включването на дадена връзка не означава нашето одобрение на съответния сайт.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Отказ от гаранции</h2>
        <p className="text-muted-foreground">
          Материалите на уебсайта се предоставят „такива, каквито са&rdquo;, без каквито и да е
          изрични или подразбиращи се гаранции. Полагаме усилия информацията да бъде точна и
          актуална, но не гарантираме нейната пълнота или пригодност за конкретна цел.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          7. Ограничение на отговорността
        </h2>
        <p className="text-muted-foreground">
          В максималната степен, допустима от закона, Църква „Дом на пробив&rdquo; Русе не носи
          отговорност за преки или косвени вреди, произтичащи от използването или невъзможността
          за използване на уебсайта, включително загуба на данни или прекъсване на достъпа.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Приложимо право</h2>
        <p className="text-muted-foreground">
          Настоящите условия се уреждат от законодателството на Република България. Всички
          спорове, произтичащи от или свързани с тях, се отнасят за разрешаване от компетентния
          български съд.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Промени в условията</h2>
        <p className="text-muted-foreground">
          Запазваме правото си да изменяме тези условия по всяко време. Промените влизат в сила
          от момента на публикуването им на тази страница. Продължаването на използването на
          уебсайта след публикуването означава приемане на актуализираните условия.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Контакти</h2>
        <p className="text-muted-foreground">
          При въпроси относно тези условия, моля свържете се с нас:
          <br />
          Имейл:{' '}
          <a href="mailto:info@domnaprobiv.com" className="underline">
            info@domnaprobiv.com
          </a>
          <br />
          Църква „Дом на пробив&rdquo;, Русе, България
        </p>
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/">Към началната страница</Link>
        </Button>
      </div>
    </>
  )
}
