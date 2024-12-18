## Режимы и команды запуска фреймворка PW

Дебаг-режим с инспектором (отладка) 
```
npx playwright test --debug
```

Прод-режим 
```
npx playwright test
```

##

## Просмотр отчета с разультатами тестирования
```
npx playwright show-report
```

##

## Обновить версию Playwright
```
npm i @playwright/test -D
```
##

## Запуск е2е тестов с ипользованием браузера Chrome 

`npx playwright test tests --project chromium`

## Запуск ui тестов для мобилки и планшета

`npx playwright test ui_mobile --project iPhone --project iPad
`
## Запуск ui тестов для десктопа

`npx playwright test ui_desktop --project chromium
`
## Запуск ui общих тестов для десктопа и мобилки

`npx playwright test ui_common
`
## При необходимосто обновления снэпшотов добавить к любому запуску параметр

`--update-snapshots
`

## Переменные окружения
BASE_URL = https://automationintesting.online/

### Запуск тестирования, 5 потоков, количество повторов при неудачное попытке - 0
### С использованием репортера для выгрузки результатов в формат line
``` 
npx playwright test --workers=5 --retries=0 --reporter=line
``` 

### Запуск тестирования API тесты с отладкой в хроме
``` 
npx playwright test tests e2e-api -debug chromium
``` 
### Запуск тестирования API тесты с отладкой в хроме с отчетом в формате html
``` 
npx playwright test tests e2e-api --reporter=html chromium
``` 

### Запуск тестирования UI тесты с отладкой в хроме
``` 
npx playwright test tests e2e-ui -debug chromium
``` 
### Запуск тестирования UI тесты с отладкой в хроме с отчетом в формате html
``` 
npx playwright test tests e2e-ui --reporter=html chromium
``` 
## 

## Запуск всех тестов с отчетами по умолчанию выбранными в конфиге 5 потоков без попыток повторных
``` 
npx playwright test tests --workers=5 --retries=0 
``` 