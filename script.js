const apiKeyInput = document.getElementById("api-key-input");
const gameSelect = document.getElementById("game-select");
const questionInput = document.getElementById("question-input");
const askButton = document.getElementById("ask-button");
const aiResponse = document.getElementById("ai-response");
const form = document.getElementById("form");

const markdownToHtml = (text) => {
  const converter = new showdown.Converter();

  return converter.makeHtml(text);
};

const askAi = async (apiKey, game, question) => {
  const model = "gemini-2.5-flash";
  const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const prompt = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}.
    
    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, builds e dicas.

    ## Regras
    - Se você não sabe a resposta, responda com "Não sei" e não tente inventar uma resposta.
    - Se a pergunta não está relacionada ao jogo, responda com "Essa pergunta não está relacionada ao jogo".
    - Considere a data atual ${new Date().toLocaleDateString("pt-BR")}.
    - Faça pesquisas atualizadas sobre o patch atual, baseada na data atual, para dar uma resposta coerente.
    - Nunca responda itens que você não tenha certeza de que existe no patch atual.

    ## Resposta
    - Economize na resposta, seja direto e responda no máximo 500 caracteres.
    - Responda em markdown.
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ---

    Aqui está a pergunta do usuário: ${question}
  `;
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];
  const tools = [
    {
      google_search: {},
    },
  ];

  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents,
      tools,
    }),
  });

  const data = await response.json();

  return data.candidates[0].content.parts[0].text;
};

const sendForm = async (e) => {
  e.preventDefault();

  const apiKey = apiKeyInput.value;
  const game = gameSelect.value;
  const question = questionInput.value;

  if (apiKey == "" || game == "" || question == "") {
    alert("Por favor, preencha todos os campos.");

    return;
  }

  askButton.disabled = true;
  askButton.textContent = "Carregando...";
  askButton.classList.add("loading");
  aiResponse.classList.add("hidden");

  try {
    const text = await askAi(apiKey, game, question);

    aiResponse.querySelector(".response-content").innerHTML =
      markdownToHtml(text);
    aiResponse.classList.remove("hidden");
  } catch (error) {
    console.log("Erro: ", error);
  } finally {
    askButton.disabled = false;
    askButton.textContent = "Perguntar";
    askButton.classList.remove("loading");
  }
};

form.addEventListener("submit", sendForm);
