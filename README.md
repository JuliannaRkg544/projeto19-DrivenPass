# projeto19-DrivenPass

-- Rotas de autenticação --

• POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "senha" (mínimo de 10 caracteres)
      }

• POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "senha"
      }


-- Rotas de cartões --

• POST /card-creation
    - Rota para registrar um novo cartão
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {
        "title": "título",
        "number": "1234123412341234",
        "name": "nome",
        "securityCode": "123",
        "expirationDate": "MM/YY",
        "password": "1234",
        "isVirtual": true | false,
        "type": "credit" | "debit" | "credit_debit"
      }

• GET /card-search?id=$
    - Rota para buscar cartão do usuário (todos ou um)
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}

• DELETE /card-deletation
    - Rota para deletar um cartão
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}


-- Rotas de credenciais --

• POST /credential-create
    - Rota para registrar nova credencial
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {
        "title": "título",
        "url": "http://www.url.com",
        "user": "username",
        "password": "senha"
      }

• GET /credential-search?id=$
    - Rota para buscar credenciais do usuário (todas ou uma)
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}

• DELETE /credential-deletation/:id
    - Rota para deletar uma credencial
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}


-- Rotas de notas --

• POST /notes-creation
    - Rota para registrar nova nota
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {
        "title": "título",
        "note": "nota"
      }

• GET /notes-search?id=$
    - Rota para buscar notas do usuário (todas ou uma)
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}

• DELETE /notes/deletation/:id
    - Rota para deletar uma nota
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}


-- Rotas de wifi --

• POST /wifi-creation
    - Rota para registrar novo wifi
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {
        "title": "título",
        "name": "nome",
        "password": "senha"
      }

• GET /wifi-serach?id=$
    - Rota para buscar wifis do usuário (todos ou um)
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}

• DELETE /wifi-deletation/:id
    - Rota para deletar um wifi
    - headers: { "Authorization": `Bearer ${token}` }
    - body: {}
