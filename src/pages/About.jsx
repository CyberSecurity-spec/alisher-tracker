import React, { useEffect } from 'react'

export default function About() {

  useEffect(() => {
    const items = document.querySelectorAll('.lang')

    items.forEach((el, i) => {
      const fill = el.querySelector('.lang__fill')
      const level = el.dataset.level

      if (fill) {
        setTimeout(() => {
          fill.style.width = level + '%'
        }, 200 + i * 200)
      }
    })
  }, [])

  return (
    <section className="section" aria-label="Профиль">
      <div className="section__head">
        <div>
          <h2 className="section__title">Мой профиль</h2>
          <div className="section__sub">Рост, языки, навыки</div>
        </div>
        <div className="pill">About</div>
      </div>

      <div className="section__body">
        <div className="about-grid">

          <div className="about-card">
            <div className="about-card__title">Физические данные</div>
            <ul className="about-list">
              <li><span>Рост</span><strong>— 175 см</strong></li>
              <li><span>Вес</span><strong>— 57 кг</strong></li>
            </ul>
          </div>

          <div className="about-card">
            <div className="about-card__title">Языки</div>

            <div className="lang" data-level="90">
              <div className="lang__head">
                <span>Русский</span><strong>C1</strong>
              </div>
              <div className="lang__bar">
                <div className="lang__fill" />
              </div>
            </div>

            <div className="lang" data-level="55">
              <div className="lang__head">
                <span>Английский</span><strong>B1</strong>
              </div>
              <div className="lang__bar">
                <div className="lang__fill" />
              </div>
            </div>

            <div className="lang" data-level="25">
              <div className="lang__head">
                <span>Корейский</span><strong>A1</strong>
              </div>
              <div className="lang__bar">
                <div className="lang__fill" />
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card__title">Навыки</div>
            <ul className="about-tags">
              <li>Тренировки и дисциплина</li>
              <li>Web-разработка</li>
              <li>Архитектура и логика</li>
              <li>UI / UX</li>
              <li>Работа с ИИ</li>
              <li>CyberSecurity</li>
              <li>n8n</li>
              <li>Blog</li>
              <li>Prompt engineering</li>
              <li>HTML + CSS</li>
              <li>JavaScript</li>
              <li>Личные проекты</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
