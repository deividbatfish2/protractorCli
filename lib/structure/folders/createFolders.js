const shelljs = require('shelljs')

module.exports = {
    createFolders: (folderList) => {
            folderList.forEach(folder => shelljs.mkdir('-p', folder))
    }
}