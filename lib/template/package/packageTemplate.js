module.exports = {
  packageTemplate: () => {
    return `
{
    "name": "packageName",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "protractor"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "protractor": "^5.3.2"
    }
}`
  }
}