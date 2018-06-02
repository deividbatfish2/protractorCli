const inquirer = require('../inquirer/inquirer')
const folderList = require('./folders/foldersList')
const folder = require('./folders/createFolders')
const file = require('./files/files')

module.exports = {
    createStructureFolders: async () => {
        const answers = await inquirer.askForFolders()

        if (answers.folders === 'Sim') {
            folder.createFolders(folderList)
        }
    },

    createPackageJson: async () => {
        let answers = await inquirer.askForPackageJson()

        if (answers.package === 'Sim') {
            answers = await inquirer.askForProjetName()
            await file.createPackageJson(answers.projectName)
        }
    },

    createReadme: async () => {
        const answers = await inquirer.askForReadme()

        if (answers.readme === 'Sim') {
            file.createReadme()
        }
    }
}