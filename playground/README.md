
# Projeto de teste e2e com framework protractor.

A estrutura proposta para seguir as boas praticas na escrita dos testes a seguinte:
- package.json
- protractor.conf.js
- README.md
- e2e
    - helper
    - pageObjects
    - specs
- relatorio

### Sobre a estrutura

* protractor.conf.js: neste arquivo ficam todas as configurações necessárias para 
    executar os testes. Configurações como suites de teste, relatorios entre outras
    ficam nese arquivo.
    > Obs: Este cliente opta por contralar diretamente o navegador. "directConnect: true"
* e2e: nesta pasta ficam todos os arquivos referentes aos testes, para uma melhor organização ela foi dividida em:
    * helper: Aqui devem ficar as classes e funções auxiliares aos testes, não tendo relação direta como nenhuma das telas a serem testadas. um exemplo de helper seria um gerador de CPF por exmplo.
    * pageObjects: Nos incetivamos que você utilize o design patner Page Objects. Nesta pasta ficaram as classes e metódos que encapsulam as funcionalidades de uma determinada pagina.
    * specs: Aqui ficam os testes em si. As funções que realizam os testes atrasves das funcionalidades providas pelas page objects.
* relatorio: Caso seja configurado, esta pasta deve conter os relatórios gerados durante a execução dos testes.

### Excutar testes
Para executar os testes primeiro é necessário instalar as dependencias, na pasta raiz do projeto execute:
> npm i

Após instalar as dependências é necessário baixar os drives para controlar os respectivos navegadores:
> node_modules/.bin/webdriver-manager update

Adicione os testes no arquivo protractor.conf.js e para executa-los execute:
> npm run test

### Mais informações
Em caso de duvidas consulte a documentação oficial do protractor em [www.protractortest.org](https://www.protractortest.org/#/)

Recomendamos também a leitura do guia de boas práticas em [www.protractortest.org/#/style-guide](https://www.protractortest.org/#/style-guide)

Erros e sujestões podem ser abertas atraves do repositório oficial no github:
> [github.com/deividbatfish2/protractorCli](https://github.com/deividbatfish2/protractorCli)