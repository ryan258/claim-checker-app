const fs = require('fs').promises;
const path = require('path');

class Logger {
  constructor() {
    this.logDir = path.join(__dirname, '..', '..', 'logs');
    this.logFile = path.join(this.logDir, 'claim_checks.log');
  }

  async log(claim, result) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      claim,
      verdict: result.verdict,
      confidence: result.confidence,
      explanation: result.explanation
    };

    const logString = JSON.stringify(logEntry) + '\n';

    try {
      await fs.mkdir(this.logDir, { recursive: true });
      await fs.appendFile(this.logFile, logString);
      console.log(`Logged result for claim: "${claim}"`);
    } catch (error) {
      console.error('Error writing to log file:', error);
    }
  }
}

module.exports = new Logger();