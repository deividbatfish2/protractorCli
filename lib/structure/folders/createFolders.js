const shelljs = require('shelljs')

const playground = 'playground/'

module.exports = {
    createFolders: (folderList) => {
            folderList.forEach(folder => shelljs.mkdir('-p', playground+folder))
    }
}