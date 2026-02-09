# Алишер — Прогресс тренировок (React + SWC + Vite)

## Запуск локально
```bash
npm install
npm run dev
```

## Сборка
```bash
npm run build
npm run preview
```

## GitHub Pages
- В `vite.config.js` уже стоит `base: './'`.
- Собери проект: `npm run build`
- Залей содержимое папки `dist/` в GitHub Pages (или через GitHub Actions).

### Если роуты не работают на GitHub Pages
Самый простой вариант: перейти на HashRouter.
Открой `src/main.jsx` и замени BrowserRouter на HashRouter.
