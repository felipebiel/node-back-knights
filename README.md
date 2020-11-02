# Node back-end knights

O desafio Node back-end knights consiste em criar uma API com node, express e mongoDB.

### Como executar o projeto

O projeto roda em container docker utilizando o Makefile.

1. Para Iniciar o build do container
```sh
$ make setup
```
2. Para executar o container do  projeto
```sh
$ make start
```

3. Para encerrar o container do projeto
```sh
$ make stop
```

### ENDPOINTS da API

1. **(GET)** **_"/knights/"_** - *Retorna todos os knights.*
2. **(GET)** **_"/knights/?filter=heroes"_** - *Retorna somente os heróis.*
3. **(POST)** **_"/knights/"_** - *Cria um novo knights.*
4. **(GET)** **_"/knights/{id}/"_** - *Retorna o knights com o id especifico.*
5. **(DELETE)** **_"/knights/{id}/"_** - *Apaga o knights.*
6. **(PUT)** **_"/knights/{id}/"_** - *Altera somente o apelido do knights*