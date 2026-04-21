import { Ollama } from "ollama";

const ollama = new Ollama();

const llama = 'llama3.2:1b'

export const postPromptOllama = async (prompt) => {
  const response = await ollama.chat(
    {
      model : llama,
      messages : [{role : 'user', content : prompt}],
      stream : false
    }
  )
  return response
}
