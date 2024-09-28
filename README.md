## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -D

o docker-compose vai criar um container de um MySQL e a estrutura de tabelas necessarias, você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**

### Rode o seguinte comando para baixar as dependencias:
    
    npm i

### Para Rodas as migrations e as seeds para preencher o banco com dados inicias, é necessario rodar o seguinte comando:

    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

### Para iniciar o servidor express basta executar o seguinte comando:

    npm start
    ou
    yarn start

### Modelagem do banco de dados.

Ao criar três tabelas separadas para armazenar informações de endereço do usuário - "street" (logradouro), "city" (cidade) e "state" (estado) - optei por adotar uma abordagem de normalização de banco de dados. Esta abordagem foi escolhida para evitar redundâncias nos dados e garantir uma estrutura de banco de dados mais eficiente e organizada.

Quanto à decisão de não criar uma tabela separada para bairros, isso pode ser justificado pelo fato de que os nomes de bairros podem variar bastante e não possuem uma padronização amplamente aceita. Ao invés disso, é comum incluir o nome do bairro como parte do endereço da rua na tabela "street", o que pode ser mais prático e flexível para lidar com essas variações.


### Rotas da API e Funcionalidades.

Todas as rotas possuem autentiação, para fazer seu login use a seguinte rota e dados:

#### Autenticação de Usuário
Todas as rotas da API requerem autenticação. Para realizar o login e acessar as rotas protegidas, utilize a seguinte rota e os dados de exemplo abaixo.

### A pasta postman_collection possui todas as rotas com os exemplos.

- POST `localhost:4568/auth/login`
  Esta rota permite que o usuário realize o login em sua conta. Ao fazer isso, um token de autenticação será retornado, que deve ser utilizado para acessar as rotas protegidas da API.
    ```
    body: {
      "email": "testeWefit@gmail.com",
      "password": "senhaDeTeste123"
    }
  ```
  Exemplo de autenticação:
  ```
  curl -X POST "localhost:4568/auth/login" \
     -H "Content-Type: application/json" \
     -d '{
           "email": "testeWefit@gmail.com",
           "password": "senhaDeTeste123"
         }'
  ```

  Exemplo para consumir as rotas da API:
  ```
  curl -X GET -H "Authorization: Bearer {token da requisicao anterior}" "localhost:4568/profile"
  ```

  
#### 1. Criação de Perfil de Usuário
- POST `localhost:4568/profile`
  Cria o perfil de um usuário.
    ```
        body: {
            "name": "João teste refact",
            "cnpj": "209238493894",
            "cpf": "470.278.570-22",
            "cell_phone":  "(55) 12 998767-0954",
            "email": "joao@gmail.com",
            "confirm_email": "joao@gmail.com",
            "state_name": "São aaaa",
            "postal_code": "12246021",
            "street_name": "Rua 1",
            "number": 1,
            "city_name": "São Jose dos Campos",
            "neighborhood": "Bairro 2"
        }
  ```
#### 2. Listagem de Perfis de Usuários
- GET `localhost:4568/profile`
  Retorna todos os perfis de usuários cadastrados.

#### 3. Obter Perfil de Usuário por ID
- GET `localhost:4568/profile/:id`
  Retorna o perfil de um usuário específico, identificado pelo parâmetro :id.

#### 4. Atualização do perfil de um usuário pelo seu ID
- PUT `localhost:4568/profile/:id`
  Atualiza o perfil de um usuário específico, identificado pelo parâmetro :id.

#### 5. Excluir o perfil de um usuário pelo seu ID
- DELETE `localhost:4568/profile/:id`
  Exclui o perfil de um usuário específico, identificado pelo parâmetro :id.