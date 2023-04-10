# Backend em Node.js para o Projeto Integrador

Esse é o Backend em Node.js com MySQL do Projeto Integrador do Grupo 001, da Turma 001 de 2023 da Região de Campinas, da UNIVESP.




## Instalação

Instale backend-nodejs com npm

```bash
  git clone https://github.com/univespamericanapi/ProjetoIntegradorBack.git
  cd ProjetoIntegradorBack
  npm install
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar renomear os arquivos na pasta app/config:

`segredos.template.js para segredos.config.js`
`db.template.js para db.config.js`

Após renomear deve alterar as veriáveis de ambiente dos arquivos:

`segredoConfig`
em segredos.config.js, é a chave secreta de encriptação do JWT
`contaAdminConfig`
em segredos.config.js, é a conta do primeiro admin para que possa criar as demais

`HOST`
`USER`
`PASSWORD`
`DB`
em db.config.js, são as configurações de acesso ao banco de dados.
Só é necessário criar o banco de dados, as tabelas e relacionamentos serão criados pela api.

## Execução

Use o comando para executar o servidor:

```bash
  npm start
```

Na primeira execução, o código irá criar todas as tabelas, relacionamentos e os dados das tabelas categoria, cidade, estado, cargo e usuario.

## Execução de desenvolvedor

Use o comando para executar o servidor:

```bash
  npm run dev
```

Essa opção sempre fará um drop em todas as tabelas e recriará o banco.
    
## Autores

- [Guilherme Celestino de Lima](https://www.github.com/)
- [Guilherme Cioldin Dainese](https://www.github.com/)
- [Jhonatan Cassante de Brito](https://www.github.com/jhonatancassante)
- [João Pedro de Oliveira Ferrera](https://www.github.com/JPedroUNIVESP)
- [Larissa Chan Yuk Hei](https://www.github.com/LarissaChan)
- [Natalia Santana Ventura](https://www.github.com/)
- [Rodrigo Somaggio dos Santos](https://www.github.com/)
- [Yslander Martins de Souza](https://www.github.com/)

## Licença

[![MIT License](https://img.shields.io/badge/license-MIT-green)](https://github.com/univespamericanapi/ProjetoIntegradorBack/blob/main/LICENSE)