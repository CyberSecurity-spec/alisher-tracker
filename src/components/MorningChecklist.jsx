import React, { useEffect, useMemo, useState } from 'react'

const DEFAULT_ITEMS = [
  { id: 'water_wash', text: 'Утро: вода + умыться' },
  { id: 'stretch_10', text: 'Растяжка 10 минут' },
  { id: 'workout', text: 'Тренировка (по плану дня)' },
  { id: 'english_20', text: 'Английский 20 минут' },
  { id: 'korean_15', text: 'Корейский 20 минут' },
]

// ⚠️ Тут ты меняешь постоянные пункты один раз.
// Галочки сохраняются на текущий день (утром новый день = чисто).

export default function MorningChecklist() {
  const todayISO = useMemo(() => new Date().toISOString().slice(0,10), [])
  const key = useMemo(() => `alisher_fixed_check_${todayISO}`, [todayISO])

  const [state, setState] = useState(() => {
    try{
      const raw = localStorage.getItem(key)
      if(!raw) return {}
      const obj = JSON.parse(raw)
      if(typeof obj !== 'object' || !obj) return {}
      return obj
    }catch{
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  const dateLabel = useMemo(() => {
    const now = new Date()
    return now.toLocaleDateString('ru-RU', { weekday:'long', day:'2-digit', month:'long' })
  }, [])

  function toggle(id){
    setState(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="section" aria-label="Что делать утром">
      <div className="section__head">
        <div>
          <h2 className="section__title">Что делать утром</h2>
          <div className="section__sub">Постоянный список. Просто отмечай ✅</div>
        </div>
        <div className="pill">{dateLabel}</div>
      </div>

      <div className="section__body">
        <div className="todo">
          <ul className="todo__list" aria-label="Постоянный чеклист">
            {DEFAULT_ITEMS.map(item => {
              const done = !!state[item.id]
              return (
                <li key={item.id} className="todo__item">
                  <div className="todo__left">
                    <button
                      className={'todo__check' + (done ? ' is-on' : '')}
                      type="button"
                      aria-pressed={done}
                      aria-label="Отметить"
                      onClick={() => toggle(item.id)}
                    >
                      {done ? '✓' : ''}
                    </button>
                    <div className={'todo__text' + (done ? ' is-done' : '')}>{item.text}</div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="todo__hint">Галочки сохраняются на сегодня и утром сбрасываются ✅</div>
        </div>
      </div>
    </section>
  )
}
