class ResponseParser {
    parse(aiResponse) {
      if (!aiResponse) {
        console.error('Received undefined or null AI response');
        return {
          verdict: 'Error',
          confidence: 'None',
          explanation: 'Failed to get a response from the AI.'
        };
      }
  
      const lowercaseResponse = aiResponse.toLowerCase();
      let verdict = 'Uncertain';
      let confidence = 'Low';
  
      if (lowercaseResponse.includes('false')) {
        verdict = 'False';
        confidence = lowercaseResponse.includes('certainly') || lowercaseResponse.includes('definitely') ? 'High' : 'Medium';
      } else if (lowercaseResponse.includes('true')) {
        verdict = 'True';
        confidence = lowercaseResponse.includes('certainly') || lowercaseResponse.includes('definitely') ? 'High' : 'Medium';
      }
  
      return {
        verdict,
        confidence,
        explanation: aiResponse
      };
    }
  }
  
  module.exports = new ResponseParser();