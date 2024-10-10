# AI Image Generator

## Description

The AI Image Generator is a web application that allows users to generate images using OpenAI's DALL-E model. Users can input a prompt, and upon clicking the "Generate" button, the application fetches images based on the provided prompt and displays them. The app features a dark mode for a better user experience.

## Features

- **Image Generation:** Enter a prompt to generate images using the DALL-E model.
- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Works seamlessly on various screen sizes.
- **Error Handling:** Displays toast notifications for user feedback.

## Technologies Used

- **Frontend:**

  - React
  - React-Bootstrap
  - react-toastify (for toast notifications)

- **Backend:**
  - Node.js
  - Express
  - OpenAI API

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- OpenAI API Key (create an account at [OpenAI](https://openai.com/) if you don't have one)

### Clone the Repository

```bash
git clone https://github.com/maxwellarmah01/ai-image-generator.git
cd ai-image-generator
```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the root directory:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a prompt in the search bar.
3. Click the "Generate" button to fetch images based on your prompt.
4. Toggle dark mode using the button in the navbar.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [OpenAI](https://openai.com/) for providing the DALL-E model.
- [React](https://reactjs.org/) for the frontend framework.
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend.
