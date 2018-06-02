const fs = require('fs')
const package = require('../../template/package/packageTemplate')
const path = require('../../helper/path')
const readme = require('../../template/readme/readmeTemplate')
const protractorConf = require('../../template/protractorConf/protractorConfTemplate')
const exemple = require('../../template/exemple/exempleSpecTemplate')

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
    },

    createProtractorConf: () => {
        fs.writeFileSync(path.getProjectPath()+'/protractor.conf.js', protractorConf.protractorConfTemplate())
    },

    createExemple: () => {
        fs.writeFileSync(path.getProjectPath()+'/e2e/pageObjects/result.po.js', exemple.createPageObjectResult())
        fs.writeFileSync(path.getProjectPath()+'/e2e/pageObjects/google.po.js', exemple.createPageObjectGoogle())
        fs.writeFileSync(path.getProjectPath()+'/e2e/specs/exemple.spec.js', exemple.createSpec())
    }
}