// Общие вопросы

// 1. Расскажите о себе. Опыте.
// 2. Самое любимое место.
// 3. С какими процессами приходилось сталкиватся.
// 3. Почему именно фронтенд.
// 4. Что больше всего нравится в работе.
// 6. Что больше всего раздражает.

// HTML

// 1. Что такое семантика.(SEO, Special Needs, Text Readers).
//    Почему бы не верстать на одних дивах.
// 2. Flex/Grid - основные свойства.

// display: flex; — элемент становится flex-контейнером.
// flex-direction — определяет направление расположения flex-элементов:
// flex-wrap — определяет, будут ли flex-элементы переноситься на новую строку/колонку, если они не помещаются в одном ряду/колонке:
// justify-content — выравнивание элементов по главной оси:
// align-items — выравнивание элементов по поперечной оси:
// align-content — выравнивание множественных строк flex-элементов по поперечной оси (работает, только если задействовано свойство flex-wrap): 

// display: grid; — элемент становится grid-контейнером.
// grid-template-columns — определяет количество и размеры столбцов в сетке.
// grid-template-rows — определяет количество и размеры строк в сетке.
// grid-template-areas — позволяет именовать области сетки для упрощенного позиционирования элементов.
// grid-column-gap и grid-row-gap (или gap) — задают расстояние между колонками и строками, соответственно.
// justify-items — выравнивание элементов по горизонтали внутри их сеточных ячеек:
// align-items — выравнивание элементов по вертикали внутри их сеточных ячеек. 


// 3. Box-model
// Content (Контент): В плане CSS это область, где отображаются текст, изображения или другие медиа.
// Padding (Отступ): Пространство между контентом и границей (border). Оно увеличивает внутреннее пространство элемента, создавая больше места вокруг контента.
// Border (Граница): Линия, которая окружает отступ и контент. Она выделяет границы элемента, делая его более явным.
// Margin (Поле): Внешнее пространство за границей элемента. Это пространство отделяет элемент от других элементов на странице, влияя на внешний зазор между элементами.


// 4. box-sizing

// box-sizing: content-box;  Указывает ширину и высоту только для области контента.
// box-sizing: border-box;  Размеры: Указывает ширину и высоту для всего элемента (контент + padding + border).

// 5. Критический путь рендеринга (Critical Rendering Path) — это последовательность шагов, которые браузер выполняет для отображения веб-страницы на экране. Включает в себя следующие этапы:

//     Загрузка HTML:
//         Чтение HTML-документа и создание DOM (Document Object Model).
//     Загрузка CSS:
//         Загрузка и разбор CSS для построения CSSOM (CSS Object Model).
//     Загрузка JavaScript:
//         Выполнение JavaScript, который может изменить DOM/CSSOM.
//     Строительство рендер-дерева:
//         Объединение DOM и CSSOM для создания рендер-дерева.
//     Layout (вычисление размеров и положений):
//         Вычисление геометрии элементов на странице.
//     Покраска (Paint):
//         Рендеринг пикселей на экране.

//     Async/Defer    

// Оптимизация критического пути рендеринга сокращает время до первого полезного отображения (First Meaningful Paint), улучшая пользовательский опыт.


// 6. JavaScript. EventLoop. Однопоточный или многопоточный?
// setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O,  - macrotasks 

// process.nextTick, Promises, Object.observe, MutationObserver - microtasks 


// 7. TypeScript
//  Зачем он? Может лучше без него?
//  Что такое Generic, приходилось ли писать
//  void vs never

// 8. React
// - Классы Vs Функции. Разница. Зачем вообще придумали функции? Почему бы не остатся на классах?
// - Основные принципы функционального программирования:
//     Чистые функции:
//         Не имеют побочных эффектов.
//         Всегда возвращают одно и то же значение при одинаковых входных данных.
//     Имутабельность:
//         Данные не изменяются после создания.
//         Каждый раз, когда требуется изменение, создается новая версия данных.
//     Функции первого класса и высшего порядка:
//         Функции могут быть переданы как аргументы другим функциям.
//         Функции могут возвращать другие функции в качестве результатов.
// Способы оптимизации React-приложения:

// Мемоизация компонентов:
//      React.memo: Предотвращает повторный рендеринг компонента, если его пропсы не изменились.
//      Использование хуков мемоизации:
//      useMemo: Мемоизация значений, чтобы избежать лишних вычислений.
//      useCallback: Мемоизация функций, чтобы избежать создания новых функций при каждом рендере.
// Оптимизация рендеринга списка:
//      React.lazy и Suspense: Подгрузка компонентов по мере необходимости.
//      React.Fragment: Для группировки элементов без добавления дополнительных узлов в DOM.
// Код-сплиттинг и ленивая загрузка:
//      React.lazy и Dynamic Import: Подгрузка крупных модулей асинхронно.
// Переработка состояния:
//      useReducer: Управление сложными состояниями.
//      Context API: Избегание "Prop Drilling" при передаче данных через компонентное дерево.
// Избегание анонимных функций в JSX:
//      Писать функции вне тела компонента или мемоизировать их с помощью useCallback.
// Оптимизация производительности при изменении DOM:
//      Использовать refs для доступа к DOM элементам напрямую.
// Инструменты анализа производительности:
//      React Developer Tools: Для анализа производительности приложения.
//      Profiler API: Для мониторинга производительности рендеров.
// - Основные хуки:
// useState: Позволяет добавлять локальное состояние в функциональные компоненты.
// useEffect: Управляет побочными эффектами, такими как запросы к API или подписки на события.
// useContext: Получает значение контекста без использования Consumer, упрощая доступ к глобальному состоянию.
// useReducer: Используется для сложного управления состоянием, позволяет писать логики, подобные Redux.
// useCallback: Мемоизирует функции, предотвращает их пересоздание при каждом рендере, если зависимости не изменились.
// useMemo: Мемоизирует вычисленные значения, экономит ресурсы, пересчитывая их только при изменении зависимостей.
// useRef: Создаёт объект, хранящий изменяемое значение, которое не вызывает повторный рендер при обновлении.
// useImperativeHandle: Позволяет настройка экземпляра компонента, переопределяя значения, доступные через ref.
// useLayoutEffect: Похож на useEffect, но срабатывает синхронно после всех изменений DOM, перед тем как браузер перерисует.
// useDebugValue: Позволяет отображать метаданные о пользовательских хуках в инструментах разработчика React. 
//  - Чем useLayoutEffet отличается от useEffect.
//  - Правила хуков:
//  -- Вызывайте хуки только на верхнем уровне.
//  -- Вызывайте хуки только из функциональных компонентов или пользовательских хуков.
//  -- Название пользовательских хуков должно начинаться с "use".(а обязательно, будет работать без use?)

// 9. SSR 
// - SEO
// - PERFORMANCE(server)
// - user experience

// 10. Next.js
// - Приходилось ли работать
// - 12\13
// - Плюсы минусы 

// 11. - Styled Componennents
//     - отношение, плюсы минусы.

// 12. - Swagger
// - приходилось ли работать
// - зачем

// 13. State Managment
//  - MobX/Redux, TanStack Query
//  - с чем приходилось работать
//  - MobX vs Redux vs TanStack Query
//  - асинхронный код в Redux.
//  - Имуттабильность в redux, зачем, нужно ли
//  - Redux toolkit, что в него входит.

// 14. Тестер завел баг,
// "Тормозит сайт" - что будешь далеть, как инвистигировать?

// 14. Webpack
// Мигимальный конфиг.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Подключение плагина

module.exports = {
  // Точка входа
  entry: './src/index.js',
  
  // Точка выхода
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очистка выходной директории перед новой сборкой
  },
  
  // Загрузчики
  module: {
    rules: [
      {
        test: /\.js$/, // Регулярное выражение для JS файлов
        exclude: /node_modules/, // Исключение для node_modules
        use: {
          loader: 'babel-loader', // Использование babel-loader для транспиляции JS
        },
      },
    ],
  },
  
  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML файла
    }),
  ],
  
  // Режим
  mode: 'development', // Можно установить 'production' для оптимизации
};

// 15. Module Federation

// host - консьюмит ремоут
new ModuleFederationPlugin({
    name: 'host',
    remotes: {
      remoteApp: 'remoteApp@http://localhost:3002/remoteEntry.js' // Удаленный модуль
    },
    shared: ['react', 'react-dom'], // Совместно используемые зависимости
  })

// remote - удаленный микрофронт
new ModuleFederationPlugin({
    name: 'remoteApp',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/Button', // Экспортируемый модуль
    },
    shared: ['react', 'react-dom'], // Совместно используемые зависимости
  })

  // jsx - ремоут
  // Загрузка и использование ремоут-компонента
  const RemoteButton = React.lazy(() => import("remoteApp/Button"));

  const App = () => (
    <div>
      <h1>Host Application</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteButton />
      </React.Suspense>
    </div>
  );

// 16. Dev\Ops:  Jenkins, Docker, Kubernetes
// Node:
//     Что это: Сервер в кластере.
//     Для чего: Запускает контейнеры.
// Pod:
//     Что это: Группа контейнеров.
//     Для чего: Выполняет приложение.
// Deployment:
//     Что это: Управляет Pod'ами.
//     Для чего: Обновляет и масштабирует приложение.
// Service:
//     Что это: Сеть для доступа к Pod'ам.
//     Для чего: Распределяет трафик между ними.
// Ingress:
//     Что это: Управляет внешним доступом.
//     Для чего: Настраивает правила входящего трафика.

// Может ли k18s запускать не только Docker. Rocket например?

// Docker file:
// # Используем официальный образ Node.js в качестве базового образа
// FROM node:14-alpine

// # Создаем директорию для приложения внутри контейнера
// WORKDIR /usr/src/app

// # Копируем package.json и package-lock.json (если есть)
// COPY package*.json ./

// # Устанавливаем зависимости проекта
// RUN npm install

// # Копируем исходный код приложения в контейнер
// COPY . .

// # Среда исполнения (production или development)
// ENV NODE_ENV=production

// # ЗExpose-порт для взаимодействия с контейнером
// EXPOSE 3000

// # Команда для запуска приложения
// CMD ["npm", "start"]


// docker build -t my-nodejs-app .
// docker run -p 3000:3000 -d my-nodejs-app