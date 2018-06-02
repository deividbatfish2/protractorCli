const path = require('path')
const playground = 'playground/'

module.exports = {
    getProjectPath: () => {
        return path.resolve(playground)
    }
}