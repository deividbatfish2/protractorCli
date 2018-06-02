const inquirer = require('inquirer')

module.exports = {
    askForFolders : () => {
        const questions = [
            {
                name: "folders",
                type: "list",
                message: "Você quer que eu crie a estrutura de pastas pra você?",
                choices: ["Sim", "Não"],
                default: "Sim"
            }
        ]
        return inquirer.prompt(questions)
    },

    askForPackageJson : () => {
        const questions = [
            {
                name: "package",
                type: "list",
                message: "Você quer que eu crie o package.json pra você?",
                choices: ["Sim", "Não"],
                default: "Sim"
            }
        ]
        return inquirer.prompt(questions)
    },

    askForProjetName : () => {
        const questions = [
            {
                name: "projectName",
                type: "type",
                message: "Qual será o nome do projeto?",
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Por favor informe o nome do projeto.';
                    }
                }
            }
        ]
        return inquirer.prompt(questions)
    },

    askForReadme : () => {
        const questions = [
            {
                name: "readme",
                type: "list",
                message: "Você quer que eu crie o README pra você?",
                choices: ["Sim", "Não"],
                default: "Sim"
            }
        ]
        return inquirer.prompt(questions)
    },
}