#### Inicializando Projeto de treino e modelo para outros futuros



#### Dentro de um unico controller em uma API REST, seguindo a regra do mercado, devemos ter no maximo 5 métodos, para uma melhor clareza e facil manutenção, algumas regras são:
### Métodos secundarios para testes
* index ->  este método é onde listamos todos os usuarios - Geralmente Utiliza: GET
* show -> este método é onde mostra um usuario - Geralmente Utiliza: GET


### Métodos Principais e obrigatorios(dependendo de aplicação pra aplicação)
* store/create -> este método é onde cria um novo usuario - Geralmente Utiliza: POST
* delete -> este método é onde apaga um usuario - Geralmente Utiliza: DELETE
* update -> este método é onde atualiza um usuario - Geralmente Utiliza: PATCH ou PUT

