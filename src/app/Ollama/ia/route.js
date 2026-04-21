import { postPromptOllama } from "./CallOllamaService";

export const GET = async () => { 

  // const body = await request.json();

  // const { prompt } = body;

  try {
    const prompt = 'Genera un cuento';
    
    const response = await postPromptOllama(prompt);

    console.log(response);
    return Response.json(response);
  
  } catch(error) {
    console.error(error);
  }
}
