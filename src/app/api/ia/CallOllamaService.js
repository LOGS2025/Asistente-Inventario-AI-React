import { Ollama } from "ollama";

const ollama = new Ollama({
  host: 'http://127.0.0.1:11434'
});

const llama = 'llama3.2:latest'

// src/app/API/IA/CallOllamaService.js

export const postPromptOllama = async (prompt) => {
  console.log("Calling Ollama with prompt:", prompt);
  
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2:latest',
        prompt: prompt,
        stream: false
      })
    });
    
    // Check if response exists
    if (!response) {
      throw new Error("No response from Ollama server");
    }
    
    console.log("Response status:", response.status);2
    console.log("Response ok:", response.ok);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ollama error response:", errorText);
      throw new Error(`Ollama returned ${response.status}: ${response.statusText || errorText}`);
    }
    
    const data = await response.json();
    console.log("Ollama success response:", data.response);
    
    return {
      message: {
        content: data.response
      }
    };
    
  } catch (error) {
    console.error("Error in postPromptOllama:", error);
    // Re-throw with a clear message
    throw new Error(`Failed to connect to Ollama: ${error.message}`);
  }
};

