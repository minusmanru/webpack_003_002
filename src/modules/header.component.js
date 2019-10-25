/* 7.1
Что бы импортировать библиотеку, из папки node_modules, путь со слешами писать не нужно, пишем код ниже:
*/
import $ from 'jquery'


$('<h1 />') // создаем заголовок
    .text('Hello world from JQ')
    .css({
        textAlign: 'center',
        color: '#428eff',
        border: '1px solid #ccc'
    })
    .appendTo($('header')) // получаем доступ к элементу html header 