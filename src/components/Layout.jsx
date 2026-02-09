import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import GlobalWidgets from './GlobalWidgets.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  const title =
    pathname.startsWith('/about') ? 'Обо мне' :
    pathname.startsWith('/stats') ? 'Статистика' :
    'Сегодня'

  const subtitle =
    pathname.startsWith('/about') ? 'Кто я, языки и навыки' :
    pathname.startsWith('/stats') ? 'Итоги и динамика (будет пополняться)' :
    'Открыл — сразу понятно, что делать'

  return (
    <>
      <div id="top" />
      <Header />
      <main className="wrap" role="main">
        <section className="hero" aria-label="Вступление">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </section>

        {/* Всегда на всех страницах */}
        <GlobalWidgets />

        {/* Контент страницы */}
        <Outlet />
      </main>
    </>
  )
}
