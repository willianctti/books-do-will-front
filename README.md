# Livraria Online - Frontend

Este é o frontend da Livraria Online, um projeto desenvolvido em Vite, React e TypeScript para integrar com um backend em Java Spring Web.


## Funcionalidades

- Listagem de livros disponíveis (que eu li)
- Adição de novos livros
- Interface amigável e responsiva

## Tecnologias Utilizadas

- **Vite**: Para desenvolvimento rápido e eficiente.
- **React**: Para construção da interface do usuário.
- **TypeScript**: Para tipagem estática durante o desenvolvimento.
- **CSS**: Estilização utilizando módulos CSS para melhor organização.

## Pré-requisitos

- Node.js (v14.x ou superior)
- npm (v7.x ou superior)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/willianctti/books-do-will-front
cd filmes-do-will-front

# Instale as dependências
npm install

# Configure as variáveis de ambiente
echo "REACT_APP_API_URL=http://localhost:8080" > .env

# Inicie o servidor de desenvolvimento
npm run dev
