# projpl002

Репозиторий для самостоятельного изучения тестирования с использованием playwright.

В папке проекта запустить в терминале команду: 
`npm init playwright`
Далее выбрать javascript и github actions.

Для запуска тестов находясь в рабочей директории можно использовать следующие команды:

  `npx playwright test` Runs the end-to-end tests;

  `npx playwright test --headed` Runs visible browsers;

  `npx playwright test --ui` Starts the interactive UI mode;

  `npx playwright test --project=chromium` Runs the tests only on Desktop Chrome;

  `npx playwright test example` Runs the tests in a specific file;

  `npx playwright test --debug` Runs the tests in debug mode;

  `npx playwright codegen` Auto generate tests with Codegen.

Для общего запуска тестов указать команду: `npx playwright test`.

Для вывода отчета на экран указать команду: `npx playwright show-report`