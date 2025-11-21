export interface Lesson {
  id: number;
  title: {
    ru: string;
    en: string;
  };
  content: {
    ru: string;
    en: string;
  };
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: {
      ru: 'Старт для фрилансеров',
      en: 'Getting Started as a Freelancer'
    },
    content: {
      ru: `Фриланс — это не просто "сидеть дома и делать задачки из интернета".
Это целый набор навыков: как общаться, как держать слово, как не перегореть и при этом зарабатывать.

Представь, что ты выходишь на новую работу. Только вместо офиса — платформа, вместо начальника — клиенты, вместо оклада — твой личный результат.

Начнём с трёх базовых шагов.

1. Оформи профиль как витрину

Клиент видит тебя через профиль. Если он пустой или кривой — шансов мало.

Аватар: не мем, не рандомная картинка. Либо твоё лицо, либо аккуратный нейтральный образ.

Описание: кто ты и что делаешь в 2–4 предложениях.
Пример: «Front-end разработчик, делаю адаптивные сайты и лендинги. Люблю аккуратный интерфейс, читаемый код и быстрые загрузки.»

Навыки: технологии, направления (React, дизайн лендингов, копирайтинг, монтаж, таргет и т.п.).

Примеры работ: даже если проектов мало, лучше честно показать 2–3 штуки, чем ничего.

2. Выбери 1–2 сильных направления

Ошибка новичка — «я всё умею, берите всё подряд».
Так не работает. На старте лучше быть понятным, чем «универсальным солдатом».

Выбери то, что реально умеешь и можешь делать качественно.

Не разбрасывайся на шесть услуг сразу.

Остальное можно докрутить позже, когда наберёшься опыта и отзывов.

3. Настрой стартовые цены

Твоя цель на старте — не "сорвать куш", а набрать первые успешные проекты.

Посмотри, какие цены у других в твоей нише.

Поставь немного ниже рынка, чтобы мотивировать клиентов выбрать именно тебя.

Не падай до абсурда: слишком дёшево вызывает недоверие.

Главная мысль:
Фриланс — это марафон. Сегодня ты ставишь аватар и пишешь первое описание. Через пару месяцев у тебя уже профиль с отзывами и портфолио. Ты уже на старте — дальше просто двигаться вперёд.`,
      en: `Freelancing is not just "sitting at home and doing tasks from the internet."
It's a whole set of skills: how to communicate, how to keep your word, how not to burn out while earning money.

Imagine starting a new job. But instead of an office — a platform, instead of a boss — clients, instead of a salary — your personal results.

Let's start with three basic steps.

1. Set up your profile as a showcase

Clients see you through your profile. If it's empty or poorly done — your chances are slim.

Avatar: not a meme, not a random picture. Either your face or a neat neutral image.

Description: who you are and what you do in 2-4 sentences.
Example: "Front-end developer, I create responsive websites and landing pages. I love clean interfaces, readable code, and fast loading times."

Skills: technologies, areas (React, landing page design, copywriting, video editing, targeting, etc.).

Work examples: even if you have few projects, it's better to honestly show 2-3 pieces than nothing.

2. Choose 1-2 strong areas

A beginner's mistake is "I can do everything, take me for anything."
It doesn't work that way. At the start, it's better to be clear than a "universal soldier."

Choose what you really know and can do with quality.

Don't spread yourself across six services at once.

You can add more later when you gain experience and reviews.

3. Set starting prices

Your goal at the start is not to "hit the jackpot" but to get your first successful projects.

Look at what prices others in your niche have.

Set slightly below market to motivate clients to choose you.

Don't go absurdly low: too cheap raises distrust.

Key takeaway:
Freelancing is a marathon. Today you set an avatar and write your first description. In a couple of months, you'll have a profile with reviews and a portfolio. You're already starting — just keep moving forward.`
    }
  },
  {
    id: 2,
    title: {
      ru: 'Как получить первый заказ',
      en: 'How to Get Your First Order'
    },
    content: {
      ru: `Первый заказ всегда ощущается как "невозможно". Кажется, что без отзывов никто не выберет. Но есть схема, которая реально работает.

1. Временная скидка на старте

Это не про "дёшево навсегда", а про осознанный старт.

Сделай цену на 20–30% ниже среднего по рынку.

Откровенно напиши: сейчас набираешь первые отзывы, поэтому цена ниже.

Как только появятся 3–5 успешных сделок — поднимаешь прайс.

Клиенту легче рискнуть с новичком, когда цена приятная и честно объяснена.

2. Пиши живые отклики, не копипасту

Шаблонные сообщения типа «Здравствуйте, готов выполнить ваш заказ» клиенты видят десятками. Они ничего о тебе не говорят.

Сделай так:

Перескажи задачу своими словами: покажи, что ты понял суть.

Коротко опиши, как будешь решать: 2–3 пункта.

Дай пример похожей работы (если есть).

Покажи план: "Сначала сделаем это, затем это. Срок — такой-то."

Клиент должен почувствовать, что ты ответил именно ему, а не "кому угодно".

3. Дай маленький бонус

Сильный ход на старте — добавить бонус, который не ломает тебя, но радует клиента.

Примеры:

«Сделаю одну дополнительную правку бесплатно.»

«Запишу короткое видео с объяснением результата.»

«Сделаю адаптацию под мобильные как бонус.»

Это повышает ощущение ценности, даже при небольшой цене.

4. Реагируй быстро

Во фрилансе скорость ответа — огромный плюс.

Старайся отвечать на новые запросы в течение часа (когда ты онлайн).

Если занят, напиши: «Сейчас не у компьютера, смогу подробно ответить через …».

Клиенту важно видеть, что исполнитель живой и на связи.

Главная мысль:
Первые заказы — самые сложные. Но как только появляется первый успешный кейс и отзыв, дальше становится гораздо легче: у тебя уже есть доказательство, что ты умеешь работать.`,
      en: `The first order always feels "impossible." It seems like without reviews, no one will choose you. But there's a strategy that really works.

1. Temporary discount at the start

This isn't about "cheap forever," but about a conscious start.

Set your price 20-30% below the market average.

Be honest: you're collecting first reviews, so the price is lower.

Once you get 3-5 successful deals — raise your prices.

Clients find it easier to risk with a newcomer when the price is pleasant and honestly explained.

2. Write personalized proposals, not copy-paste

Template messages like "Hello, ready to complete your order" are seen by clients by the dozens. They say nothing about you.

Do this instead:

Rephrase the task in your own words: show that you understood the essence.

Briefly describe how you'll solve it: 2-3 points.

Give an example of similar work (if any).

Show a plan: "First we'll do this, then that. Timeline — such and such."

The client should feel you responded specifically to them, not "to anyone."

3. Give a small bonus

A strong move at the start — add a bonus that doesn't break you but pleases the client.

Examples:

"I'll do one additional revision for free."

"I'll record a short video explaining the result."

"I'll do mobile adaptation as a bonus."

This increases perceived value, even with a small price.

4. Respond quickly

In freelancing, response speed is a huge plus.

Try to respond to new requests within an hour (when you're online).

If busy, write: "Not at the computer now, will be able to respond in detail in..."

It's important for the client to see the contractor is alive and available.

Key takeaway:
First orders are the hardest. But once the first successful case and review appears, it becomes much easier: you already have proof that you know how to work.`
    }
  },
  {
    id: 3,
    title: {
      ru: 'Как общаться с клиентами',
      en: 'How to Communicate with Clients'
    },
    content: {
      ru: `Клиент запоминает не только результат, но и опыт работы с тобой. Можно сделать круто, но общаться так, что человек не захочет возвращаться.

1. Пиши коротко и структурно

Никто не любит огромные простыни текста без абзацев.

Делай короткие абзацы.

В начале письма отвечай на главный вопрос.

Если нужно — используй списки: «Смотрите, предлагаю так: 1)… 2)… 3)…».

Клиент должен легко "сканировать" сообщение глазами.

2. Уточняющие вопросы — это профессионально

Молчаливый исполнитель, который просто кивает и делает "как понял", часто попадает в переделки.

Примеры вопросов:

«Какой для вас приоритет: скорость или максимальное качество?»

«Есть ли примеры работ/сайтов/дизайнов, которые вам нравятся?»

«Что важнее: минималистичность или детализация?»

Это не "занудство" — это забота о том, чтобы сделать то, что действительно нужно.

3. Держи в курсе, даже если всё в порядке

Молчание — плохо. Клиент не знает, забросил ты работу или активно делаешь.

Отправь короткое сообщение:

«Сделал первую часть, прикрепляю предварительный вариант для обратной связи.»

«Закончил текст, остался дизайн — выложу завтра к вечеру.»

Даже если ты ещё не готов показать полный результат, дай понять, что проект жив.

4. Не обещай то, что не уверен

Если клиент просит: «Можешь успеть до завтра?» — а ты не уверен, лучше честно:

«Если сильно поджимает, попробую. Но по опыту, чтобы сделать качественно, реалистичнее послезавтра к обеду.»

Лучше согласовать реалистичный срок, чем облажаться в последний момент.

5. Контролируй эмоции

Иногда клиенты бесят: вносят десятую правку, кидают в 00:00, пишут путано.

Но внешне оставайся спокойным:

«Понял, посмотрю и отвечу в течение пары часов.»

«Давайте уточню, что именно изменить.»

Эмоции в тексте читаются легко. Профессионал держит себя в руках.

Главная мысль:
Клиент платит не только за результат, но и за комфорт в общении. Если ты вовремя отвечаешь, внятно объясняешь и не создаёшь нервотрёпку — с тобой захотят работать снова.`,
      en: `Clients remember not only the result but also the experience of working with you. You can deliver great work but communicate in a way that makes them not want to return.

1. Write short and structured

No one likes huge walls of text without paragraphs.

Make short paragraphs.

Answer the main question at the start of the message.

If needed — use lists: "Look, I suggest this: 1)... 2)... 3)..."

The client should be able to easily "scan" the message with their eyes.

2. Clarifying questions are professional

A silent contractor who just nods and does "as understood" often gets into trouble.

Example questions:

"What's your priority: speed or maximum quality?"

"Are there any examples of work/websites/designs you like?"

"What's more important: minimalism or detail?"

This isn't "being annoying" — it's caring about doing what's really needed.

3. Keep them informed, even if everything is fine

Silence is bad. The client doesn't know if you abandoned the work or are actively doing it.

Send a short message:

"Finished the first part, attaching a preliminary version for feedback."

"Completed the text, design remains — will post tomorrow evening."

Even if you're not ready to show the full result, let them know the project is alive.

4. Don't promise what you're not sure of

If the client asks: "Can you finish by tomorrow?" — and you're not sure, better be honest:

"If it's really urgent, I'll try. But from experience, to do it quality, more realistic would be the day after tomorrow by noon."

Better to agree on a realistic deadline than to fail at the last moment.

5. Control your emotions

Sometimes clients are annoying: make the tenth revision, message at midnight, write confusingly.

But stay calm on the outside:

"Got it, will look and respond within a couple of hours."

"Let me clarify what exactly to change."

Emotions in text are easy to read. A professional keeps composure.

Key takeaway:
Clients pay not only for the result but also for comfort in communication. If you respond on time, explain clearly, and don't create stress — they'll want to work with you again.`
    }
  }
];
