import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="topbar" role="banner">
      <div className="topbar__inner">
        <a className="brand" href="#top" aria-label="Наверх">
          <img  src="./logo.png" alt="Логотип Алишера" className="brand__mark"/>
          <span className="brand__text">
            <span className="brand__name">Алишер</span>
            <span className="brand__sub">Прогресс тренировок</span>
          </span>
        </a>

        <nav className="nav" aria-label="Навигация">
          <NavLink className={({isActive}) => 'nav__link' + (isActive ? ' is-active' : '')} to="/about">Обо мне</NavLink>
          <NavLink className={({isActive}) => 'nav__link' + (isActive ? ' is-active' : '')} to="/today">Сегодня</NavLink>
          <NavLink className={({isActive}) => 'nav__link' + (isActive ? ' is-active' : '')} to="/stats">Статистика</NavLink>
        </nav>
      </div>
    </header>
  )
}
