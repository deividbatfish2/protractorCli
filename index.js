const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')

const structure = require('./lib/structure/structure')

clear()

console.log(
    chalk.green(
        figlet.textSync('ProtractorCli', { horizontalLayout: 'full' })
    )
)

const run = () => {
    structure.createStructureFolders()
}

run()