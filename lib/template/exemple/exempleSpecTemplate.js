module.exports = {
    createSpec: () => {
        return `
const GooglePage = require('../pageObjects/google.po')

describe('O sistema deve realizar uma consulta no google pela palavra teste, o google deve retornar 10 resultados', () => {
    it('Realiza consulta no google, o resultado deve conter 10 links', () => {
        const googlePage = new GooglePage()

        googlePage.irParaHome()

        const resultPage = googlePage.pesquisar('teste')

        expect(resultPage.totalDeResultados()).toBe(10)
    })
})`
    },
    
    createPageObjectGoogle: () => {
        return `
const ResultPage = require('./result.po')

class GooglePage {
    constructor () {
        this.q = element(by.name('q'))
        this.btnSearch = element(by.name('btnK'))
    }

    irParaHome () {
        browser.get('https://www.google.com/')
    }

    pesquisar (texto) {
        this.q.sendKeys(texto)
        this.btnSearch.click()
        return new ResultPage()
    }
}

module.exports = GooglePage`
    },

    createPageObjectResult: () => {
        return `
class ResultPage {
    constructor () {
        this.resultList = element.all(by.className('g'))
    }

    totalDeResultados () {
        return this.resultList.count()
    }
}

module.exports = ResultPage`
    }
}