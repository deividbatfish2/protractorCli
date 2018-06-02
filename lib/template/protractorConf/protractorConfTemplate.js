module.exports = {
    protractorConfTemplate: () => {
        return `
exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome', // Define qual browser deve ser utilizado na realização dos testes.
        shardTestFiles: true, //Para execução dos testes em paralelo..
        maxInstances: 5,
    },
    specs: ['./e2e/specs/exemple.spec.js'],

    onPrepare : () => {
        browser.driver.manage().window().maximize()
        browser.ignoreSynchronization = true
    }
}`
    }
}