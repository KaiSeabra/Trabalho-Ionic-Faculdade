# 📱 App Ionic - Rick & Morty (Angular Standalone)

Este é um projeto de exemplo para demonstrar a criação de um aplicativo com **Ionic 7 / Angular 17+** usando a nova arquitetura **Standalone** (sem NgModules).

O app consome a **API pública do Rick and Morty** para listar personagens, carregar mais dinamicamente com scroll infinito e exibir detalhes de cada personagem, incluindo o uso de pipes customizados.

---

## ✨ Funcionalidades Principais

- **Arquitetura 100% Standalone:** Utiliza os novos componentes, pipes e providers standalone do Angular.  
- **Consumo de API:** Busca dados da Rick and Morty API usando `HttpClient` (`provideHttpClient`).  
- **Roteamento Completo:** Navegação entre três páginas com carregamento lento (lazy-loading):  
  - `/home`: Página inicial.  
  - `/characters`: Lista de personagens.  
  - `/character/:id`: Detalhes de um personagem.  
- **Scroll Infinito:** Na página de lista, novos personagens são carregados automaticamente conforme o usuário rola a tela, usando `ion-infinite-scroll`.  
- **Pipes Customizados:**  
  - `statusColorPipe`: Retorna uma cor (ex: 'success', 'danger') com base no status do personagem (Alive, Dead).  
  - `genderIconPipe`: Retorna um nome de ícone (ex: 'male-outline') com base no gênero.  
  - `capitalizePipe` e `truncatePipe`: Para manipulação de textos.  
- **Loading Skeletons:** Exibe "esqueletos" de UI (`ion-skeleton-text`) enquanto os dados da API estão sendo carregados.  

---

## 🛠️ Tecnologias Utilizadas

- Ionic 7  
- Angular 17+ (com componentes Standalone)  
- TypeScript  
- Rick and Morty API  

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

- Node.js (versão LTS recomendada)  
- Ionic CLI (Instale com `npm install -g @ionic/cli`)  

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-SEU-REPO.git

npm install

ionic serve
