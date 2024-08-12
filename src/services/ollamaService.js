const axios = require('axios');

class OllamaService {
  constructor() {
    this.apiUrl = process.env.API_URL;
    this.modelName = process.env.MODEL_NAME;
  }

  async checkClaim(claim) {
    try {
      const prompt = `Please analyze the following claim and determine if it's true or false. Provide a brief explanation for your conclusion. Format your response using markdown, especially for lists and emphasis.\n\nClaim: "${claim}"`;

      console.log('Sending request to Ollama API...');
      const response = await axios.post(this.apiUrl, {
        model: this.modelName,
        prompt: prompt
      }, {
        responseType: 'stream'
      });

      console.log('Received response from Ollama API');

      let fullResponse = '';

      return new Promise((resolve, reject) => {
        response.data.on('data', (chunk) => {
          const chunkStr = chunk.toString();
        //   console.log('Received chunk:', chunkStr);
          const lines = chunkStr.split('\n').filter(line => line.trim() !== '');
          for (const line of lines) {
            try {
              const parsedLine = JSON.parse(line);
              if (parsedLine.response) {
                fullResponse += parsedLine.response;
              }
            } catch (err) {
              console.error('Error parsing JSON:', err);
            }
          }
        });

        response.data.on('end', () => {
          console.log('Full response:', fullResponse);
          resolve(fullResponse.trim());
        });

        response.data.on('error', (err) => {
          console.error('Error in stream:', err);
          reject(new Error('Error processing Ollama API stream: ' + err.message));
        });
      });
    } catch (error) {
      console.error('Error in OllamaService:', error);
      throw new Error('Failed to process claim with Ollama API');
    }
  }
}

module.exports = new OllamaService();