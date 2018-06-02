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

const run = async () => {
    await structure.createStructureFolders()
    await structure.createPackageJson()
    await structure.createReadme()
}

run()