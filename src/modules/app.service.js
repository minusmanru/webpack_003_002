/*  4.1
    чтобы его экспортировать в index.js,  class AppService 
    можем написать  - export class AppService,
    и можем по дефолту возвращать этот клас , для этого пишем - export default class AppService {
    в качестве импорта в index.js , будем получать класс - class AppService
    продолжение в index.js 4.2
*/

export default class AppService {
    constructor(text) {
        this.text = text
    }

    log() {
        console.log('App Service ', this.text)
    }
}