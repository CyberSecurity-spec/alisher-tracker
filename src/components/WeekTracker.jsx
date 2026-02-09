import React, { useEffect, useMemo, useState } from 'react'

function getWeekStartISO(d = new Date()) {
  const x = new Date(d)
  x.setHours(0,0,0,0)
  const jsDay = x.getDay()
  const mondayIndex = (jsDay + 6) % 7
  x.setDate(x.getDate() - mondayIndex)
  return x.toISOString().slice(0,10)
}
function addDaysISO(iso, days){
  const d = new Date(iso + "T00:00:00")
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0,10)
}
function formatRange(weekStartISO){
  const start = new Date(weekStartISO + "T00:00:00")
  const end = new Date(addDaysISO(weekStartISO, 6) + "T00:00:00")
  const opts = { day:'2-digit', month:'2-digit' }
  return `${start.toLocaleDateString('ru-RU', opts)} — ${end.toLocaleDateString('ru-RU', opts)}`
}
function todayIndexMonday(){
  const d = new Date()
  const jsDay = d.getDay()
  return (jsDay + 6) % 7
}
function calcStreak(state, todayIdx){
  let s = 0
  for(let i = todayIdx; i >= 0; i--){
    if(state[i]) s++
    else break
  }
  return s
}
function storageKey(weekStartISO){
  return `alisher_week_${weekStartISO}`
}

export default function WeekTracker() {
  const weekStart = useMemo(() => getWeekStartISO(), [])
  const tIdx = useMemo(() => todayIndexMonday(), [])
  const [state, setState] = useState(() => {
    try{
      const raw = localStorage.getItem(storageKey(weekStart))
      if(!raw) return Array(7).fill(false)
      const arr = JSON.parse(raw)
      if(!Array.isArray(arr) || arr.length !== 7) return Array(7).fill(false)
      return arr.map(Boolean)
    }catch{
      return Array(7).fill(false)
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey(weekStart), JSON.stringify(state))
  }, [weekStart, state])

  const doneCount = state.filter(Boolean).length
  const streak = calcStreak(state, tIdx)
  const labels = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

  function toggle(i){
    setState(prev => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }
  function reset(){
    setState(Array(7).fill(false))
  }

  return (
    <section className="section" aria-label="Неделя">
      <div className="section__head">
        <div>
          <h2 className="section__title">Неделя</h2>
          <div className="section__sub">Отмечай дни, чтобы держать ритм</div>
        </div>
        <div className="pill">Трекер</div>
      </div>

      <div className="section__body">
        <div className="week" aria-label="Трекер недели">
          <div className="week__head">
            <div>
              <div className="week__title">Неделя</div>
              <div className="week__meta">{formatRange(weekStart)}</div>
            </div>
            <button className="week__reset" type="button" onClick={reset}>Сброс</button>
          </div>

          <div className="week__row" role="group" aria-label="Дни недели">
            {labels.map((lab, i) => {
              const isDone = !!state[i]
              const isToday = i === tIdx
              return (
                <button
                  key={lab}
                  className={'day' + (isDone ? ' is-done' : '') + (isToday ? ' is-today' : '')}
                  type="button"
                  aria-pressed={isDone}
                  onClick={() => toggle(i)}
                >
                  <span className="day__label">{lab}</span>
                </button>
              )
            })}
          </div>

          <div className="week__footer">
            <span className="week__count">{doneCount} / 7</span>
            <span className="week__streak">Серия: {streak}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
