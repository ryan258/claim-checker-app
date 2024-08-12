# Claim Checker App

This project is a Node.js-based application that uses a local Ollama AI (llama3.1:latest model) to check the validity of user-submitted claims. The app features a simple HTML/CSS/JS frontend and a Node.js backend that communicates with the Ollama API.

## Project Roadmap

### 1. Setup and Configuration
- [x] Initialize Node.js project
- [x] Set up GitHub repository
- [x] Configure environment variables
- [x] Install necessary dependencies

### 2. Backend Development
- [x] Set up Express.js server
- [x] Create API endpoint to receive claims
- [x] Implement Ollama API communication
- [x] Develop claim processing logic
- [x] Create response parsing and structuring module
- [x] Implement basic error handling and logging

### 3. Frontend Development
- [x] Design basic HTML structure for the app
- [x] Create CSS styles for a clean, user-friendly interface
- [x] Implement JavaScript for form submission and result display
- [x] Add markdown parsing for formatted AI responses
- [ ] Enhance input validation on the client side

### 4. AI Integration
- [x] Fine-tune prompt engineering for accurate claim checking
- [x] Implement response parsing to extract relevant information
- [ ] Develop a scoring or confidence system for claim validity

### 5. Testing
- [ ] Write unit tests for backend functions
- [ ] Perform integration testing with Ollama API
- [ ] Conduct user acceptance testing

### 6. Documentation
- [x] Complete inline code documentation
- [ ] Write API documentation
- [ ] Create user guide for running the app locally

### 7. Deployment and CI/CD
- [ ] Set up CI/CD pipeline
- [ ] Prepare deployment scripts
- [ ] Document deployment process

## File Structure

```
claim-checker-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── routes/
│   │   └── api.js
│   ├── services/
│   │   └── ollamaService.js
│   └── utils/
│       └── responseParser.js
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Ensure you have Ollama installed and running locally with the llama3.1:latest model
4. Set up your `.env` file with the following variables:
   ```
   API_URL=http://localhost:11434/api/generate
   MODEL_NAME=llama3.1:latest
   PORT=3000
   ```
5. Run the app with `npm start`

## Features

- Simple web interface for submitting claims
- Backend integration with local Ollama AI for claim verification
- Markdown parsing of AI responses for formatted display
- Basic error handling and logging

## Known Issues

- [List any known issues or limitations]

## Future Improvements

- Enhance error handling and user feedback
- Implement more sophisticated AI response parsing
- Add user authentication and claim history
- Improve UI/UX with more interactive elements

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.