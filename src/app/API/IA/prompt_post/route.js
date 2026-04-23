// src/app/API/IA/prompt_post/route.js
import { postPromptOllama } from "../CallOllamaService";

export const POST = async (request) => {
  console.log("=== POST endpoint started ===");
  
  try {
    const body = await request.json();
    const { prompt } = body;
    
    if (!prompt) {
      return Response.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }
    
    console.log("Processing prompt:", prompt);
    const response = await postPromptOllama(prompt);
    console.log("Ollama response:", response.message.content);
    
    // Return success response
    return Response.json({ 
      success: true, 
      message: response.message.content
    });
  
  } catch(error) {
    console.error("Error in POST handler:", error);
    
    // IMPORTANT: Always return a Response object, even on error
    return Response.json(
      { 
        success: false, 
        error: error.message,
        details: error.toString()
      }, 
      { status: 500 }
    );
  }
};

