const chalk = require('chalk')
const fs = require('fs')
const package = require('../../template/package/packageTemplate')
const path = require('../../helper/path')
const readme = require('../../template/readme/readmeTemplate')

const addPackageName = (packageName) => {
    return package.packageTemplate().replace('packageName', packageName)
}

module.exports = {
    createPackageJson: (packageName) => {
        let packageJson = addPackageName(packageName)
        fs.writeFileSync(path.getProjectPath()+'/package.json', packageJson)
    },

    createReadme: () => {
        fs.writeFileSync(path.getProjectPath()+'/README.md', readme.readmeTemplate())
    }
}