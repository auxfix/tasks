// 1.   Почему вообще node.js конкурентоспосбен? 
//      казалось бы:
//      1. JavaScript скриптовый язык, к тому же еще и браузерный - это же медленно!
//      2. EventLoop - однопоточный, это же уское место, всего один поток на огромное количество
//         запросов, это же очень медленно.
//      3. JavaScript - язык с динамической типизацией, это же ведет к тому что мы не поймаем много ошибок на этапе
//         компи ляции.
// Ответ:
//      1. V8 движок исполняющий js код компилирует код перед исполнением,
//         так же он итеративно оптимизирует его(TurboFan optimising compiller, JIT).
//         V8 также оптимизируется с учетом нужд node бэка.
//      2. EventLoop тратит сравнительно мало времени на обработку каждого запроса,
//         делигируя всю работу пулу потоков libuv. Отсюда следует что формула успеха для node.js
//         не выполянть тяжелых вычеслений в обработчике http запросов.
//         Так же можно распараллелить выполнение обработки запросов по количеству ядер в процессоре
//         с помощью модуля cluster.
//      3. TypeScript и ESLInt делают ситуацию лучше.

// 1.1  Что лучше и когда использовать EventLoop(Async I\O) vs Multithreads(Content Switching)
//      EventLoop:
//          - Большое количество запросов, где большая часть работы уходит на I\O.
//      Multithreads:
//          - Если в запросах происходят тяжелые вычесления на процессоре.
//          - Если запрос нужно изолировать в целях безопасности.


// 1.2  Не смотря на то что EventLoop - однопоточный, libuv пул потоков, тоже требует переключение
//      контекстов, значит ли это что нет никакого преимущества перед многопоточной моделью нет?
//      Что тут перключение контекстов, что там? Паритет?


// 2.   libuv, что это?
//      - библиотека выполняющая асинхронный ввод\вывод
//      - включает eventloop
//      - разработана специально для node.js, но в теории может быть использована
//        и в других проектах.


// 3.  V8 - в node.js. Можно ли его заменить на другой движок? Имеет ли это смысл?
//     - Да можно заменить, но это очень сложно, и поскольку много прикладных библиотек
//       расчитаны именно на V8, это не имеет практического смысла. Скорее даже это довольно
//       плохая идея.


// 4.  Бэк, дизайн.
//     - Если бы вы планировали новый прокект, какой фреймворк\стек выбрали бы для бэка?(node,Java,ASP.net)
//       почему?(social media platform for example, 10.000 rps, facebook for example has 75 mln rps)
//     - Какой для фронт-энда. Почему?
//     - Как относитесь к FullStack фреймворкам таким как Next, Nuxt, Remix.


// 5.  SQL/NoSQL базы данных, когда какие лучше использовать.
//     - Выбор по типу данных: 
//         SQL - Если ваши данные структурированы и имеют фиксированные отношения. 
//         NoSql - Если данные разнообразны и меняются.
//     - Производительность под нагрузкой: NoSQL быстрее.
//     - Команда разработчиков: Какаой экспертизы больше в команде.

// 6.  Способы оптимизации Node.js приложений.
//     - Сначала нужно понять где тормозит приложение(сеть, база дынных, или код)
//     тут помогут (PM2, Grafana).
//     - Посмотреть нет ли узких мест в коде которые можно оптимизировать с помощью алгоритмов
//     и принципов чистого.
//     - Старатся не бликировать EventLoop, и делать весь ввод вывод асинхронно.
//     - Кешировать частые запросы с помощью Redis.
//     - Настроить индексы базы данных(где можно.)
//     - Распаралелить выполенние обработки запросов с помощью cluster.
//     - Вынести тяжелые и долгие вычесления в WorkerThreads, что бы не блоктровать EventLoop.