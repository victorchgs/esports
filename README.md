# 🎮 Assistente de Meta para eSports

Uma aplicação web que utiliza o poder da API do Google Gemini para atuar como um assistente especializado em estratégias, builds e dicas para diversos jogos populares. Faça uma pergunta e receba uma resposta atualizada e formatada diretamente da IA.

 <!-- Substitua com um screenshot real do seu projeto -->

---

## ✨ Funcionalidades Principais

- **Integração com a API do Google Gemini**: Utiliza o modelo `gemini-2.5-flash` para gerar respostas.
- **IA Especializada**: O prompt enviado à API instrui o modelo a agir como um especialista no jogo selecionado, garantindo respostas focadas e relevantes.
- **Busca em Tempo Real**: A requisição utiliza a ferramenta de busca do Gemini (`google_search`) para obter informações atualizadas sobre patches e o meta atual.
- **Interface Intuitiva**: Um formulário simples e direto para o usuário inserir sua chave de API, selecionar o jogo e fazer a pergunta.
- **Suporte a Múltiplos Jogos**: Facilmente extensível para incluir novos jogos na lista de seleção.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
- **APIs e Bibliotecas**:
  - **Google Gemini API**: Para a geração de conteúdo inteligente.
  - **Showdown.js**: Para converter as respostas em Markdown para HTML.

---

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o Repositório**

    ```bash
    git clone https://github.com/victorchgs/esports.git
    ```

2.  **Navegue até a Pasta do Projeto**

    ```bash
    cd esports
    ```

3.  **Obtenha uma Chave de API do Gemini**

    - Acesse o Google AI Studio.
    - Crie um novo projeto e gere uma chave de API (API Key).

4.  **Abra o Projeto no Navegador**

    - Abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

5.  **Utilize a Aplicação**
    - No primeiro campo do formulário, cole a sua chave de API do Gemini.
    - Selecione o jogo sobre o qual deseja perguntar.
    - Digite sua pergunta no campo de texto.
    - Clique em "Perguntar" e aguarde a resposta da IA.

---

## ⚠️ Alerta de Segurança

Este projeto foi desenvolvido para fins de estudo e demonstração. A chave de API do Google Gemini é inserida diretamente no frontend e enviada a cada requisição.

**Nunca exponha suas chaves de API em código do lado do cliente (frontend) em um ambiente de produção.**

Qualquer pessoa com acesso ao site pode visualizar a chave nas ferramentas de desenvolvedor do navegador e usá-la para fazer requisições em seu nome, o que pode gerar custos inesperados.

A abordagem segura para um projeto em produção seria criar um backend (servidor) que atuaria como um intermediário. O frontend enviaria a pergunta para o seu backend, e o backend adicionaria a chave de API de forma segura antes de encaminhar a requisição para a API do Gemini.

---

## 📂 Estrutura do Projeto

```
esports/
├── assets/
│   ├── bg.jpg
│   └── logo.png
├── index.html      # Estrutura principal da página
├── style.css       # Estilização visual e animações
├── script.js       # Lógica da aplicação e chamadas à API
└── README.md       # Este arquivo
```
