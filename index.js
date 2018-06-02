const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

console.log(
    chalk.green(
        figlet.textSync('ProtractorCli', { horizontalLayout: 'full' })
    )
)