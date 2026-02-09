import React from 'react'

const WEEK_PLAN = [
  {
    day: 'Понедельник',
    exercises: [
      'Тренировка — Фулбоди',
      'Приседания — 4×15–20',
      'Отжимания — 4×Макс',
      'Подтягивания — 3×Макс',
      'Выпады — 3×12–15/нога',
      'Pike push-ups — 3×8–12',
      'Планка — 3×45–60 сек'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  },

  {
    day: 'Вторник',
    exercises: [
      'ОТДЫХ',
      'Еда + сон',
      'Прогулка 20–30 мин'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  },

  {
    day: 'Среда',
    exercises: [
      'Тренировка — Фулбоди',
      'Приседания — 4×15–20',
      'Отжимания — 4×Макс',
      'Подтягивания — 3×Макс',
      'Выпады — 3×12–15/нога',
      'Pike push-ups — 3×8–12',
      'Планка — 3×45–60 сек'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  },

  {
    day: 'Четверг',
    exercises: [
      'ОТДЫХ',
      'Еда + сон',
      'Лёгкая активность'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  },

  {
    day: 'Пятница',
    exercises: [
      'Тренировка — Фулбоди',
      'Приседания — 4×15–20',
      'Отжимания — 4×Макс',
      'Подтягивания — 3×Макс',
      'Выпады — 3×12–15/нога',
      'Pike push-ups — 3×8–12',
      'Планка — 3×45–60 сек'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  },

  {
    day: 'Суббота',
    exercises: [
      'ОТДЫХ',
      'Прогулка / восстановление'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  },

  {
    day: 'Воскресенье',
    exercises: [
      'ПОЛНЫЙ ОТДЫХ',
      'Релакс и восстановление'
    ],
    study: [
      'Английский — 1 час',
      'Корейский — 1 час 20 мин'
    ]
  }
]

// План по дням меняешь в коде (один раз)

export default function Today() {
  const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
  const todayName = days[new Date().getDay()]

  const sorted = [...WEEK_PLAN].sort((a, b) =>
    a.day === todayName ? -1 : b.day === todayName ? 1 : 0
  )

  return (
    <section className="section" aria-label="План по дням недели">
      <div className="section__head">
        <div>
          <h2 className="section__title">План по дням недели</h2>
          <div className="section__sub">Сегодняшний день — сверху</div>
        </div>
        <div className="pill">Пн–Вс</div>
      </div>

      <div className="section__body">
        <div className="weekplan">
          {sorted.map(d => {
            const isToday = d.day === todayName

            return (
              <div
                key={d.day}
                className={'daycard' + (isToday ? ' daycard--today' : '')}
              >
                <div className="daycard__head">
                  <div>
                    <div className="daycard__title">{d.day}</div>
                    <div className="daycard__sub">Упражнения + учёба</div>
                  </div>
                </div>

                <div className="daycard__grid">
                  <div className="daycard__label">Упражнения</div>
                  <div className="daycard__static">
                    {d.exercises.map((x, i) => (
                      <div key={i}>• {x}</div>
                    ))}
                  </div>

                  <div className="daycard__label">Учёба</div>
                  <div className="daycard__static">
                    {d.study.map((x, i) => (
                      <div key={i}>• {x}</div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
