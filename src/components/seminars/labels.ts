export type SeminarLocale = 'bg' | 'en'

export const seminarLabels = {
  bg: {
    basePath: '/resursi/seminari',
    seminars: 'Семинари',
    seminarsIntro: 'Записи от семинари и учебни поредици',
    noSeminars: 'Все още няма публикувани семинари.',
    chapter: 'Глава',
    chapters: 'Глави',
    chapterCount: (n: number) => (n === 1 ? '1 глава' : `${n} глави`),
    speakers: 'Говорители',
    backToSeminars: 'Назад към семинарите',
    backToSeminar: 'Назад към семинара',
    listen: 'Слушай',
    video: 'Видео',
    openVideo: 'Отвори / изтегли видео',
    videoUnsupported:
      'Браузърът ви не може да възпроизведе това видео. Изтеглете го или използвайте YouTube.',
    videoUnsupportedNoDownload:
      'Браузърът ви не може да възпроизведе това видео. Опитайте с друг браузър (напр. Chrome) или използвайте YouTube.',
    downloadAudio: 'Изтегли MP3',
    previous: 'Предишна глава',
    next: 'Следваща глава',
  },
  en: {
    basePath: '/resources/seminars',
    seminars: 'Seminars',
    seminarsIntro: 'Recordings of seminars and teaching series',
    noSeminars: 'No seminars have been published yet.',
    chapter: 'Chapter',
    chapters: 'Chapters',
    chapterCount: (n: number) => (n === 1 ? '1 chapter' : `${n} chapters`),
    speakers: 'Speakers',
    backToSeminars: 'Back to seminars',
    backToSeminar: 'Back to seminar',
    listen: 'Listen',
    video: 'Video',
    openVideo: 'Open / download video',
    videoUnsupported: "Your browser can't play this video. Download it or use YouTube instead.",
    videoUnsupportedNoDownload:
      "Your browser can't play this video. Try another browser (e.g. Chrome) or use YouTube instead.",
    downloadAudio: 'Download MP3',
    previous: 'Previous chapter',
    next: 'Next chapter',
  },
} as const
