# Claim Checker App

This project is a Node.js-based application that uses a local Ollama AI (llama3.1:latest model) to check the validity of user-submitted claims. The app features a simple HTML/CSS/JS frontend and a Node.js backend that communicates with the Ollama API.

## Project Roadmap

### 1. Setup and Configuration
- [x] Initialize Node.js project
- [x] Set up GitHub repository
- [ ] Configure environment variables
- [ ] Install necessary dependencies

### 2. Backend Development
- [ ] Set up Express.js server
- [ ] Create API endpoint to receive claims
- [ ] Implement Ollama API communication
- [ ] Develop claim processing logic
- [ ] Create response parsing and structuring module
- [ ] Implement error handling and logging

### 3. Frontend Development
- [ ] Design basic HTML structure for the app
- [ ] Create CSS styles for a clean, user-friendly interface
- [ ] Implement JavaScript for form submission and result display
- [ ] Add input validation on the client side

### 4. AI Integration
- [ ] Fine-tune prompt engineering for accurate claim checking
- [ ] Implement response parsing to extract relevant information
- [ ] Develop a scoring or confidence system for claim validity

### 5. Testing
- [ ] Write unit tests for backend functions
- [ ] Perform integration testing with Ollama API
- [ ] Conduct user acceptance testing

### 6. Documentation
- [ ] Complete inline code documentation
- [ ] Write API documentation
- [ ] Create user guide for running the app locally

### 7. Deployment and CI/CD
- [ ] Set up CI/CD pipeline
- [ ] Prepare deployment scripts
- [ ] Document deployment process

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Set up your `.env` file with the following variables:
   ```
   API_URL=http://localhost:11434/api/generate
   MODEL_NAME=llama3.1:latest
   PORT=3000
   ```
4. Run the app with `npm start`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.