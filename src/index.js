
import React from 'react' // 16.1
import {render} from 'react-dom' // 16.2 метод для запуска приложения

/*  0
    конфигурируем package.json - пишем команду npm init
*/
/*  1
    install webpack - npm install --save-dev webpack  webpack-cli
    создаем папку src и в ней index.js
    создаем папку  dist - в которой будут статические файлы скомпилированные вебпаком
*/
/*  2
    создаем в src, файл конфиг для webpack - webpack.config.js
*/





/*  3
    webpack поредоставляет нативную возможность использовать модули,
    с  использование ES6 импортов
    создаём папку modules в src
    и в ней три модуля с вариациями импортов
    и переходим в config.js - в нём продолжение 
*/

/*  3.2 
    продолжение из config.js 
    импортируем из config.js в  index.js

    т.к. из config.js экспортируется константа, то 
    получать будем объект с помощью диструктуризации - import {config} from './modules/config'

    это первый способ импорта-экспорта
*/
import {config} from './modules/config'
console.log(config.key)
console.log(config.new)
import App from './App' // 16.3
import './modules/ts.module' // 19.2

/*  4  
    продолжение в app.service.js - 4.1
    продолжение из app.service.js 4.2
    импортируем из app.service.js  в  index.js пишем - import AppService from './modules/app.service'
    
    это второй способ импорта-экспорта
*/
import AppService from './modules/app.service'
// 4.3 передаём текст в new AppService('hell w'), и вызываем метод  .log()  объекта service   - service.log()
const service = new AppService('hell w')
service.log()



/*  5  
    
    импортируем из header.component.js  в  index.js пишем - import  from './modules/header.component'
    
    это третий способ импорта-экспорта
*/

//import './modules/header.component'                 18.1         удаляем header.component 
 


/*  6
   ПЛАГИНЫ - классы которые добавляют функционал
   Ставим npm install --save-dev html-webpack-plugin
   переходим в webpack.config.js - продолжение в нём  - 6.1  
*/


console.log('Hello World from src/index.js');


// 7 РАБОТА С БИБЛИОТЕКАМИ - инсталим библу локально npm install --save jquery        7.1   продолжение в header.components.js

// 8 LOADERS  npm install --save-dev css-loader    8.1 продолжение в webpack.config.js
import './css/index.css' // просто импортируем стили
//import css from './css/index.css'
//console.log(css.toString()); 
import './less/index.less' // 14.2  
import './scss/index.scss' // 15.2 
// 9 npm install --save-dev style-loader     9.1 продолжение в webpack.config.js

/*  10
   Извлекаем CSS в отдельный файл  
   npm install --save-dev mini-css-extract-plugin
   переходим в webpack.config.js - продолжение в нём - 10.1

    npm install --save-dev optimize-css-assets-webpack-plugin  

*/

// 12 npm install -D webpack-dev-server      12.1 продолжение в webpack.config.js
// 13  babel    npm install --save-dev @babel/core @babel/cli @babel/preset-env      npm install --save @babel/polyfill   npm install -D babel-loader  
// 13.1 продолжение в webpack.config.js  13.2  создаем и конфигурируем файл .babel

// 
/*  14 npm install less-loader less  --save-dev
   сщздаем папку с файлом less  
   
   переходим в webpack.config.js - продолжение в нём - 14.1

   14.2 page Up 
    
*/ 

/*  15 npm install sass-loader node-sass  --save-dev
   сщздаем папку с файлом less  
   
   переходим в webpack.config.js - продолжение в нём - 15.1

   15.2 page Up 
    npm install sass-loader node-sass
*/ 

/*  16 npm i -S react react-dom
   16.1 page Up
*/ 

render(<App />, document.getElementById('app'))

// 17 react babel            npm install --save-dev @babel/preset-react        17.1  в файл babel   пишем -  "@babel/preset-react"
// 18 удаляем header component, а код переносим в 

// 19    npm install --save-dev @babel/preset-typescript    в файл babel   пишем -   "@babel/preset-typescript"